import { SimpleGrid } from '@chakra-ui/react'
import { Form, Input, InputNumber, Radio, Select, Space } from 'antd'
import React, { memo } from 'react'

function DiseaseHistoryFormBloke() {
    const [form] = Form.useForm();

    return (
        <SimpleGrid columns={['1', '2']} >

            <Form
                form={form}
                labelWrap
                labelAlign="right"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
            >

                <Form.Item label="Breast" name="complaintBreastType">
                    <Select allowClear>
                        <Select.Option value="no">Missing</Select.Option>
                        <Select.Option value="right">Right</Select.Option>
                        <Select.Option value="left">Left</Select.Option>
                        <Select.Option value="both">Both</Select.Option>
                        <Select.Option value="postmastektR">Post mastectomy right</Select.Option>
                        <Select.Option value="postmastektL">Post mastectomy left</Select.Option>
                        <Select.Option value="axilaR">Axilla right</Select.Option>
                        <Select.Option value="axilaL">Axilla left</Select.Option>
                        <Select.Option value="anotherBrestR">Extra breast right</Select.Option>
                        <Select.Option value="anotherBrestL">Extra breast left</Select.Option>
                        <Select.Option value="anotherBrestBoth">Both extra breasts</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Duration of illness"
                    name="durationOfIllness"
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Complaints" name="complaintDescription">
                    <Input.TextArea rows={3} />
                </Form.Item>

            </Form>

            <Form
                form={form}
                labelWrap
                labelAlign="right"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
            >

                <Form.Item label="ER" >
                    <Form.Item noStyle name="ihkEr">
                        <Radio.Group>
                            <Space direction="horizontal">
                                <Radio value={1}>Positive</Radio>
                                <Radio value={2}>Negative</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.ihkEr !== currentValues.ihkEr}
                    >
                        {({ getFieldValue }) =>
                            getFieldValue('ihkEr') === 1 ? (
                                <Form.Item noStyle name="erN">
                                    <InputNumber size='small' />
                                </Form.Item>
                            ) : ''}
                    </Form.Item>
                </Form.Item>

                <Form.Item label="PR" >
                    <Form.Item noStyle name="ihkPr">
                        <Radio.Group>
                            <Space direction="horizontal">
                                <Radio value={1}>Positive</Radio>
                                <Radio value={2}>Negative</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.ihkPr !== currentValues.ihkPr}
                    >
                        {({ getFieldValue }) =>
                            getFieldValue('ihkPr') === 1 ? (
                                <Form.Item noStyle name="prN">
                                    <InputNumber size='small' />
                                </Form.Item>
                            ) : ''}
                    </Form.Item>
                </Form.Item>

                <Form.Item label="HER2" name="her2">
                    <InputNumber
                        min={0}
                        max={3}
                        defaultValue={0}
                    />
                </Form.Item>

                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.her2 !== currentValues.her2}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('her2') === 2 ? (
                            <Form.Item label="FT" name="her2FT">
                                <InputNumber />
                            </Form.Item>
                        ) : ''}
                </Form.Item>

                <Form.Item label="K67" name="k67">
                    <InputNumber min={0} defaultValue={0} />
                </Form.Item>

                <Form.Item label="Pathologist" name="pathologist">
                    <Select allowClear>
                        {/* {pathologistsList.map((i) => {
                                return (
                                    <Select.Option value={i.pathologistName}>
                                        {i.pathologistName}
                                    </Select.Option>
                                );
                            })} */}
                    </Select>
                </Form.Item>

            </Form>

        </SimpleGrid>

    )
}

export default memo(DiseaseHistoryFormBloke)