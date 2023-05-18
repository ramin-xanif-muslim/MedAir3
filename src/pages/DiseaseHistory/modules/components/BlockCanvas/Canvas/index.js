import { Box, Circle } from '@chakra-ui/react'
import { Button, Form, Input, Select, Space } from 'antd'
import React, { memo, useEffect, useRef, useState } from 'react'
import CanvasDraw from 'react-canvas-draw'
import { useStore } from '../../../../../../modules/store'


function CanvasComponent({ image, imageName }) {

    const descriptionsCanvas = useStore(store => store.descriptionsCanvas)
    const setDescriptionsCanvas = useStore(store => store.setDescriptionsCanvas)

    const savedDrawingCanvas = useStore(store => store.savedDrawingCanvas)
    const setSavedDrawingCanvas = useStore(store => store.setSavedDrawingCanvas)

    const refCanvas = useRef(null);

    const [form] = Form.useForm()

    const [colorCanvas, setColorCanvas] = useState('green')
    const [disableCanvas, setDisableCanvas] = useState(true);
    const [brushRadius, setBrushRadius] = useState(20);
    const [disableSaveBtn, setDisableSaveBtn] = useState(true);

    const [X_PositionMouse, setX_PositionMouse] = useState()
    const [Y_PositionMouse, setY_PositionMouse] = useState()

    const handleMouseMove = (event) => {
        setX_PositionMouse(event.nativeEvent.offsetX);
        setY_PositionMouse(event.nativeEvent.offsetY);
    };

    const getDescriptionPointColor = (arr, x, y) => {
        arr.forEach((i, index) => {
            let isIf = false
            i.points.forEach(c => {
                let isX = Math.abs(x - Math.round(c.x)) < 15
                let isY = Math.abs(y - Math.round(c.y)) < 15
                if (isY === true && isX === true && !isIf) {
                    isIf = true
                    let num = 0
                    let arrSelectedColors = []
                    arr.forEach((d, indexD) => {
                        if (d.brushColor === i.brushColor) {
                            num += 1
                            arrSelectedColors.push({ num, index: indexD })
                        }
                    })
                    let findEl = arrSelectedColors.find(f => f.index === index)
                    const description = descriptionsCanvas[imageName + i.brushColor + findEl.num]
                    form.setFieldsValue({ description })
                    setColorCanvas(i.brushColor)
                }
            })
        })
    }

    const onClick = () => {
        if (disableCanvas) {
            let data = refCanvas.current.getSaveData();
            let dataParse = JSON.parse(data)
            getDescriptionPointColor(dataParse.lines, X_PositionMouse, Y_PositionMouse)
        }
    };

    const onFieldsChange = ([{ name, value }]) => {
    }

    const onChangeCanvas = () => {
        form.setFieldsValue({ description: '' })
        setDisableSaveBtn(false)
    };

    useEffect(() => {
        let colorNumber = computationColorNumber()
        let objProperty = imageName + colorCanvas + colorNumber;
        if (Object.hasOwn(descriptionsCanvas, objProperty)) {
            form.setFieldsValue({ description: descriptionsCanvas[objProperty] })
        } else {
            form.setFieldsValue({ description: '' })
        }
    }, [colorCanvas]);

    const onChangeDescription = (e) => {
        let colorNumber = computationColorNumber()
        let objProperty = imageName + colorCanvas + colorNumber;
        descriptionsCanvas[objProperty] = e.target.value;
        setDescriptionsCanvas(descriptionsCanvas);
    };

    const computationColorNumber = () => {
        let colorNumber = 0
        let data = refCanvas.current.getSaveData();
        data = data ? JSON.parse(data) : ''
        if (data?.lines[0]) {
            data.lines.forEach(i => {
                if (i.brushColor === colorCanvas) {
                    colorNumber += 1
                }
            })
        }

        return colorNumber ? colorNumber : 1
    }

    const handleAdd = () => {
        setBrushRadius(20);
        setDisableCanvas(false);
    };
    const handleSave = () => {
        setBrushRadius(0);
        setDisableSaveBtn(true);
        setDisableCanvas(true);
        let data = refCanvas.current.getSaveData();
        savedDrawingCanvas[imageName] = data;
        setSavedDrawingCanvas(savedDrawingCanvas);
    };
    const handleClear = () => {
        refCanvas.current.undo();
    };

    return (
        <Box bg='pink.100' p='1' borderRadius='10px'>

            <Form
                form={form}
                onFieldsChange={onFieldsChange}
                labelAlign='left'
                style={{ width: '100%' }}
            >

                <Space.Compact width='100%' style={{ width: "100%", alignItems: 'center' }}>

                    <Form.Item
                        style={{ width: "100%" }}
                    >
                        <Form.Item noStyle name="colorCanvas">
                            <Select
                                onSelect={(e) => setColorCanvas(e)}
                                defaultValue='green'
                                suffixIcon={<Circle mr='4' size='20px' bg={colorCanvas} />}
                                style={{ width: "100%" }}
                            >
                                <Select.Option value="green">Benign tumor</Select.Option>
                                <Select.Option value="red">Maligan tumor</Select.Option>
                                <Select.Option value="black">Maligan ?</Select.Option>
                                <Select.Option value="blue">My operation</Select.Option>
                                <Select.Option value="#AA00FF">Operated not by me</Select.Option>
                            </Select>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item>
                        <Button onClick={handleAdd}>Edit</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button disabled={disableSaveBtn} type='primary' onClick={handleSave}>Save</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={handleClear}>Clear</Button>
                    </Form.Item>

                </Space.Compact>

                <Form.Item label='Description' name='description'>
                    <Input.TextArea disabled={disableSaveBtn} showCount maxLength={3000}
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
                    style={{ position: 'absolute', width: '100%', height: '100%' }}
                    imgSrc={image}
                    className="canvas-draw"
                    brushColor={colorCanvas}
                    ref={refCanvas}
                    onChange={onChangeCanvas}
                    disabled={disableCanvas}
                    brushRadius={brushRadius}
                    saveData={savedDrawingCanvas ? savedDrawingCanvas[imageName] : ""
                    }
                />
            </Box>

        </Box>
    )
}

export default memo(CanvasComponent)