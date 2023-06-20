import React, { memo } from 'react'
import { Form, Input } from 'antd'
import { SimpleGrid } from '@chakra-ui/react'
import { useGlobalContext } from '../../../../../modules/context/index.js'
import { useStore } from '../../../../../modules/store/index.js'


function TreatmentFormBloke() {

    const { treatmentHistoryForm } = useGlobalContext()

    const initialValuesTreatment = useStore((store) => store.initialValuesTreatment)

    const onFieldsChange = useStore((store) => store.onFieldsChange)

    return (

        <SimpleGrid columns={['1', '2']} gap='1' >

            <Form
                form={treatmentHistoryForm}
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
                initialValues={initialValuesTreatment}
                onFieldsChange={onFieldsChange}
            >

                <Form.Item label="Pre menopause" name="preMenopause">
                    <Input />
                </Form.Item>

                <Form.Item label="Description" name="treatmentDesc">
                    <Input.TextArea showCount maxLength={3000} rows={3} />
                </Form.Item>

            </Form>

            <Form
                form={treatmentHistoryForm}
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
                initialValues={initialValuesTreatment}
                onFieldsChange={onFieldsChange}
            >

                <Form.Item label="Menopause" name="menopause">
                    <Input />
                </Form.Item>

                <Form.Item label="Recommendation" name="recommendation">
                    <Input.TextArea showCount maxLength={3000} />
                </Form.Item>

                <Form.Item label="Advise" name="advise">
                    <Input.TextArea showCount maxLength={3000} />
                </Form.Item>

            </Form>

        </SimpleGrid>
    )
}

export default memo(TreatmentFormBloke)