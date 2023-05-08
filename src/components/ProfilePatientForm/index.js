import React, { memo } from 'react'
import PatientForm from '../PatientForm'
import { Button, Space } from 'antd'

const SearchButton = () => {
    return (
        <Space>
            <Button type="primary" >Save</Button>
            <Button danger>Clear</Button>
        </Space>
    )
}

function ProfilePatientForm() {
    return (
        <PatientForm button={<SearchButton />} />
    )
}

export default memo(ProfilePatientForm)