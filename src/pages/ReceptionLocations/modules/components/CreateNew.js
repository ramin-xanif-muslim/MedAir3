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
        selectedItem,
        setSelectedRowKey,
        form,
        isOpen,
        onOpen,
        onClose
    } = props

    const { refetchPlaces } = useQueryContext()

    const initialRef = React.useRef(null)

    const [isLoading, setIsLoading] = React.useState(false)


    const onFinish = async (values) => {
        setIsLoading(true)
        const sendObj = deepCopy(values)
        let res = await sendRequest("managers/places", sendObj, "post");
        if (res) {
            refetchPlaces()
            onClose()
            setSelectedRowKey(null)
            message.success("Saved")
        }
        setIsLoading(false)
    }

    const handleClose = () => {
        form.resetFields()
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
                    <ModalHeader>{selectedItem ? "Edit Place" : "New Place"}</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>

                        <Form
                            form={form}
                            id='ModalManagersPlaces'
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

                            <Form.Item hidden name="visitPlaceId">
                                <Input />
                            </Form.Item>

                            <Form.Item label="Name" name="placeName">
                                <Input ref={initialRef} />
                            </Form.Item>

                            <Form.Item label="City" name="placeCity">
                                <Input />
                            </Form.Item>

                            <Form.Item label="Country" name="placeCountry">
                                <Input />
                            </Form.Item>

                        </Form>

                    </ModalBody>

                    <ModalFooter>
                        <Button
                            form='ModalManagersPlaces'
                            htmlType='submit'
                            type='primary'
                            block
                            onClick={onFinish}
                            loading={isLoading}
                        >
                            {selectedItem ? 'Edit' : 'Add'}
                        </Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    )
};

export default CreateNew;