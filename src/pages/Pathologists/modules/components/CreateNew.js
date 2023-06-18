import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { Button, Form, Input, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import sendRequest from '../../../../modules/api/sendRequest';
import { useQueryContext } from '../../../../modules/store/QueryContext';
import { deepCopy } from '../../../../modules/functions/deepCopy';

const CreateNew = (props) => {

    const {
        selectedRowKey,
        setSelectedRowKey,
        form,
        isOpen,
        onOpen,
        onClose
    } = props

    const { refetchPathologists } = useQueryContext()

    const initialRef = React.useRef(null)

    const [isLoading, setIsLoading] = React.useState(false)


    const onFinish = async (values) => {
        setIsLoading(true)
        const sendObj = deepCopy(values)
        let res = await sendRequest("managers/pathologists", sendObj, "post");
        if (res) {
            refetchPathologists()
            onClose()
            setSelectedRowKey(null)
            message.success("Saved")
        }
        setIsLoading(false)
    }

    const handleClose = () => {
        form.resetFields()
        setSelectedRowKey(null)
        onClose()
    }

    return (
        <>

            <Button
                icon={<PlusOutlined />}
                onClick={onOpen}
            >
                New
            </Button>

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={handleClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{selectedRowKey ? "Edit Pathologist" : "New Pathologist"}</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>

                        <Form
                            form={form}
                            id='ModalManagersPathologist'
                            onFinish={onFinish}
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
                        >

                            <Form.Item hidden name="pathologistId">
                                <Input />
                            </Form.Item>

                            <Form.Item label="Name" name="pathologistName">
                                <Input ref={initialRef} />
                            </Form.Item>

                            <Form.Item label="Place" name="pathologistPlace">
                                <Input />
                            </Form.Item>

                        </Form>

                    </ModalBody>

                    <ModalFooter>
                        <Button
                            form='ModalManagersPathologist'
                            htmlType='submit'
                            type='primary'
                            block
                            onClick={onFinish}
                            loading={isLoading}
                        >
                            {selectedRowKey ? 'Edit' : 'Add'}
                        </Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    )
};

export default CreateNew;