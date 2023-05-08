import { Form, Input, InputNumber, Button, Space } from "antd";
import { ArrowsAltOutlined, ShrinkOutlined } from "@ant-design/icons";
import React, { memo, useState } from "react";
import { Box, Collapse, useMediaQuery } from "@chakra-ui/react";

function PatientForm({ button }) {

    const [form] = Form.useForm();
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    const [isFilterOpen, setIsFilterOpen] = useState(true);
    return (
        <Box boxShadow='xl' p='2' bg='pink.100' borderRadius='15px' >
            <Form
                form={form}
                layout={isLargerThan600 ? "inline" : "vertical"}
            >
                <Form.Item
                    label="Patient №"
                >
                    <Space>
                        <Form.Item
                            name="patientId"
                            noStyle
                        >
                            <InputNumber placeholder="Patient №" />
                        </Form.Item>
                        <Button
                            type='ghost'
                            onClick={() => setIsFilterOpen(prev => !prev)}
                            icon={isFilterOpen ? <ArrowsAltOutlined /> : <ShrinkOutlined />}

                        />
                    </Space>
                </Form.Item>

                <Collapse in={isFilterOpen} animateOpacity>
                    <Form
                        form={form}
                        layout={isLargerThan600 ? "inline" : "vertical"}
                    >
                        <Form.Item key="patientName" name="patientName" label="Name">
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item key="patientSurName" name="patientSurName" label="Suriname">
                            <Input placeholder="Suriname" />
                        </Form.Item>
                        <Form.Item key="phoneNumber" name="phoneNumber" label="Phone number">
                            <Input placeholder="Phone number" />
                        </Form.Item>
                    </Form>
                </Collapse>

                {button}
            </Form>
        </Box>
    )
}

export default memo(PatientForm)