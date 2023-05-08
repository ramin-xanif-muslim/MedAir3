import React, { memo, useState } from 'react'
import { DatePicker, Form, Input, InputNumber, Radio, Select, Space } from 'antd'
import { SimpleGrid } from '@chakra-ui/react'
import moment from 'moment';

function TreatmentTableFormBloke() {

    const [form] = Form.useForm();

    const [isBenign, setIsBenign] = useState(false)

    const onFieldsChange = ([{ name, value }]) => {
        const nameFormInput = name && name[0]
        if (nameFormInput === 'treatmentTypeName') setIsBenign(value === 'benign')
    }

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

                <Form.Item label="Date" name="treatmentDate">
                    <DatePicker
                        format="YYYY-MM-DD HH:mm"
                        defaultValue={moment()}
                    />
                </Form.Item>

                <Form.Item
                    label="Urgent Histology"
                    name="histologyUrgent"
                >
                    <Input.TextArea rows={3} />
                </Form.Item>

                <Form.Item
                    label="Histology Final"
                    name="histologyFinal"
                >
                    <Input.TextArea rows={3} />
                </Form.Item>

                {isBenign ? '' : (
                    <>

                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) => prevValues.treatmentTypeName !== currentValues.treatmentTypeName}
                        >
                            {({ getFieldValue }) => getFieldValue('treatmentTypeName') !== 'benign' ? (
                                <Form.Item label="SLNB" name="SLNB">
                                    <Radio.Group>
                                        <Radio value={1}>Yes</Radio>
                                        <Radio value={2}>No</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            ) : ''
                            }
                        </Form.Item>

                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) => prevValues.SLNB !== currentValues.SLNB}
                        >
                            {({ getFieldValue }) =>
                                getFieldValue('SLNB') === 1 ? (
                                    <>
                                        <Form.Item
                                            label="Reactive"
                                            name="SLNB_reactive"
                                        >
                                            <InputNumber
                                                min={0}
                                                defaultValue={0}
                                            />
                                        </Form.Item>

                                        <Form.Item label="MTS" name="SLNB_mts">
                                            <InputNumber
                                                min={0}
                                                defaultValue={0}
                                            />
                                        </Form.Item>
                                    </>
                                ) : ''}
                        </Form.Item>

                        <Form.Item
                            label="Axilla dissection"
                            name="axillaDeseksiya"
                        >
                            <Radio.Group>
                                <Radio value={1}>Yes</Radio>
                                <Radio value={2}>No</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) => prevValues.axillaDeseksiya !== currentValues.axillaDeseksiya}
                        >
                            {({ getFieldValue }) =>
                                getFieldValue('axillaDeseksiya') === 1 ? (
                                    <>
                                        <Form.Item
                                            label="Reactive"
                                            name="axillaDeseksiyaActive"
                                        >
                                            <InputNumber
                                                min={0}
                                                defaultValue={0}
                                            />
                                        </Form.Item>

                                        <Form.Item label="MTS" name="axillaDeseksiyaMts">
                                            <InputNumber
                                                min={0}
                                                defaultValue={0}
                                            />
                                        </Form.Item>
                                    </>
                                ) : ''}
                        </Form.Item>

                    </>

                )}

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
                onFieldsChange={onFieldsChange}
            >

                <Form.Item label="ER" >
                    <Form.Item noStyle name="ihkEr">
                        <Radio.Group>
                            <Space direction="horizontal">
                                <Radio value={1}>Positive</Radio>
                                <Radio value={2}>Negative</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.ihkEr !== currentValues.ihkEr}
                    >
                        {({ getFieldValue }) =>
                            getFieldValue('ihkEr') === 1 ? (
                                <Form.Item noStyle name="erN">
                                    <InputNumber size='small' />
                                </Form.Item>
                            ) : ''}
                    </Form.Item>
                </Form.Item>

                <Form.Item label="PR" >
                    <Form.Item noStyle name="ihkPr">
                        <Radio.Group>
                            <Space direction="horizontal">
                                <Radio value={1}>Positive</Radio>
                                <Radio value={2}>Negative</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.ihkPr !== currentValues.ihkPr}
                    >
                        {({ getFieldValue }) =>
                            getFieldValue('ihkPr') === 1 ? (
                                <Form.Item noStyle name="prN">
                                    <InputNumber size='small' />
                                </Form.Item>
                            ) : ''}
                    </Form.Item>
                </Form.Item>

                <Form.Item label="HER2" name="her2">
                    <InputNumber
                        min={0}
                        max={3}
                        defaultValue={0}
                    />
                </Form.Item>

                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.her2 !== currentValues.her2}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('her2') === 2 ? (
                            <Form.Item label="FT" name="her2FT">
                                <InputNumber />
                            </Form.Item>
                        ) : ''}
                </Form.Item>

                <Form.Item label="K67" name="k67">
                    <InputNumber min={0} defaultValue={0} />
                </Form.Item>

                <Form.Item label="Pathologist" name="pathologist">
                    <Select allowClear>
                        {[].map((i) => {
                            return (
                                <Select.Option value={i.pathologistName}>
                                    {i.pathologistName}
                                </Select.Option>
                            );
                        })}
                    </Select>
                </Form.Item>


                <Form.Item label="Brest type" name="breastType">
                    <Select allowClear>
                        <Select.Option value="Missing">Missing</Select.Option>
                        <Select.Option value="Right">Right</Select.Option>
                        <Select.Option value="Left">Left</Select.Option>
                        <Select.Option value="Both">Both</Select.Option>
                        <Select.Option value="Post mastectomy right">Post mastectomy right</Select.Option>
                        <Select.Option value="Post mastectomy left">Post mastectomy left</Select.Option>
                        <Select.Option value="Axilla right">Axilla right</Select.Option>
                        <Select.Option value="Axilla left">Axilla left</Select.Option>
                        <Select.Option value="Extra breast right">Extra breast right</Select.Option>
                        <Select.Option value="Extra breast left">Extra breast left</Select.Option>
                        <Select.Option value="Both extra breasts">Both extra breasts</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Type of treatment" name="treatmentTypeName">
                    <Select allowClear>
                        <Select.Option value="benign">Benign</Select.Option>
                        <Select.Option value="malign">Malignant</Select.Option>
                        <Select.Option value="Nak">Nak</Select.Option>
                        <Select.Option value="AK">AK</Select.Option>
                        <Select.Option value="RT">RT</Select.Option>
                        <Select.Option value="target">Target</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.treatmentTypeName !== currentValues.treatmentTypeName}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('treatmentTypeName') === 'malign' ? (
                            <>
                                <Form.Item label="Əməliyyat növü" name="treatmentSubType">
                                    <Select allowClear>
                                        <Select.Option value="Organgoruyucu">Organoprotector</Select.Option>
                                        <Select.Option value="Masektamiya">Masectomy</Select.Option>
                                        <Select.Option value="SLNB">SLNB</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item label="TB" name="treatmentSubSubType">
                                    <Select allowClear>
                                        <Select.Option value="lumA">Lum A</Select.Option>
                                        <Select.Option value="lumB">Lum B</Select.Option>
                                        <Select.Option value="tripleN">Triple negative</Select.Option>
                                        <Select.Option value="hormoneP">Hormone positive Her positive</Select.Option>
                                        <Select.Option value="hormoneN">Hormone negative Her positive</Select.Option>
                                        <Select.Option value="prN">PR negative</Select.Option>
                                    </Select>
                                </Form.Item>
                            </>
                        ) : ''}
                </Form.Item>

                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.treatmentTypeName !== currentValues.treatmentTypeName}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('treatmentTypeName') === 'benign' ? (
                            <>
                                <Form.Item label="Alt növ" name="treatmentSubType">
                                    <Select allowClear>
                                        <Select.Option value="lumpektamiya">Lumpectamia</Select.Option>
                                        <Select.Option value="reduksiya">Reduction</Select.Option>
                                        <Select.Option value="mastopeksiya">Mastopexy</Select.Option>
                                        <Select.Option value="augumentasiya">Augmentation</Select.Option>
                                        <Select.Option value="Extra breast">Extra breast</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item label="Alt alt növ" name="treatmentSubSubType">
                                    <Select allowClear >
                                        <Select.Option value="right">Right</Select.Option>
                                        <Select.Option value="left">Left</Select.Option>
                                        <Select.Option value="both">Both</Select.Option>
                                        <Select.Option value="sectoral">Sectoral</Select.Option>
                                        <Select.Option value="sectoral round block">
                                            Sectoral round block
                                        </Select.Option>
                                        <Select.Option value="expander">Expander</Select.Option>
                                    </Select>
                                </Form.Item>
                            </>
                        ) : ''}
                </Form.Item>

                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.treatmentTypeName !== currentValues.treatmentTypeName}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('treatmentTypeName') === 'Nak' || getFieldValue('treatmentTypeName') === 'RT' ? (
                            <Form.Item label="patamarfoz" name="treatmentSubType">
                                <Select allowClear>
                                    <Select.Option value="1">&#8544;</Select.Option>
                                    <Select.Option value="2">&#8545;</Select.Option>
                                    <Select.Option value="3">&#8546;</Select.Option>
                                    <Select.Option value="4">&#8547;</Select.Option>
                                </Select>
                            </Form.Item>
                        ) : ''}
                </Form.Item>

                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.treatmentTypeName !== currentValues.treatmentTypeName}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('treatmentTypeName') ? (
                            <Form.Item label="Description" name="treatmentTypeDesc">
                                <Input.TextArea rows={3} />
                            </Form.Item>
                        ) : ''}
                </Form.Item>

            </Form>

        </SimpleGrid>
    )
}

export default memo(TreatmentTableFormBloke)