import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { memo, useState } from "react";
import PatientForm from "../../../../../components/PatientForm";
import { useGlobalContext } from "../../../../../modules/context/index.js";
import sendRequest from "../../../../../modules/api/sendRequest";
import { useStore } from "../../../../../modules/store";

const SearchButton = () => {

    const [loading, setLoading] = useState(false)

    const { searchPatientForm } = useGlobalContext()

    const setDataSourceSearchTable = useStore((store) => store.setDataSourceSearchTable)

    const handleSearch = async () => {
        setLoading(true)
        const form = searchPatientForm.getFieldsValue();
        const searchObj = { ...form }
        let res = await sendRequest("search", searchObj, "post");
        if(res?.data) {
            setDataSourceSearchTable(res.data)
        }
        setLoading(false)
    }

    return (
        <Button
            onClick={handleSearch}
            type='primary'
            icon={<SearchOutlined />}
            loading={loading}
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
