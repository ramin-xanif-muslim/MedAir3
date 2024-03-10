import { useGlobalContext } from "../context/index.js"
import { useStore } from "../store/index.js"
import { useLocation, useNavigate } from "react-router-dom"


function useSaveOnNavigate() {

    const {
        personInfoForm,
        diseaseHistoryForm,
        treatmentHistoryForm,
    } = useGlobalContext()
    


    const isFieldsChange = useStore((store) => store.isFieldsChange)
    const setIsFieldsChange = useStore((store) => store.setIsFieldsChange)


    const setInitialValuesPersonInfoForm = useStore((store) => store.setInitialValuesPersonInfoForm)

    const savePersonInfo = () => {
        setInitialValuesPersonInfoForm(personInfoForm.getFieldsValue())
    }


    const setInitialValuesDiseaseHistory = useStore((store) => store.setInitialValuesDiseaseHistory)

    const saveMorby = () => {
        setInitialValuesDiseaseHistory(diseaseHistoryForm.getFieldsValue())
            
    }


    const setInitialValuesTreatment = useStore((store) => store.setInitialValuesTreatment)

    const saveTreatment = () => {
        setInitialValuesTreatment(treatmentHistoryForm.getFieldsValue())
    }

    const navigate = useNavigate()

    const location = useLocation()

    const handleSaveOnNavigate = async (navLink) => {
        try {
            const { pathname } = location

            if (isFieldsChange && pathname === "/person_info") {
                savePersonInfo()
            } else if (isFieldsChange && pathname === "/disease_history") {
                saveMorby()
            } else if (isFieldsChange && pathname === "/treatment") {
                saveTreatment()
            }

            navigate(`/${navLink}`)
            setIsFieldsChange(false)
        } catch (error) {
            console.log('%c error', 'background: red; color: dark', error);
        }
    }


    return { handleSaveOnNavigate }
}

export default useSaveOnNavigate