import React, { memo } from 'react'
import {
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import { Form, Input, DatePicker, Select, Modal, Button as AntdButton } from 'antd'
import { MaskedInput } from "antd-mask-input";
import moment from 'moment/moment';

function AddVisitButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('values', values);
    }

    return (
        <>
            <Button size='sm' colorScheme='blue' onClick={onOpen}>Add visit</Button>
            <Modal
                footer={[
                    <AntdButton key='1' onClick={onClose}>Cancel</AntdButton>,
                    <AntdButton
                        key='2'
                        type="primary"
                        htmlType="submit"
                        form="visitModalForm"
                    >
                        Add
                    </AntdButton>
                ]}
                closable={false}
                open={isOpen} onCancel={onClose}>

                <Form
                    form={form}
                    onFinish={onFinish}
                    initialValues={{
                        visitDate: moment()
                    }}
                    id="visitModalForm"
                    labelAlign='left'
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
                    <Form.Item label="Id" name="patientId">
                        <Input type="number" allowClear />
                    </Form.Item>
                    <Form.Item label="Name" name="patientName">
                        <Input allowClear />
                    </Form.Item>
                    <Form.Item label="Surname" name="patientSurName">
                        <Input allowClear />
                    </Form.Item>
                    <Form.Item label="Reason" name="visitReason">
                        <Input allowClear />
                    </Form.Item>
                    <Form.Item label="Date" name="visitDate">
                        <DatePicker
                            showTime
                            allowClear
                            format={"YYYY-MM-DD HH:mm"}
                        />
                    </Form.Item>
                    <Form.Item label="Mobile Number" name="phoneNumber">
                        <MaskedInput
                            allowClear
                            style={{ width: "130px" }}
                            mask={"000 000 00 00"}
                        />
                    </Form.Item>
                    <Form.Item label="Status" name="status">
                        <Select allowClear >
                            <Select.Option value="unsolved">Unsolved</Select.Option>
                            <Select.Option value="approved">Approved</Select.Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default memo(AddVisitButton)