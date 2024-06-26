import { Select, Table, Tooltip, message } from "antd";
import moment from "moment";
import React, { memo, useMemo, useState } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { useLocalStorageStore } from "../../../../../modules/store";
import DeleteCalendarTableRow from "../DeleteCalendarTableRow";
import CalendarTableSetting from "./CalendarTableSetting";
import sendRequest from "../../../../../modules/api/sendRequest";
import { useOnRowTable } from "../../../../../modules/hooks/useOnRowTable";

function CalendarsTable(props) {
    const { dataSource, refetch, isLoadingOnSelectCalendar } = props;

    const [selectedRowKey, setSelectedRowKey] = useState();

    const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

    const calendarTableSetting = useLocalStorageStore(
        (store) => store.calendarTableSetting
    );

    const visible = (dataIndex, defaultVisible = true) => {
        return calendarTableSetting?.find((i) => i.dataIndex === dataIndex)
            ? calendarTableSetting.find((i) => i.dataIndex === dataIndex)
                  .isVisible
            : defaultVisible;
    };

    const columns = useMemo(() => {
        return [
            {
                title: "№",
                dataIndex: "patientId",
                width: 40,
                key: "patientId",
                isVisible: visible("patientId"),
            },
            {
                title: "Time",
                dataIndex: "visitDate",
                key: "visitDate",
                width: isLargerThan400 ? false : 150,
                isVisible: visible("visitDate"),
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Name",
                dataIndex: "patientName",
                key: "patientName",
                width: isLargerThan400 ? false : 150,
                isVisible: visible("patientName"),
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Surname",
                dataIndex: "patientSurName",
                key: "patientSurName",
                width: isLargerThan400 ? false : 150,
                isVisible: visible("patientSurName"),
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Patronymic",
                dataIndex: "patientPatronymic",
                key: "patientPatronymic",
                width: isLargerThan400 ? false : 150,
                isVisible: visible("patientPatronymic"),
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Age",
                dataIndex: "birthDate",
                key: "birthDate",
                width: isLargerThan400 ? false : 150,
                isVisible: visible("birthDate"),
                render: (value) => {
                    if (!value) return "";
                    else {
                        return moment().diff(value, "years");
                    }
                },
            },
            {
                title: "Mobile number",
                width: isLargerThan400 ? false : 150,
                dataIndex: "phoneNumber",
                key: "phoneNumber",
                isVisible: visible("phoneNumber"),
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },

            {
                title: "Reason",
                dataIndex: "visitReason",
                key: "visitReason",
                width: isLargerThan400 ? false : 150,
                isVisible: visible("visitReason"),
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Address",
                dataIndex: "placeName",
                key: "placeName",
                isVisible: visible("placeName"),
                width: isLargerThan400 ? 'max-content' : 150,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Recomendation",
                dataIndex: "recommendationPerson",
                key: "recommendationPerson",
                isVisible: visible("recommendationPerson"),
                width: isLargerThan400 ? false : 150,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Status",
                dataIndex: "status",
                key: "status",
                isVisible: visible("status"),
                width: isLargerThan400 ? false : 150,
                render: (value, row, index) => {
                    const onSelect = async (val) => {
                        try {
                            const { id } = row;
                            const sendObj = {
                                id: id,
                                status: val,
                            };
                            let res = await sendRequest(
                                "visittable",
                                sendObj,
                                "post"
                            );
                            if (res?.data) {
                                message.success("Status changed");
                            } else message.warning("Something went wrong");
                        } catch (error) {
                            console.log(
                                "%c error",
                                "background: red; color: dark",
                                error
                            );
                        }
                    };

                    return (
                        <Box
                            m="0.5"
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                            }}
                        >
                            <Select
                                onSelect={onSelect}
                                defaultValue={value}
                                allowClear
                                style={{ width: "100%" }}
                            >
                                <Select.Option value="unsolved">
                                    Unsolved
                                </Select.Option>
                                <Select.Option value="approved">
                                    Approved
                                </Select.Option>
                            </Select>
                        </Box>
                    );
                },
            },
            {
                title: "Delete",
                ellipsis: true,
                dataIndex: "delete",
                width: 50,
                key: "delete",
                isVisible: visible("delete"),
                align: "center",
                render: (value, row, index) => {
                    const handleDelete = async () => {
                        message.loading();
                        let Id = row.id;
                        let res = await sendRequest(
                            "visits/" + Id,
                            {},
                            "delete"
                        );
                        if (res?.data) {
                            message.success("Deleted!");
                            refetch();
                        } else {
                            message.warning("Something went wrong");
                        }
                        return true;
                    };
                    return (
                        <DeleteCalendarTableRow handleDelete={handleDelete} />
                    );
                },
            },
        ];
    }, [isLargerThan400, calendarTableSetting]);

    const { onRowTable, isLoading } = useOnRowTable();

    return (
        <Box display="flex" flexDirection="column" w="full">
            <Box alignSelf="flex-end">
                <CalendarTableSetting columns={columns} />
            </Box>

            <Table
                rowKey="id"
                loading={isLoading || isLoadingOnSelectCalendar}
                size="small"
                bordered
                scroll={{
                    x: window.innerHeight,
                }}
                pagination={false}
                columns={columns.filter((i) => i.isVisible === true)}
                sticky={{ offsetHeader: 0 }}
                dataSource={dataSource || []}
                // dataSource={Array(100)
                //     .fill(null)
                //     .map((_, i) => ({ Age: i + 1 }))}
                rowClassName={(record, index) =>
                    selectedRowKey === index + 1 ? "ant-table-row-selected" : ""
                }
                onRow={(record, index) => ({
                    onClick: (e) => {
                        onRowTable?.(record, index);
                        setSelectedRowKey(index);
                    },
                })}
            />
        </Box>
    );
}

export default memo(CalendarsTable);
