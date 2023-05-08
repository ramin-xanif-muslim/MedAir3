import React, { memo } from 'react'
import { Form, Input, Select } from 'antd'
import { SimpleGrid } from '@chakra-ui/react'
import UploadForm from '../UploadForm';

function AnalysisFormBlok() {
    const [form] = Form.useForm();
    return (

        <SimpleGrid columns={['1', '2']} gap='1' >

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

                <Form.Item label='Analyzes type' name="analyzesType">
                    <Select
                        allowClear
                        defaultValue="Breast"
                    >
                        <Select.Option value="Breast">Breast</Select.Option>
                        <Select.Option value="Other analysis">Other analysis</Select.Option>
                        <Select.Option value="Other healthcare area">
                            Other healthcare area
                        </Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Analysis sub type" name="analyzesSubType">
                    <Select allowClear >
                        {
                            ['a', 'b']?.map((i) => (
                                <Select.Option key={i} value={i}>
                                    {i}
                                </Select.Option>
                            ))
                        }
                    </Select>
                </Form.Item>

                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.analyzesSubType !== currentValues.analyzesSubType}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('analyzesSubType') ? (
                            <Form.Item label="Description" name="analyzesDesc">
                                <Input.TextArea rows={3} />
                            </Form.Item>
                        ) : ''}
                </Form.Item>

                <Form.Item hidden name="analyzesContentUrl">
                    <Input />
                </Form.Item>

                <Form.Item hidden name="analyzesContentName">
                    <Input />
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

                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.analyzesSubType !== currentValues.analyzesSubType}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('analyzesSubType') ? (
                            <UploadForm />
                        ) : ''}
                </Form.Item>

            </Form>

        </SimpleGrid>
    )
}

export default memo(AnalysisFormBlok)