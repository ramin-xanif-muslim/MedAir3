import { Button, Form, Image, Input, Upload } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { memo, useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { deepCopy } from "../../../../../modules/functions/deepCopy";
import sendRequest from "../../../../../modules/api/sendRequest";

let selectedRowTable

const UploadForm = ({ form }) => {

    const [imageUrl, setImageUrl] = useState();
    const [imagePdfUrl, setImagePdfUrl] = useState();

    const showImage = (url) => {
        if (url) {
            const lastDotIndex = url.lastIndexOf(".");
            const result = url.substring(lastDotIndex + 1);
            if (result === 'pdf') {
                setImagePdfUrl(url)
            } else {
                setImageUrl(url)
            }
        }
    }

    useEffect(() => {
        const url = selectedRowTable?.analyzesContentUrl
        showImage(url)
    }, [selectedRowTable?.analyzesContentUrl])

    const onChange = (e) => {
        try {
            const { fileList: newFileList } = e;
            if (newFileList && newFileList[0]?.name) {
                let analyzesContentName = newFileList[0]?.name
                form.setFieldsValue({ analyzesContentName })
            }
        } catch (error) {
            console.log('%c error', 'background: red; color: dark', error);
        }
    };

    const beforeUpload = async (file) => {
        const formData = new FormData();
        formData.append("file", file);

        let res = await sendRequest("analysesImage", formData, "post");
        if (res?.data) {
          const url = res.data
          showImage(url)
          form.setFieldsValue({ analyzesContentUrl: res.data });
        }
        return false;
    };

    const handleDeleteImg = () => {
        try {
            setImageUrl(null)
            setImagePdfUrl(null)
        } catch (error) {
            console.log('%c error', 'background: red; color: dark', error);
        }
    }

    return (
        <>
            {
                imageUrl ? (
                    <div style={{ display: 'flex' }}>
                        <Image width={200} src={imageUrl} />
                        <div onClick={handleDeleteImg} style={{ cursor: 'pointer', marginLeft: '5px' }}>X</div>
                    </div>
                ) : imagePdfUrl ? (
                    <div style={{ display: 'flex' }}>
                        <embed src={imagePdfUrl} type="application/pdf" width="100%" height="600px"
                        />
                        <div onClick={handleDeleteImg} style={{ cursor: 'pointer', marginLeft: '5px' }}>X</div>
                    </div>
                ) : (
                    <Upload
                        accept=".png,.pdf,.jpeg,.jpg"
                        listType="picture"
                        beforeUpload={beforeUpload}
                        onChange={onChange}
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
