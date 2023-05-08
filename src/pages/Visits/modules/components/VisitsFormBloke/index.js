import React, { memo } from 'react'
import { Checkbox, DatePicker, Form, Input, Radio, Select } from 'antd'
import { SimpleGrid } from '@chakra-ui/react'
import moment from 'moment';

const managersPlaces = []

function VisitsFormBloke() {

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

            <Form.Item label='Date' name="visitDate">
                <DatePicker
                    format="YYYY-MM-DD HH:mm"
                    defaultValue={moment()}
                    showTime
                />
            </Form.Item>

            <Form.Item label="Address" name="placeName">
                <Select allowClear>
                    {managersPlaces.map((i) => {
                        let val =
                            i.placeName +
                            " " +
                            i.placeCity +
                            " " +
                            i.placeCountry;
                        return <Select.Option value={val}>{val}</Select.Option>;
                    })}
                </Select>
            </Form.Item>

            <Form.Item label="Status" name="status">
                <Select allowClear >
                    <Select.Option value="Unsolved">Unsolved</Select.Option>
                    <Select.Option value="Approved">Approved</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item label={"Reception Type"} name="visitType">
                <Select
                    allowClear
                    defaultValue='Face to face'
                >
                    <Select.Option value="Face to face">Face to face</Select.Option>
                    <Select.Option value="By phone">By phone</Select.Option>
                    <Select.Option value="By chat">By chat</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item label={"Visit reason"} name="visitReason">
                <Select
                    allowClear
                >
                    <Select.Option value="Inspection">Inspection</Select.Option>
                    <Select.Option value="Treatment">Treatment</Select.Option>
                    <Select.Option value="Operation">Operation</Select.Option>
                    <Select.Option value="Control">Control</Select.Option>
                    <Select.Option value="Aesthetics">Aesthetics</Select.Option>
                    <Select.Option value="Prophylactic">Prophylactic</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                label={"Description"}
                name="visitDesc"
            >
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
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.visitReason !== currentValues.visitReason}
            >
                {({ getFieldValue }) =>
                    getFieldValue('visitReason') === 'Prophylactic' ? (
                        <>
                            <Form.Item name='Prophylactic'>
                                <Radio.Group
                                >
                                    <Radio.Button value="Maligant">Maligant</Radio.Button>
                                    <Radio.Button value="Benign">Benign</Radio.Button>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                noStyle
                                shouldUpdate={(prevValues, currentValues) => prevValues.Prophylactic !== currentValues.Prophylactic}
                            >
                                {({ getFieldValue }) =>
                                    getFieldValue('Prophylactic') === 'Maligant' ? (
                                        <>

                                            <Form.Item label="USM"  >
                                                <Form.Item noStyle name="usm">
                                                    <Checkbox />
                                                </Form.Item>
                                                <Form.Item noStyle name="usmDescription">
                                                    <Input.TextArea />
                                                </Form.Item>
                                            </Form.Item>

                                            <Form.Item label="Blood"  >
                                                <Form.Item noStyle name="blood">
                                                    <Checkbox />
                                                </Form.Item>
                                                <Form.Item noStyle name="bloodDescription">
                                                    <Input.TextArea />
                                                </Form.Item>
                                            </Form.Item>

                                            <Form.Item label="Lungs"  >
                                                <Form.Item noStyle name="lungs">
                                                    <Checkbox />
                                                </Form.Item>
                                                <Form.Item noStyle name="lungsDescription">
                                                    <Input.TextArea />
                                                </Form.Item>
                                            </Form.Item>

                                            <Form.Item label="Reason"  >
                                                <Form.Item noStyle name="reason">
                                                    <Checkbox />
                                                </Form.Item>
                                                <Form.Item noStyle name="reasonDescription">
                                                    <Input.TextArea />
                                                </Form.Item>
                                            </Form.Item>

                                        </>
                                    ) : (
                                        <Form.Item label="Description" name="benignDescription" >
                                            <Input.TextArea />
                                        </Form.Item>
                                    )}

                            </Form.Item>

                        </>
                    ) : ''}

            </Form.Item>

        </Form>

    </SimpleGrid>
  )
}

export default memo(VisitsFormBloke)