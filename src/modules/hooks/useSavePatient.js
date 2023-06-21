import dayjs from "dayjs"
import { fetchPatientId, postAnalyses, postMorby, postPersonInfo, postTreatment, postVisit } from "../api/index.js"
import { useGlobalContext } from "../context/index.js"
import { useStore } from "../store/index.js"
import { useState } from "react"


function useSavePatient() {

    const [isLoading, setIsLoading] = useState(false)

    const {
        patientForm,
        personInfoForm,
        diseaseHistoryForm,
        familyMembersList,
        treatmentHistoryForm,
    } = useGlobalContext()


    const dataSourceDiseaseHistoryTable = useStore((store) => store.dataSourceDiseaseHistoryTable)
    const savedDrawingCanvas = useStore((store) => store.savedDrawingCanvas)
    const dataSourceVisitTable = useStore((store) => store.dataSourceVisitTable)
    const dataSourceAnalysisTable = useStore((store) => store.dataSourceAnalysisTable)
    const dataSourceTreatmentTable = useStore((store) => store.dataSourceTreatmentTable)
    const recipeList = useStore((store) => store.recipeList)
    const setIsFieldsChange = useStore((store) => store.setIsFieldsChange)

    //initialValuesPersonInfoForm

    const initialValuesPersonInfoForm = useStore((store) => store.initialValuesPersonInfoForm)

    const savePersonInfo = (patientId) => {
        const {
            patientName,
            patientSurName,
            patientPatronymic,
        } = patientForm.getFieldsValue()

        const isdata = !!Object.values(personInfoForm.getFieldsValue())[0]
        const data = isdata ? personInfoForm.getFieldsValue() : initialValuesPersonInfoForm

        let { birthDate, alkogol, smoke } = data

        const sendObj = {
            ...data,
            birthDate: dayjs(birthDate).format('YYYY-MM-DD'),
            alkogol: alkogol ? 1 : 0,
            smoke: smoke ? 1 : 0,
            patientName,
            patientSurName,
            patientPatronymic,
            patientId,
        };

        postPersonInfo(sendObj);
    }

    const initialValuesDiseaseHistory = useStore((store) => store.initialValuesDiseaseHistory)

    const saveMorby = (patientId) => {

        const isdata = !!Object.values(diseaseHistoryForm.getFieldsValue())[0]
        const data = isdata ? diseaseHistoryForm.getFieldsValue() : initialValuesDiseaseHistory

        const sendObj = {
            ...data,
            patientId,
            familyMembersList,
            deseaseImagesList: savedDrawingCanvas,
            deseaseHistoryDynamicsList: dataSourceDiseaseHistoryTable,
        };
        postMorby(sendObj);
    }

    const saveVisit = (patientId) => {
        const sendObj = {
            patientVisitsList: dataSourceVisitTable,
            patientId
        };
        postVisit(sendObj);
    }

    const saveAnalyses = (patientId) => {
        const sendObj = {
            analyzesMediaList: dataSourceAnalysisTable,
            patientId
        };
        postAnalyses(sendObj);
    }

    const initialValuesTreatment = useStore((store) => store.initialValuesTreatment)

    const saveTreatment = (patientId) => {

        const isdata = !!Object.values(treatmentHistoryForm.getFieldsValue())[0]
        const data = isdata ? treatmentHistoryForm.getFieldsValue() : initialValuesTreatment

        const sendObj = {
            treatmentStatic: data,
            patientId,
            treatmentDynamics: dataSourceTreatmentTable,
            recipeList,
        };
        postTreatment(sendObj);
    }

    const handleSave = async () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        let id = patientForm.getFieldsValue().patientId;
        let patientName = patientForm.getFieldsValue().patientName;

        if (!patientName) return

        let patientId;
        if (id) {
            patientId = id;
        } else {
            patientId = await fetchPatientId();
            patientForm.setFieldsValue({ patientId })
        }
        if (patientId) {
            Promise.all([
                savePersonInfo(patientId),
                saveMorby(patientId),
                saveVisit(patientId),
                saveAnalyses(patientId),
                saveTreatment(patientId),
            ])
            setIsFieldsChange(false)
        }
    }


    return { handleSave, isLoading }
}

export default useSavePatient