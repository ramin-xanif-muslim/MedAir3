import { Form, Input, InputNumber, Button, Space } from "antd";
import { ArrowsAltOutlined, ShrinkOutlined } from "@ant-design/icons";
import React, { memo } from "react";
import { Box, Collapse, useMediaQuery } from "@chakra-ui/react";
import { useGlobalContext } from "../../modules/context/index.js";
import { MaskedInput } from "antd-mask-input";

function PatientForm({ button, form }) {

    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

    const { inPatientCollapse, setInPatientCollapse } = useGlobalContext()

    return (
        <Box boxShadow='xl' p='2' bg='pink.100' borderRadius='15px' >
            <Form
                id='patientForm'
                form={form}
                layout={isLargerThan600 ? "inline" : "vertical"}
            >
                <Form.Item
                    label="Name"
                >
                    <Space.Compact>
                    
                        <Form.Item
                            noStyle
                            key="patientName"
                            name="patientName"
                        >
                            <Input placeholder="Name" />
                        </Form.Item>

                        <Form.Item
                            name="patientId"
                            noStyle
                        >
                            <InputNumber addonBefore='№' placeholder="Patient №" />
                        </Form.Item>

                        <Button
                            type='ghost'
                            onClick={() => setInPatientCollapse(prev => !prev)}
                            icon={inPatientCollapse ? <ArrowsAltOutlined /> : <ShrinkOutlined />}

                        />

                    </Space.Compact>
                </Form.Item>

                <Collapse in={inPatientCollapse} animateOpacity>
                    <Form
                        form={form}
                        layout={isLargerThan600 ? "inline" : "vertical"}
                    >

                        <Form.Item key="patientSurName" name="patientSurName" label="Suriname">
                            <Input placeholder="Suriname" />
                        </Form.Item>

                        <Form.Item key="phoneNumber" name="phoneNumber" label="Phone number">
                        <MaskedInput
                            allowClear
                            style={{ width: "130px" }}
                            mask={"000 000 00 00"}
                        />
                        </Form.Item>

                    </Form>
                </Collapse>

                {button}
            </Form>
        </Box>
    )
}

export default memo(PatientForm)