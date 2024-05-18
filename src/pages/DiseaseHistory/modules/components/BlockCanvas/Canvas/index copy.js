import { Box, Circle, Flex } from "@chakra-ui/react";
import { Button, Form, Input, Select, Space } from "antd";
import React, { memo, useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { useStore } from "../../../../../../modules/store";

const optionsSelectColorCanvas = [
    { value: "green", name: "Benign tumor" },
    { value: "red", name: "Maligan tumor" },
    { value: "black", name: "Maligan ?" },
    { value: "blue", name: "My operation" },
    { value: "#AA00FF", name: "Operated not by me" },
];

function CanvasComponent({ image, imageName }) {
    const canvasRef = useRef(null);
    const textAreaRef = useRef(null);
    
    const isDisabledClear = () => {
        let data = canvasRef.current.getSaveData();
        data = data ? JSON.parse(data) : "";
        return !data.lines[0];
    }

    const [disabledClear, setDisabledClear] = useState(false);
    const [selectedLineIndex, setSelectedLineIndex] = useState(null);

    useEffect(() => {
        if(canvasRef.current) {
            setDisabledClear(isDisabledClear())
        }
    
        return () => {
            setDisabledClear(false)
        }
    }, []);

    const [form] = Form.useForm();

    const savedDrawingCanvas = useStore((store) => store.savedDrawingCanvas);
    const setSavedDrawingCanvas = useStore(
        (store) => store.setSavedDrawingCanvas
    );

    const [descriptions, setDescriptions] = useState({});

    useEffect(() => {
        if (savedDrawingCanvas[imageName + "Desc"]) {
            const str = savedDrawingCanvas[imageName + "Desc"];
            setDescriptions(JSON.parse(str));
        }
    }, []);

    const [colorCanvas, setColorCanvas] = useState("green");
    const [disableCanvas, setDisableCanvas] = useState(true);
    const [brushRadius, setBrushRadius] = useState(20);
    const [disableSaveBtn, setDisableSaveBtn] = useState(true);

    const [X_PositionMouse, setX_PositionMouse] = useState();
    const [Y_PositionMouse, setY_PositionMouse] = useState();

    const handleMouseMove = (event) => {
        setX_PositionMouse(event.nativeEvent.offsetX);
        setY_PositionMouse(event.nativeEvent.offsetY);
    };

    const getDescriptionPointColor = (arr, x, y) => {
        arr.forEach((i, index) => {
            let isIf = false;
            i.points.forEach((c) => {
                let isX = Math.abs(x - Math.round(c.x)) < 15;
                let isY = Math.abs(y - Math.round(c.y)) < 15;
                if (isY === true && isX === true && !isIf) {
                    isIf = true;
                    let num = 0;
                    let arrSelectedColors = [];
                    arr.forEach((d, indexD) => {
                        if (d.brushColor === i.brushColor) {
                            num += 1;
                            arrSelectedColors.push({ num, index: indexD });
                        }
                    });
                    let findEl = arrSelectedColors.find(
                        (f) => f.index === index
                    );
                    const description = descriptions[i.brushColor + findEl.num];
                    form.setFieldsValue({
                        description,
                        colorCanvas: i.brushColor,
                    });
                    setColorCanvas(i.brushColor);
                    setSelectedLineIndex(index); // Save the selected line index
                }
            });
        });
    };

    const onClick = () => {
        if (disableCanvas) {
            let data = canvasRef.current.getSaveData();
            let dataParse = JSON.parse(data);
            getDescriptionPointColor(
                dataParse.lines,
                X_PositionMouse,
                Y_PositionMouse
            );
        }
        textAreaRef.current.focus();
    };

    const onChangeCanvas = () => {
        setDisabledClear(isDisabledClear());
        form.setFieldsValue({ description: "" });
        setDisableSaveBtn(false);
        setBrushRadius(0);
        setDisableCanvas(true);
    };

    useEffect(() => {
        let colorNumber = computationColorNumber();
        let objProperty = colorCanvas + colorNumber;
        if (Object.hasOwn(descriptions, objProperty)) {
            form.setFieldsValue({ description: descriptions[objProperty] });
        } else {
            form.setFieldsValue({ description: "" });
        }
    }, [colorCanvas]);

    const onChangeDescription = (e) => {
        let colorNumber = computationColorNumber();
        let param = colorCanvas + colorNumber;
        descriptions[param] = e.target.value;
        setDescriptions({ ...descriptions });
        setDisableSaveBtn(false);
    };

    const computationColorNumber = () => {
        let colorNumber = 0;
        let data = canvasRef.current.getSaveData();
        data = data ? JSON.parse(data) : "";
        if (data?.lines[0]) {
            data.lines.forEach((i) => {
                if (i.brushColor === colorCanvas) {
                    colorNumber += 1;
                }
            });
        }

        return colorNumber ? colorNumber : 1;
    };

    const handleAdd = () => {
        setBrushRadius(20);
        setDisableCanvas(false);
    };

    const onFieldsChange = useStore((store) => store.onFieldsChange);

    const handleSave = () => {
        onFieldsChange();
        setBrushRadius(0);
        setDisableSaveBtn(true);
        setDisableCanvas(true);
        let data = canvasRef.current.getSaveData();
        savedDrawingCanvas[imageName + "Data"] = data;
        savedDrawingCanvas[imageName + "Desc"] = JSON.stringify(descriptions);
        setSavedDrawingCanvas(savedDrawingCanvas);
    };

    const deleteSelectedLine = () => {
        if (selectedLineIndex !== null) {
            let data = canvasRef.current.getSaveData();
            let dataParse = JSON.parse(data);
            const deletedLine = dataParse.lines[selectedLineIndex];
            const color = deletedLine.brushColor;
            let colorNumber = 0;

            dataParse.lines.forEach((line, index) => {
                if (line.brushColor === color) {
                    colorNumber += 1;
                }
                if (index === selectedLineIndex) {
                    colorNumber -= 1; // adjust colorNumber for the deleted line
                }
            });

            let param = color + (colorNumber ? colorNumber + 1 : 1);
            delete descriptions[param];
            setDescriptions({ ...descriptions });

            dataParse.lines.splice(selectedLineIndex, 1);
            canvasRef.current.loadSaveData(JSON.stringify(dataParse));
            setSelectedLineIndex(null); // Clear the selected line index
        }
    };

    const handleClear = () => {
        deleteSelectedLine();
    };

    const handleRestoreDrawing = () => {
        let data =
            savedDrawingCanvas && savedDrawingCanvas[imageName + "Data"]
                ? savedDrawingCanvas[imageName + "Data"]
                : "";

        if (data) {
            canvasRef.current.loadSaveData(data);
            setTimeout(() => setDisableSaveBtn(true), 100);
        }
    };

    useEffect(() => {
        let timer = setTimeout(() => handleRestoreDrawing(), 1000);
        return () => clearTimeout(timer);
    }, [canvasRef]);

    return (
        <Box bg="pink.100" p="1" borderRadius="10px">
            <Form
                form={form}
                labelAlign="left"
                style={{ width: "100%" }}
                initialValues={{
                    colorCanvas: "green",
                }}
            >
                <Space.Compact
                    width="100%"
                    style={{ width: "100%", alignItems: "center" }}
                >
                    <Form.Item style={{ width: "100%" }}>
                        <Form.Item noStyle name="colorCanvas">
                            <Select
                                onSelect={(e) => setColorCanvas(e)}
                                style={{ width: "100%" }}
                            >
                                {optionsSelectColorCanvas.map((i) => {
                                    const { value, name } = i;
                                    return (
                                        <Select.Option
                                            key={value}
                                            value={value}
                                        >
                                            <Flex
                                                alignItems="center"
                                                justifyContent="space-between"
                                            >
                                                <Box>{name}</Box>
                                                <Circle
                                                    size="20px"
                                                    bg={value}
                                                />
                                            </Flex>
                                        </Select.Option>
                                    );
                                })}
                            </Select>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item>
                        <Button 
                            disabled={!disableSaveBtn} onClick={handleAdd}>Add</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            disabled={disableSaveBtn}
                            type="primary"
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button disabled={disabledClear} onClick={handleClear}>Clear</Button>
                    </Form.Item>
                </Space.Compact>

                <Form.Item label="Description" name="description">
                    <Input.TextArea
                        ref={textAreaRef}
                        showCount
                        maxLength={1500}
                        onChange={onChangeDescription}
                    />
                </Form.Item>
            </Form>

            <Box
                w="100%"
                h="100%"
                position="relative"
                paddingBottom="100%"
                onMouseMove={handleMouseMove}
                onClick={onClick}
            >
                <CanvasDraw
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                    }}
                    imgSrc={image}
                    className="canvas-draw"
                    brushColor={colorCanvas}
                    ref={canvasRef}
                    onChange={onChangeCanvas}
                    disabled={disableCanvas}
                    brushRadius={brushRadius}
                />
            </Box>
        </Box>
    );
}

export default memo(CanvasComponent);
