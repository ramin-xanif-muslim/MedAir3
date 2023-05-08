import React, { memo } from "react";
import { Empty } from "antd";
import { Table } from "antd";
import moment from "moment";
import PatientFormCalendar from "./modules/components/PatientFormCalendar";
import { Box } from "@chakra-ui/react";

const Search = () => {
    
    const columns = [
        {
            title: "Name",
            dataIndex: "patientName",
            key: "patientName",
        },
        {
            title: "Surname",
            dataIndex: "patientSurName",
            key: "patientSurName",
        },
        {
            title: "Patronymic",
            dataIndex: "patientPatronymic",
            key: "patientPatronymic",
        },
        {
            title: "Birth date",
            dataIndex: "birthDate",
            key: "birthDate",
            render: (value, row, index) => {
                return moment(value).format("DD-MM-YYYY");
            },
        },
        {
            title: "Birth Place",
            dataIndex: "birthPlace",
            key: "birthPlace",
        },
    ];
    
    return (
        <Box boxShadow='xl' p='2' bg='pink.100' borderRadius='15px' >
            <PatientFormCalendar />
            <Box mt='2'>
                <Table
                    size='small'
                    bordered
                    pagination={false}
                    scroll={{
                        x: window.innerHeight
                    }}
                    locale={{
                        emptyText: (
                            <Empty
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                description="Patient not found..."
                            />
                        ),
                    }}
                    columns={columns}
                />
            </Box>
        </Box>
    );
};

export default memo(Search);
