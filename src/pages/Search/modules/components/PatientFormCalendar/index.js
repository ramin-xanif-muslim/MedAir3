import {  Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { memo } from "react";
import PatientForm from "../../../../../components/PatientForm";

const SearchButton = () => {

    return (
        <Button type='primary'  icon={<SearchOutlined />}>Search</Button>
    )

}

const PatientFormCalendar = () => {


    return (
        <>
            <PatientForm button={<SearchButton/>} />
        </>
    );
};

export default memo(PatientFormCalendar);
