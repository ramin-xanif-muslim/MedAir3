import React, { memo } from 'react'
import PatientForm from '../PatientForm'
import { Button, Form, Space } from 'antd'
import { useGlobalContext } from '../../modules/context/index.js'
import { useStore } from '../../modules/store'

const ProfilePatientButton = () => {

    const { personInfoForm, diseaseHistoryForm, patientForm, familyMembersList } = useGlobalContext()
    
    const dataSourceDiseaseHistoryTable = useStore((store) => store.dataSourceDiseaseHistoryTable)

    const handleSave = () => {
        console.log('patientForm', patientForm.getFieldsValue());

        console.log('personInfoForm', personInfoForm.getFieldsValue());
        
        console.log('diseaseHistoryForm', diseaseHistoryForm.getFieldsValue());

        console.log('familyMembersList',familyMembersList);

        console.log('dataSourceDiseaseHistoryTable',dataSourceDiseaseHistoryTable);
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