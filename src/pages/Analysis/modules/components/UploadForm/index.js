import { Image, Spin, Upload } from "antd";
import React, { memo, useEffect, useState } from "react";
import {
    CloseCircleOutlined,
    LoadingOutlined,
    PlusOutlined,
} from "@ant-design/icons";
import sendRequest from "../../../../../modules/api/sendRequest";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import "./style.css";

const imgHeightWidth = 150;

const UploadForm = ({ form, selectedRowKey, setIsChangeForm }) => {
    const [imageUrl, setImageUrl] = useState([]);
    const [imagePdfUrl, setImagePdfUrl] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

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
            const updatedImageUrl = imageUrl.filter(
                (url) => url !== urlToDelete
            );
            const updatedImagePdfUrl = imagePdfUrl.filter(
                (url) => url !== urlToDelete
            );
            setImageUrl(updatedImageUrl);
            setImagePdfUrl(updatedImagePdfUrl);

            const updatedContentUrl = [
                ...updatedImageUrl,
                ...updatedImagePdfUrl,
            ].join(",");
            form.setFieldsValue({
                analyzesContentUrl: updatedContentUrl,
                analyzesContentName: updatedContentUrl
                    ? form.getFieldsValue().analyzesContentName
                    : "",
            });
        } catch (error) {
            console.log("%c error", "background: red; color: dark", error);
        }
    };

    return (
        <>
            <Spin spinning={isLoading}>
                <Flex flexWrap="wrap" gap="3" m="3" w="full">
                    {imageUrl?.map((url, index) => (
                        <div key={index} className="image-container">
                            <Image
                                width={isLargerThan400 ? imgHeightWidth : null}
                                height={isLargerThan400 ? imgHeightWidth : null}
                                objectFit="cover"
                                src={url}
                                borderRadius="8px"
                            />
                            <div
                                className={
                                    isLargerThan400
                                        ? "close-btn"
                                        : "mob-close-btn"
                                }
                                onClick={() => handleDeleteImg(url)}
                            >
                                <CloseCircleOutlined />
                            </div>
                        </div>
                    ))}

                    {imagePdfUrl?.map((url, index) => (
                        <div
                            className="image-container"
                            style={{
                                width: isLargerThan400
                                    ? imgHeightWidth
                                    : "100%",
                                height: isLargerThan400
                                    ? imgHeightWidth
                                    : "100%",
                                borderRadius: "8px",
                                overflow: "hidden",
                            }}
                        >
                            <iframe
                                title="PDF"
                                src={url}
                                type="application/pdf"
                                width="100%"
                                height="100%"
                                style={{ border: "none", borderRadius: "8px" }}
                            />
                            <div
                                className={
                                    isLargerThan400
                                        ? "close-btn"
                                        : "mob-close-btn"
                                }
                                onClick={() => handleDeleteImg(url)}
                            >
                                <CloseCircleOutlined />
                            </div>
                        </div>
                    ))}
                    <div style={{ width: `${imgHeightWidth}px` }}>
                        <Upload
                            accept=".png,.pdf,.jpeg,.jpg"
                            // listType="picture"
                            // listType="picture-circle"
                            listType="picture-card"
                            beforeUpload={beforeUpload}
                            showUploadList={false}
                        >
                            <button
                                style={{ border: 0, background: "none" }}
                                type="button"
                            >
                                {isLoading ? (
                                    <LoadingOutlined />
                                ) : (
                                    <PlusOutlined />
                                )}
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </button>
                            {/* <Button
                            icon={<UploadOutlined />}
                            style={{ marginTop: "20px" }}
                            shape="circle"
                            size="large"
                        /> */}
                        </Upload>
                    </div>
                </Flex>
            </Spin>
        </>
    );
};

export default memo(UploadForm);
