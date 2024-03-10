import { useGlobalContext } from "../context/index.js"
import { useStore } from "../store/index.js"

function useResetProfilePatient() {

    const { personInfoForm, diseaseHistoryForm, patientForm, setFamilyMembersList, treatmentHistoryForm, searchPatientForm } = useGlobalContext()

    const setDataSourceDiseaseHistoryTable = useStore((store) => store.setDataSourceDiseaseHistoryTable)

    const setSavedDrawingCanvas = useStore((store) => store.setSavedDrawingCanvas)

    const setDataSourceVisitTable = useStore((store) => store.setDataSourceVisitTable)

    const setDataSourceAnalysisTable = useStore((store) => store.setDataSourceAnalysisTable)

    const setDataSourceTreatmentTable = useStore((store) => store.setDataSourceTreatmentTable)

    const setRecipeList = useStore((store) => store.setRecipeList)

    const setInitialValuesPersonInfoForm = useStore((store) => store.setInitialValuesPersonInfoForm)
    const setInitialValuesDiseaseHistory = useStore((store) => store.setInitialValuesDiseaseHistory)
    const setInitialValuesTreatment = useStore((store) => store.setInitialValuesTreatment)


    const resetProfilePatient = () => {
        setInitialValuesPersonInfoForm({
            gender: 'Female',
            height: 0,
            weight: 0,
            imt: 0,
            firstChildbirth: 0,
            lastChildbirth: 0,
            abortCount: 0,
            artificialInseminationCount: 0,
        })
        setInitialValuesDiseaseHistory({})
        setInitialValuesTreatment({})
        searchPatientForm.resetFields()
        patientForm.resetFields()
        personInfoForm.resetFields()
        diseaseHistoryForm.resetFields()
        treatmentHistoryForm.resetFields()
        setFamilyMembersList([])
        setDataSourceDiseaseHistoryTable([])
        setSavedDrawingCanvas({})
        setDataSourceVisitTable([])
        setDataSourceAnalysisTable([])
        setDataSourceTreatmentTable([])
        setRecipeList([])
    }

    return { resetProfilePatient }
}

export default useResetProfilePatient