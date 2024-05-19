import { Button, Image, Spin, Upload } from "antd";
import React, { memo, useEffect, useState } from "react";
import { UploadOutlined, CloseCircleOutlined } from "@ant-design/icons";
import sendRequest from "../../../../../modules/api/sendRequest";
import { Box, Flex } from "@chakra-ui/react";
import "./style.css";

const UploadForm = ({ form, selectedRowKey, setIsChangeForm }) => {
    const [imageUrl, setImageUrl] = useState([]);
    const [imagePdfUrl, setImagePdfUrl] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const showImage = (urlsArr) => {
        if (urlsArr) {
            urlsArr.forEach((url) => {
                if (url) {
                    const lastDotIndex = url.lastIndexOf(".");
                    const result = url.substring(lastDotIndex + 1);
                    if (result === "pdf") {
                        setImagePdfUrl((prev) => [...prev, url]);
                    } else {
                        setImageUrl((prev) => [...prev, url]);
                    }
                }
            });
        }
    };

    let copyselectedRowKey;
    useEffect(() => {
        if (selectedRowKey !== copyselectedRowKey) {
            copyselectedRowKey = selectedRowKey;
            const url = form.getFieldsValue().analyzesContentUrl;
            const urlsArr = url?.split(",");
            showImage(urlsArr || []);
        } else if (!selectedRowKey) {
            setImageUrl([]);
            setImagePdfUrl([]);
        }
    }, [selectedRowKey]);

    const beforeUpload = async (file) => {
        setIsLoading(true);
        setIsChangeForm(true);
        const formData = new FormData();
        formData.append("file", file);

        let res = await sendRequest("analysesImage", formData, "post");
        if (res?.data) {
            const url = res.data;
            const data = form.getFieldsValue().analyzesContentUrl || "";
            showImage([url]);
            const updatedContentUrl = data ? data + "," + url : url;
            form.setFieldsValue({ analyzesContentName: file.name });
            form.setFieldsValue({ analyzesContentUrl: updatedContentUrl });
        }
        setIsLoading(false);
        return false;
    };

    const handleDeleteImg = (urlToDelete) => {
        try {
            setIsChangeForm(true);
            const updatedImageUrl = imageUrl.filter((url) => url !== urlToDelete);
            const updatedImagePdfUrl = imagePdfUrl.filter((url) => url !== urlToDelete);
            setImageUrl(updatedImageUrl);
            setImagePdfUrl(updatedImagePdfUrl);

            const updatedContentUrl = [...updatedImageUrl, ...updatedImagePdfUrl].join(",");
            form.setFieldsValue({
                analyzesContentUrl: updatedContentUrl,
                analyzesContentName: updatedContentUrl ? form.getFieldsValue().analyzesContentName : "",
            });
        } catch (error) {
            console.log("%c error", "background: red; color: dark", error);
        }
    };

    return (
        <>
            <Spin spinning={isLoading}>
                <Flex flexWrap="wrap" gap="3" m="3">
                    {imageUrl?.map((url, index) => (
                        <Flex
                            key={index}
                            direction="column"
                            alignItems="center"
                            border="1px solid #e0e0e0"
                            borderRadius="8px"
                            p="2"
                            boxShadow="sm"
                            position="relative"
                            className="image-container"
                        >
                            <Image
                                width={200}
                                height={200}
                                objectFit="cover"
                                src={url}
                                borderRadius="8px"
                            />
                            <div
                                className="close-btn"
                                onClick={() => handleDeleteImg(url)}
                            >
                                <CloseCircleOutlined />
                            </div>
                        </Flex>
                    ))}

                    {imagePdfUrl?.map((url, index) => (
                        <Flex
                            key={index}
                            direction="column"
                            alignItems="center"
                            border="1px solid #e0e0e0"
                            borderRadius="8px"
                            p="2"
                            boxShadow="sm"
                            position="relative"
                        >
                            <embed
                                src={url}
                                type="application/pdf"
                                width="200"
                                height="200"
                                style={{ borderRadius: "8px" }}
                            />
                            <div
                                className="close-btn"
                                onClick={() => handleDeleteImg(url)}
                            >
                                <CloseCircleOutlined />
                            </div>
                        </Flex>
                    ))}
                </Flex>
            </Spin>

            <Upload
                accept=".png,.pdf,.jpeg,.jpg"
                listType="picture"
                beforeUpload={beforeUpload}
                showUploadList={false}
            >
                <Button
                    icon={<UploadOutlined />}
                    style={{ marginTop: "20px", borderRadius: "8px" }}
                >
                    Upload
                </Button>
            </Upload>
        </>
    );
};

export default memo(UploadForm);
