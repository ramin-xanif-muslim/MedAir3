import React, { memo } from "react";
import { Empty } from "antd";
import { Table } from "antd";
import PatientFormCalendar from "./modules/components/PatientFormCalendar";
import { Box } from "@chakra-ui/react";
import { useStore } from "../../modules/store";
import dayjs from "dayjs";
import { useOnRowTable } from "../../modules/hooks/useOnRowTable";

const Search = () => {
    const dataSourceSearchTable = useStore(
        (store) => store.dataSourceSearchTable
    );

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
                if (!value) return "";
                return dayjs(value).format("DD-MM-YYYY");
            },
        },
        {
            title: "Birth Place",
            dataIndex: "birthPlace",
            key: "birthPlace",
        },
    ];

    const { onRowTable, isLoading } = useOnRowTable();

    return (
        <>
            <Box boxShadow="xl" p="2" bg="pink.100" borderRadius="15px">
                <Box boxShadow="xl" p="2" bg="pink.50" borderRadius="15px">
                    <PatientFormCalendar />
                </Box>

                <Box mt="2">
                    <Table
                        rowKey="patientId"
                        loading={isLoading}
                        size="small"
                        bordered
                        // scroll={{
                        //     x: window.innerHeight,
                        // }}
                        locale={{
                            emptyText: (
                                <Empty
                                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                                    description="Patient not found..."
                                />
                            ),
                        }}
                        columns={columns}
                        pagination={false}
                        dataSource={dataSourceSearchTable}
                        onRow={(record, index) => ({
                            onClick: (e) => onRowTable(record, index),
                        })}
                        // dataSource={new Array(200).fill(null)}
                        // pagination={{
                        //     total: 200,
                        //     defaultPageSize: 100,
                        //     pageSizeOptions: [100, 200, 300],
                        //     position: ["bottomLeft"],
                        // }}
                        sticky={{ offsetHeader: 0 }}
                    />
                </Box>
            </Box>
        </>
    );
};

export default memo(Search);
