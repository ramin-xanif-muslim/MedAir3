import { Form, Input, Button, message } from "antd";
import sendRequest from "../modules/api/sendRequest";
import React, { useState } from "react";
import { useLocalStorageStore } from "../modules/store";
import { Box, Center, Image, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from '../modules/images/MedAir.jpg'

const Login = () => {

    const setToken = useLocalStorageStore((store) => store.setToken)

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const onFinish = async (values) => {
        try {
            setIsLoading(true)
            let result = await sendRequest('login', values, 'post')
            if (result.data.token) {
                const { token } = result.data
                localStorage.setItem('token', token)
                setToken(token)
                navigate('/calendar')
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
        <Box color="white">

            <VStack
                mx="auto"
                h="100vh"
                justifyContent="center"
                w={{ base: "80%", md: 400 }}
                >

                <Form
                    layout="horizontal"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    onFinish={onFinish}
                    style={{
                        color: "white",
                        width: "100%",
                    }}
                >
                    <Form.Item
                        wrapperCol={{
                            xs: { span: 24, offset: 0 },
                            sm: { span: 18, offset: 6 },
                        }}
                    >
                        <Center>
                            <Image
                                // boxSize='150px'
                                // className='circle'
                                borderRadius='15px'
                                src={logo}
                                alt='medAir'
                            />
                        </Center>

                    </Form.Item>

                    <Form.Item
                        name="userName"
                        label="Username"
                        // label={<span style={{ color: "white" }}>Username</span>}
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="userPass"
                        label="Password"
                        // label={<span style={{ color: "white" }}>Password</span>}
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            xs: { span: 24, offset: 0 },
                            sm: { span: 18, offset: 6 },
                        }}
                    >
                        <Button block loading={isLoading} type="primary" htmlType="submit">
                            Sign in
                        </Button>
                    </Form.Item>
                </Form>
            </VStack>
        </Box>
    );
};
export default Login;
