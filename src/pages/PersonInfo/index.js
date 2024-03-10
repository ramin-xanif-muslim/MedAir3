import React, { memo } from "react";
import {
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Rate,
    Select,
} from "antd";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { useGlobalContext } from "../../modules/context/index.js";
import { useStore } from "../../modules/store";

const OPTIONS = ["0-6", "6-12", "12-24", "24+"];

function PersonInfo() {
    const { personInfoForm } = useGlobalContext();

    const onFieldsChange = useStore((store) => store.onFieldsChange);

    // const initialValuesPersonInfoForm = useStore((store) => store.initialValuesPersonInfoForm)

    return (
        <>
            <Form
                form={personInfoForm}
                labelWrap
                labelAlign="right"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                // initialValues={initialValuesPersonInfoForm}
                onFieldsChange={onFieldsChange}
            >
                <SimpleGrid
                    columns={["1", "2"]}
                    p="2"
                    my="2"
                    boxShadow="xl"
                    bg="pink.50"
                    borderRadius="15px"
                >
                    <Box maxW="600px">
                        <Form.Item label="Birth date" name="birthDate">
                            <DatePicker allowClear />
                        </Form.Item>

                        <Form.Item label="Birth place" name="birthPlace">
                            <Input />
                        </Form.Item>

                        <Form.Item name="phoneNumber" label="Phone Number">
                            <Input type="number" />
                        </Form.Item>

                        <Form.Item label="Sex" name="gender">
                            <Select allowClear>
                                <Select.Option value="Female">
                                    Female
                                </Select.Option>
                                <Select.Option value="Male">Male</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="Marital status" name="maritalStatus">
                            <Select allowClear>
                                <Select.Option value="Single">
                                    Single
                                </Select.Option>
                                <Select.Option value="Married">
                                    Married
                                </Select.Option>
                                <Select.Option value="Divorced">
                                    Divorced
                                </Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="Sex status" name="sexStatus">
                            <Select allowClear>
                                <Select.Option value="Regular">
                                    Regular
                                </Select.Option>
                                <Select.Option value="Irregular">
                                    Irregular
                                </Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            valuePropName="checked"
                            label="Alcohol"
                            name="alkogol"
                        >
                            <Checkbox />
                        </Form.Item>

                        <Form.Item
                            valuePropName="checked"
                            label="Smoking "
                            name="smoke"
                        >
                            <Checkbox />
                        </Form.Item>

                        <Form.Item
                            label="Recommendation person"
                            name="recommendationPerson"
                        >
                            <Input allowClear />
                        </Form.Item>

                        <Form.Item label="Raiting" name="raiting">
                            <Rate />
                        </Form.Item>

                        <Form.Item label="Height" name="height">
                            <InputNumber min={0} />
                        </Form.Item>

                        <Form.Item label="Weight" name="weight">
                            <InputNumber min={0} />
                        </Form.Item>

                        <Form.Item label="IMT" name="imt">
                            <InputNumber min={0} />
                        </Form.Item>
                    </Box>

                    <Box maxW="600px">
                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) =>
                                prevValues.gender !== currentValues.gender
                            }
                        >
                            {({ getFieldValue }) =>
                                getFieldValue("gender") === "Female" ? (
                                    <>
                                        <Form.Item
                                            label="A cure for infertility"
                                            name="cureForInfertility"
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            label="Menopause"
                                            name="menopause"
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            label="Menarche"
                                            name="menarxe"
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            label="Age of first childbirth"
                                            name="firstChildbirth"
                                        >
                                            <InputNumber min={10} max={60} />
                                        </Form.Item>

                                        <Form.Item
                                            label="Age of last childbirth"
                                            name="lastChildbirth"
                                        >
                                            <InputNumber min={10} max={60} />
                                        </Form.Item>

                                        <Form.Item
                                            label="Number of abortions"
                                            name="abortCount"
                                        >
                                            <InputNumber min={0} />
                                        </Form.Item>

                                        <Form.Item
                                            label="Breastfeeding period"
                                            name="lactationPeriod"
                                        >
                                            <Select allowClear>
                                                {OPTIONS.map((option) => (
                                                    <Select.Option
                                                        key={option}
                                                        value={option}
                                                    >
                                                        {option}
                                                    </Select.Option>
                                                ))}
                                            </Select>
                                        </Form.Item>

                                        <Form.Item
                                            label="Number of artificial inseminations"
                                            name="artificialInseminationCount"
                                        >
                                            <InputNumber min={0} />
                                        </Form.Item>
                                    </>
                                ) : null
                            }
                        </Form.Item>
                    </Box>
                </SimpleGrid>
            </Form>
        </>
    );
}

export default memo(PersonInfo);
