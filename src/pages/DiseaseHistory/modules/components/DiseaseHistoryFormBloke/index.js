import { SimpleGrid } from '@chakra-ui/react'
import { Button, Form, Input, InputNumber, Radio, Select, Space } from 'antd'
import React, { memo } from 'react'
import { useStore } from '../../../../../modules/store';

function DiseaseHistoryFormBloke(props) {

    const { selectedRowKey, setSelectedRowKey, form } = props

    const dataSourceDiseaseHistoryTable = useStore((store) => store.dataSourceDiseaseHistoryTable)
    const setDataSourceDiseaseHistoryTable = useStore((store) => store.setDataSourceDiseaseHistoryTable)

    const onFinish = (values) => {
        if (selectedRowKey) {
            let newData = dataSourceDiseaseHistoryTable.map((i) => {
                if (i.id === values.id) return values
                else return i
            })
            setDataSourceDiseaseHistoryTable(newData)
        } else {
            let id = new Date().getTime()
            values.id = id
            values.key = id
            setDataSourceDiseaseHistoryTable([...dataSourceDiseaseHistoryTable, values])
        }
        form.resetFields()
        setSelectedRowKey()
    }

    const handleClear = () => {
        form.resetFields()
        setSelectedRowKey()
    }

    return (
        <SimpleGrid columns={['1', '2']} >

            <Form
                onFinish={onFinish}
                id='diseaseHistoryFormBloke'
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

                <Form.Item hidden name='id'>
                    <Input />
                </Form.Item>

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
                    <Input.TextArea showCount maxLength={3000} rows={3} />
                </Form.Item>

            </Form>

            <Form
                onFinish={onFinish}
                id='diseaseHistoryFormBloke'
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

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Space>

                        <Button
                            form='diseaseHistoryFormBloke'
                            htmlType='submit'
                            type="primary"
                        >
                            {selectedRowKey ? 'Edit' : 'Add'}
                        </Button>

                        <Button onClick={handleClear} danger>{selectedRowKey ? "Close" : "Clear"}</Button>


                    </Space>
                </Form.Item>

            </Form>

        </SimpleGrid>

    )
}

export default memo(DiseaseHistoryFormBloke)