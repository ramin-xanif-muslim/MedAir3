import React, { memo } from 'react'
import { Form, Input } from 'antd'
import { SimpleGrid } from '@chakra-ui/react'


function TreatmentFormBloke() {

    const [form] = Form.useForm();

    return (

        <SimpleGrid columns={['1', '2']} gap='1' >

            <Form
                form={form}
                labelWrap
                labelAlign="right"
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

                <Form.Item label="Pre menopause" name="preMenopause">
                    <Input />
                </Form.Item>

                <Form.Item label="Description" name="treatmentDesc">
                    <Input.TextArea rows={3} />
                </Form.Item>

            </Form>

            <Form
                form={form}
                labelWrap
                labelAlign="right"
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

                <Form.Item label="Menopause" name="menopause">
                    <Input />
                </Form.Item>

                <Form.Item label="Recommendation" name="recommendation">
                    <Input.TextArea />
                </Form.Item>

                <Form.Item label="Advise" name="advise">
                    <Input.TextArea />
                </Form.Item>

            </Form>

        </SimpleGrid>
    )
}

export default memo(TreatmentFormBloke)