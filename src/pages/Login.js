import { Form, Input, Button, message } from "antd";
import sendRequest from "../modules/api/sendRequest";
import React, { useState } from "react";
import { useLocalStorageStore } from "../modules/store";
import { Box, Center } from "@chakra-ui/react";

const Login = () => {

    const setToken = useLocalStorageStore((store) => store.setToken)

    const [isLoading, setIsLoading] = useState(false)

    const onFinish = async (values) => {
        try {
            setIsLoading(true)
            let result = await sendRequest('login', values, 'post')
            if (result.data.token) {
                const { token } = result.data
                localStorage.setItem('token', token)
                setToken(token)
            } else {
                message.warning({
                    content: 'Login or password not correct',
                    key: "warning_message",
                    duration: 4,
                });
            }
        } catch (err) {
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <Box>
            <Center>
                <img alt='medAir' src={'/images/MedAir.jpg'} />
            </Center>
            <Center >
                <Form
                    layout="vertical"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Username"
                        name="userName"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="userPass"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                    >
                        <Button block loading={isLoading} type="primary" htmlType="submit">
                            Sign in
                        </Button>
                    </Form.Item>
                </Form>
            </Center>
        </Box>
    );
};
export default Login;
