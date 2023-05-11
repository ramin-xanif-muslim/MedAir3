import { Button, Form } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { memo } from "react";
import PatientForm from "../../../../../components/PatientForm";
import { useGlobalContext } from "../../../../../modules/context/index.js";

const SearchButton = () => {

    const { searchPatientForm } = useGlobalContext()

    const handleSearch = () => {
        console.log('form', searchPatientForm.getFieldsValue());
    }

    return (
        <Button
            onClick={handleSearch}
            type='primary'
            icon={<SearchOutlined />}
        >
            Search
        </Button>
    )

}

const PatientFormCalendar = () => {

    const { searchPatientForm } = useGlobalContext()

    return (
        <>
            <PatientForm
                form={searchPatientForm}
                button={<SearchButton />}

            />
        </>
    );
};

export default memo(PatientFormCalendar);
