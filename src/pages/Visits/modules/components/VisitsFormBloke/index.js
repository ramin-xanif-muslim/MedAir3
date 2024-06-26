import React, { memo, useEffect, useState } from "react";
import {
    Button,
    Checkbox,
    DatePicker,
    Form,
    Input,
    Radio,
    Select,
    Space,
} from "antd";
import { Box, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import { useLocalStorageStore, useStore } from "../../../../../modules/store";
import dayjs from "dayjs";
import { useQuery } from "react-query";
import { fetchManagersPlace } from "../../../../../modules/api";

function VisitsFormBloke(props) {
    const { selectedRowKey, setSelectedRowKey, form } = props;

    const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

    const [isChangeForm, setIsChangeForm] = useState(false);

    const dataSourceVisitTable = useStore(
        (store) => store.dataSourceVisitTable
    );
    const setDataSourceVisitTable = useStore(
        (store) => store.setDataSourceVisitTable
    );
    const setIsFieldsChange = useStore((store) => store.setIsFieldsChange);

    const onFinish = (values) => {
        setIsChangeForm(false);
        setIsFieldsChange(true);
        try {
            if (selectedRowKey) {
                let newData = dataSourceVisitTable.map((i) => {
                    if (i.id === values.id) {
                        values.visitDate = dayjs(values.visitDate).format(
                            "YYYY-MM-DD HH:mm"
                        );
                        return { ...values };
                    } else return i;
                });
                setDataSourceVisitTable(newData);
            } else {
                let id = new Date().getTime();
                values.id = id;
                values.key = id;
                values.visitDate = dayjs(values.visitDate).format(
                    "YYYY-MM-DD HH:mm"
                );
                setDataSourceVisitTable([...dataSourceVisitTable, values]);
            }
            form.resetFields();
            setSelectedRowKey();
        } catch (error) {
            console.log("%c error", "background: red; color: dark", error);
        }
    };

    const handleClear = () => {
        form.resetFields();
        setSelectedRowKey();
    };

    const managersPlaces = useLocalStorageStore(
        (store) => store.managersPlaces
    );
    const setManagersPlaces = useLocalStorageStore(
        (store) => store.setManagersPlaces
    );

    const { data, isFetching } = useQuery(
        ["managers/places"],
        fetchManagersPlace
    );

    useEffect(() => {
        if (!isFetching && data) {
            setManagersPlaces(data);
        }
    }, [isFetching]);

    const onFieldsChange = () => {
        setIsChangeForm(true);
    };

    return (
        <Form
            onFinish={onFinish}
            id="visitTableFormBlok"
            form={form}
            labelWrap
            labelAlign="right"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                visitDate: dayjs(),
                visitType: "Face to face",
            }}
            onFieldsChange={onFieldsChange}
        >
            <SimpleGrid columns={["1", "2"]} gap="1">
                <Box maxW="600px">
                    <Form.Item hidden name="id">
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Date"
                        format="YYYY-MM-DD HH:mm"
                        name="visitDate"
                    >
                        <DatePicker showTime />
                    </Form.Item>

                    <Form.Item label="Address" name="placeName">
                        <Select allowClear>
                            {managersPlaces.map((i, index) => {
                                let val =
                                    i.placeName +
                                    " " +
                                    i.placeCity +
                                    " " +
                                    i.placeCountry;
                                return (
                                    <Select.Option key={index} value={val}>
                                        {val}
                                    </Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Status" name="status">
                        <Select allowClear>
                            <Select.Option value="Unsolved">
                                Unsolved
                            </Select.Option>
                            <Select.Option value="Approved">
                                Approved
                            </Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Visit type" name="visitType">
                        <Select allowClear>
                            <Select.Option value="Face to face">
                                Face to face
                            </Select.Option>
                            <Select.Option value="By phone">
                                By phone
                            </Select.Option>
                            <Select.Option value="By chat">
                                By chat
                            </Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label={"Visit reason"} name="visitReason">
                        <Select allowClear>
                            <Select.Option value="Inspection">
                                Inspection
                            </Select.Option>
                            <Select.Option value="Treatment">
                                Treatment
                            </Select.Option>
                            <Select.Option value="Operation">
                                Operation
                            </Select.Option>
                            <Select.Option value="Control">
                                Control
                            </Select.Option>
                            <Select.Option value="Aesthetics">
                                Aesthetics
                            </Select.Option>
                            <Select.Option value="Prophylactic">
                                Prophylactic
                            </Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label={"Description"} name="visitDesc">
                        <Input.TextArea showCount maxLength={3000} rows={3} />
                    </Form.Item>
                </Box>

                <Box maxW="600px">
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) =>
                            prevValues.visitReason !== currentValues.visitReason
                        }
                    >
                        {({ getFieldValue }) => {
                            if (
                                getFieldValue("visitReason") === "Prophylactic"
                            ) {
                                return (
                                    <>
                                        <Form.Item name="Prophylactic">
                                            <Radio.Group>
                                                <Radio.Button value="Maligant">
                                                    Maligant
                                                </Radio.Button>
                                                <Radio.Button value="Benign">
                                                    Benign
                                                </Radio.Button>
                                            </Radio.Group>
                                        </Form.Item>

                                        <Form.Item
                                            noStyle
                                            shouldUpdate={(
                                                prevValues,
                                                currentValues
                                            ) =>
                                                prevValues.Prophylactic !==
                                                currentValues.Prophylactic
                                            }
                                        >
                                            {({ getFieldValue }) =>
                                                getFieldValue(
                                                    "Prophylactic"
                                                ) === "Maligant" ? (
                                                    <>
                                                        <Form.Item label="USM">
                                                            <Form.Item
                                                                valuePropName="checked"
                                                                noStyle
                                                                name="usm"
                                                            >
                                                                <Checkbox />
                                                            </Form.Item>
                                                            <Form.Item
                                                                noStyle
                                                                name="usmDescription"
                                                            >
                                                                <Input.TextArea
                                                                    showCount
                                                                    maxLength={
                                                                        3000
                                                                    }
                                                                />
                                                            </Form.Item>
                                                        </Form.Item>

                                                        <Form.Item label="Blood">
                                                            <Form.Item
                                                                noStyle
                                                                name="blood"
                                                                valuePropName="checked"
                                                            >
                                                                <Checkbox />
                                                            </Form.Item>
                                                            <Form.Item
                                                                noStyle
                                                                name="bloodDescription"
                                                            >
                                                                <Input.TextArea
                                                                    showCount
                                                                    maxLength={
                                                                        3000
                                                                    }
                                                                />
                                                            </Form.Item>
                                                        </Form.Item>

                                                        <Form.Item label="Lungs">
                                                            <Form.Item
                                                                noStyle
                                                                name="lungs"
                                                                valuePropName="checked"
                                                            >
                                                                <Checkbox />
                                                            </Form.Item>
                                                            <Form.Item
                                                                noStyle
                                                                name="lungsDescription"
                                                            >
                                                                <Input.TextArea
                                                                    showCount
                                                                    maxLength={
                                                                        3000
                                                                    }
                                                                />
                                                            </Form.Item>
                                                        </Form.Item>

                                                        <Form.Item label="Reason">
                                                            <Form.Item
                                                                noStyle
                                                                name="reason"
                                                                valuePropName="checked"
                                                            >
                                                                <Checkbox />
                                                            </Form.Item>
                                                            <Form.Item
                                                                noStyle
                                                                name="reasonDescription"
                                                            >
                                                                <Input.TextArea
                                                                    showCount
                                                                    maxLength={
                                                                        3000
                                                                    }
                                                                />
                                                            </Form.Item>
                                                        </Form.Item>
                                                    </>
                                                ) : (
                                                    <Form.Item
                                                        label="Description"
                                                        name="benignDescription"
                                                    >
                                                        <Input.TextArea
                                                            showCount
                                                            maxLength={3000}
                                                        />
                                                    </Form.Item>
                                                )
                                            }
                                        </Form.Item>
                                    </>
                                );
                            } else return "";
                        }}
                    </Form.Item>

                    <Form.Item
                        wrapperCol={
                            isLargerThan400
                                ? { offset: 8, span: 16 }
                                : { span: 24 }
                        }
                    >
                        <Space>
                            <Button
                                form="visitTableFormBlok"
                                htmlType="submit"
                                type="primary"
                                disabled={!isChangeForm}
                            >
                                {selectedRowKey ? "Edit" : "Add"}
                            </Button>

                            <Button onClick={handleClear} danger>
                                {selectedRowKey ? "Close" : "Clear"}
                            </Button>
                        </Space>
                    </Form.Item>
                </Box>
            </SimpleGrid>
        </Form>
    );
}

export default memo(VisitsFormBloke);
