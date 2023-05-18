import React, { memo, useState } from 'react'
import { Button, Form, Space, message, Input, InputNumber } from 'antd'
import { useGlobalContext } from '../../modules/context/index.js'
import { useStore } from '../../modules/store'
import { fetchPatientId, postAnalyses, postMorby, postPersonInfo, postTreatment, postVisit } from '../../modules/api'
import { ArrowsAltOutlined, ShrinkOutlined } from "@ant-design/icons";
import { Box, Collapse, useMediaQuery } from "@chakra-ui/react";
// import { MaskedInput } from "antd-mask-input";


function ProfilePatientForm() {

    const [isLoading, setIsLoading] = useState(false)

    const { patientForm,
        inPatientCollapse,
        setInPatientCollapse,
        personInfoForm,
        diseaseHistoryForm,
        familyMembersList,
        treatmentHistoryForm,
    } = useGlobalContext()

    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')


    const dataSourceDiseaseHistoryTable = useStore((store) => store.dataSourceDiseaseHistoryTable)
    const savedDrawingCanvas = useStore((store) => store.savedDrawingCanvas)
    const descriptionsCanvas = useStore((store) => store.descriptionsCanvas)
    const dataSourceVisitTable = useStore((store) => store.dataSourceVisitTable)
    const dataSourceAnalysisTable = useStore((store) => store.dataSourceAnalysisTable)
    const dataSourceTreatmentTable = useStore((store) => store.dataSourceTreatmentTable)
    const recipeList = useStore((store) => store.recipeList)

    const handleSave = async () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        },1000)

        let id = patientForm.getFieldsValue().patientId;
        let patientId;
        if (id) {
            patientId = id;
        } else {
            patientId = await fetchPatientId();
        }
        if (patientId) {
            if (Object.keys(personInfoForm.getFieldsValue()).length) {
                const {
                    patientName,
                    patientSurName,
                    patientPatronymic,
                    patientId,
                } = patientForm.getFieldsValue()

                const sendObj = {
                    ...personInfoForm.getFieldsValue(),
                    patientName,
                    patientSurName,
                    patientPatronymic,
                    patientId,
                };

                postPersonInfo(sendObj);
            }
            // if (Object.keys(diseaseHistoryForm.getFieldsValue()).length) {
            //     savedDrawingCanvas.deseaseImageDesc =
            //         JSON.stringify(descriptionsCanvas);

            //     const sendObj = {
            //         ...diseaseHistoryForm.getFieldsValue(),
            //         patientId,
            //         familyMembersList,
            //         deseaseImagesList: savedDrawingCanvas,
            //         deseaseHistoryDynamicsList: dataSourceDiseaseHistoryTable,
            //     };
            //     postMorby(sendObj);
            // }
            // if (dataSourceVisitTable) {
            //     const sendObj = {
            //         patientVisitsList: dataSourceVisitTable,
            //         patientId
            //     };
            //     postVisit(sendObj);
            // }
            // if (dataSourceAnalysisTable) {
            //     const sendObj = {
            //         analyzesMediaList: dataSourceAnalysisTable,
            //         patientId
            //     };
            //     postAnalyses(sendObj);
            // }
            // if (dataSourceAnalysisTable) {
            //     const sendObj = {
            //         ...treatmentHistoryForm.getFieldsValue(),
            //         patientId,
            //         treatmentDynamics: dataSourceTreatmentTable,
            //         recipeList,
            //     };
            //     postTreatment(sendObj);
            // }
        }
        

        //patient
        console.log('patientForm', patientForm.getFieldsValue());

        //vite
        console.log('personInfoForm', personInfoForm.getFieldsValue());

        //morby  
        console.log('diseaseHistoryForm', diseaseHistoryForm.getFieldsValue());
        console.log('dataSourceDiseaseHistoryTable', dataSourceDiseaseHistoryTable);
        console.log('familyMembersList', familyMembersList);
        console.log('savedDrawingCanvas', savedDrawingCanvas);
        console.log('descriptionsCanvas', descriptionsCanvas);

        //visits
        console.log('dataSourceVisitTable', dataSourceVisitTable);

        //analyses
        console.log('dataSourceAnalysisTable', dataSourceAnalysisTable);

        //treatment
        console.log('treatmentHistoryForm', treatmentHistoryForm.getFieldsValue());
        console.log('dataSourceTreatmentTable', dataSourceTreatmentTable);
        console.log('recipeList', recipeList);
    }
    

    return (
        <Box boxShadow='xl' p='2' bg='pink.100' borderRadius='15px' >
            <Form
                id='patientForm'
                onFinish={handleSave}
                form={patientForm}
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
                        id='patientForm'
                        onFinish={handleSave}
                        form={patientForm}
                        layout={isLargerThan600 ? "inline" : "vertical"}
                    >

                        <Form.Item key="patientSurName" name="patientSurName" label="Suriname">
                            <Input placeholder="Suriname" />
                        </Form.Item>

                        <Form.Item key="patientPatronymic" label="Patronymic" name="patientPatronymic">
                            <Input />
                        </Form.Item>

                    </Form>
                </Collapse>

                <Form.Item noStyle>
                    <Space>
                        <Button
                            onClick={handleSave}
                            form='patientForm'
                            type="primary"
                            htmlType='submit'
                            loading={isLoading}
                        >
                            Save
                        </Button>

                        <Button danger>
                            Clear
                        </Button>
                    </Space>

                </Form.Item>
            </Form>
        </Box>
    )
}

export default memo(ProfilePatientForm)