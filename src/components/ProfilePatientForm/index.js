import React, { memo } from 'react'
import PatientForm from '../PatientForm'
import { Button, Form, Space, message } from 'antd'
import { useGlobalContext } from '../../modules/context/index.js'
import { useStore } from '../../modules/store'
import sendRequest from '../../modules/api/sendRequest'


const messageOnSave = (res, nameFunc) => {
    if (res && typeof res !== "string") {
        message.success({
            content: nameFunc + " saved",
            key: nameFunc + "_save",
            duration: 2,
        });
    } else {
        message.error({
            content: nameFunc + " don't saved",
            key: nameFunc + "_save",
            duration: 2,
        });
    }
};

const fetchPatientId = async () => {
    try {
        let res = await sendRequest("patientid", {}, "get");
        return res.data;
    } catch (e) {
        message.error({
            content: e,
            key: "doc_save",
            duration: 2,
        });
    }
};

const postPersonInfo = async (obj) => {
    let res = await sendRequest("vite", obj, "post");
    messageOnSave(res, "Person Info");
};

const postMorby = async (obj) => {
    let res = await sendRequest("morby", obj, "post");
    messageOnSave(res, "Disease History");
};

const postVisit = async (obj) => {
    let res = await sendRequest("visits", obj, "post");
    messageOnSave(res, "Visit");
};

const postAnalyses = async (obj) => {
    let res = await sendRequest("analyses", obj, "post");
    messageOnSave(res, "Analyses");
};

const postTreatment = async (obj) => {
    let res = await sendRequest("treatment", obj, "post");
    messageOnSave(res, "Treatment");
};

const ProfilePatientButton = () => {

    const { personInfoForm, diseaseHistoryForm, patientForm, familyMembersList, treatmentHistoryForm } = useGlobalContext()

    const dataSourceDiseaseHistoryTable = useStore((store) => store.dataSourceDiseaseHistoryTable)
    const savedDrawingCanvas = useStore((store) => store.savedDrawingCanvas)
    const descriptionsCanvas = useStore((store) => store.descriptionsCanvas)
    const dataSourceVisitTable = useStore((store) => store.dataSourceVisitTable)
    const dataSourceAnalysisTable = useStore((store) => store.dataSourceAnalysisTable)
    const dataSourceTreatmentTable = useStore((store) => store.dataSourceTreatmentTable)
    const recipeList = useStore((store) => store.recipeList)

    const handleSave = async () => {
        message.loading({ content: "Loading...", key: "doc_save" });

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
            if (Object.keys(diseaseHistoryForm.getFieldsValue()).length) {
                savedDrawingCanvas.deseaseImageDesc =
                    JSON.stringify(descriptionsCanvas);

                const sendObj = {
                    ...diseaseHistoryForm.getFieldsValue(),
                    patientId,
                    familyMembersList,
                    deseaseImagesList: savedDrawingCanvas,
                    deseaseHistoryDynamicsList: dataSourceDiseaseHistoryTable,
                };
                postMorby(sendObj);
            }
            if (dataSourceVisitTable) {
                const sendObj = {
                    patientVisitsList: dataSourceVisitTable,
                    patientId
                };
                postVisit(sendObj);
            }
            if (dataSourceAnalysisTable) {
                const sendObj = {
                    analyzesMediaList: dataSourceAnalysisTable,
                    patientId
                };
                postAnalyses(sendObj);
            }
            if (dataSourceAnalysisTable) {
                const sendObj = {
                    ...treatmentHistoryForm.getFieldsValue(),
                    patientId,
					treatmentDynamics: dataSourceTreatmentTable,
					recipeList,
                };
                postTreatment(sendObj);
            }
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
        <Form.Item noStyle>

            <Space>
                <Button
                    onClick={handleSave}
                    form='patientForm'
                    type="primary"
                    htmlType='submit'
                >
                    Save
                </Button>

                <Button danger>
                    Clear
                </Button>
            </Space>

        </Form.Item>
    )
}

function ProfilePatientForm() {

    const { patientForm } = useGlobalContext()

    return (
        <PatientForm
            form={patientForm}
            button={<ProfilePatientButton />}
            readOnly={true}
        />
    )
}

export default memo(ProfilePatientForm)