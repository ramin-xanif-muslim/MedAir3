import React, { memo } from 'react'
import PatientForm from '../PatientForm'
import { Button, Form, Space } from 'antd'
import { useGlobalContext } from '../../modules/context/index.js'
import { useStore } from '../../modules/store'

const ProfilePatientButton = () => {

    const { personInfoForm, diseaseHistoryForm, patientForm, familyMembersList } = useGlobalContext()
    
    const dataSourceDiseaseHistoryTable = useStore((store) => store.dataSourceDiseaseHistoryTable)
    const savedDrawingCanvas = useStore((store) => store.savedDrawingCanvas)
    const descriptionsCanvas = useStore((store) => store.descriptionsCanvas)
    const dataSourceVisitTable = useStore((store) => store.dataSourceVisitTable)
    const dataSourceAnalysisTable = useStore((store) => store.dataSourceAnalysisTable)

    const handleSave = () => {

        console.log('patientForm', patientForm.getFieldsValue());

        console.log('personInfoForm', personInfoForm.getFieldsValue());
        
        console.log('diseaseHistoryForm', diseaseHistoryForm.getFieldsValue());

        console.log('familyMembersList',familyMembersList);

        console.log('dataSourceDiseaseHistoryTable',dataSourceDiseaseHistoryTable);

        console.log('savedDrawingCanvas',savedDrawingCanvas);

        console.log('descriptionsCanvas',descriptionsCanvas);

        console.log('dataSourceVisitTable',dataSourceVisitTable);

        console.log('dataSourceAnalysisTable',dataSourceAnalysisTable);
        
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
        />
    )
}

export default memo(ProfilePatientForm)