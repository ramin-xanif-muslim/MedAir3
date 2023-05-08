import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { Button, Form, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

function ModalFamilyMemberForm(props) {

    const { isOpen, onClose, initialRef, finalRef, title, handleFinish, initialValues } = props

    const [form] = Form.useForm();

    const onFinish = (values) => {
        handleFinish(values)
    }

    return (

        <Modal
            isOpen={isOpen}
            onClose={onClose}
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>


                    <Form
                        form={form}
                        labelWrap
                        labelAlign="left"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        onFinish={onFinish}
                        id='familyMembersModalForm'
                        initialValues={initialValues}
                    >

                        <Form.Item label="Trauma" name="trauma">
                            <Input
                                ref={initialRef}
                                allowClear
                            />
                        </Form.Item>

                        <Form.Item label="Deceased of cancer" name="dead">
                            <Input
                                allowClear
                            />
                        </Form.Item>

                        <Form.Item label="Living with cancer" name="alive">
                            <Input
                                allowClear
                            />
                        </Form.Item>

                        <Form.Item label="Description" name="description">
                            <Input.TextArea
                                rows={3}
                            />
                        </Form.Item>

                    </Form>

                </ModalBody>

                <ModalFooter>
                    {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button> */}
                    <Button
                        htmlType='submit'
                        form='familyMembersModalForm'
                        type='primary'
                        block
                        icon={<PlusOutlined />}
                    >
                        {initialValues ? 'Edit' : 'Add'}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalFamilyMemberForm