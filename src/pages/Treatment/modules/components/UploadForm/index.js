import { Button, Image, Spin, Upload } from "antd";
import React, { memo, useEffect, useState } from "react";
import { UploadOutlined, CloseCircleOutlined } from "@ant-design/icons";
import sendRequest from "../../../../../modules/api/sendRequest";
import { Box, Flex } from "@chakra-ui/react";


const UploadForm = ({ form, selectedRowKey, formName, setIsChangeForm }) => {

    const [imageUrl, setImageUrl] = useState();
    const [isLoading, setIsLoading] = useState(false)

    const showImage = (url) => {
        if (url) {
            setImageUrl(url)
        }else {
            setImageUrl(null)
        }
    }

    useEffect(() => {
        if (selectedRowKey) {
            const url = form.getFieldValue(`${formName}Url`)
            showImage(url)
        } else {
            setImageUrl(null)
        }
    }, [selectedRowKey])

    const beforeUpload = async (file) => {
        setIsLoading(true)
        const formData = new FormData();
        formData.append("file", file);

        let res = await sendRequest("treatmentImage", formData, "post");
        if (res?.data) {
            setIsChangeForm(true)
            const url = res.data
            showImage(url)
            form.setFieldsValue({ [`${formName}Name`]: file.name });
            form.setFieldsValue({ [`${formName}Url`]: file.data });
        }
        setIsLoading(false)
        return false;
    };

    const handleDeleteImg = () => {
        try {
            setImageUrl(null)
            form.setFieldsValue({ [`${formName}Name`]: '', [`${formName}Url`]: '' })
            setIsChangeForm(true)
        } catch (error) {
            console.log('%c error', 'background: red; color: dark', error);
        }
    }

    if(isLoading) {
        return <Spin />
    }

    return (
        <>
            {
                imageUrl ? (

                    <Flex gap='1' m='3'>

                        <Image width={200} src={imageUrl} />

                        <Box onClick={handleDeleteImg} _hover={{ color: 'red' }} ml='-1' cursor='pointer' >
                            <CloseCircleOutlined />
                        </Box>

                    </Flex>

                ) : (

                    <Upload
                        accept=".png,.jpeg,.jpg"
                        listType="picture"
                        beforeUpload={beforeUpload}
                    >
                        {!imageUrl ? (
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        ) : (
                            ""
                        )}
                    </Upload>

                )}
        </>
    );
};
export default memo(UploadForm);
