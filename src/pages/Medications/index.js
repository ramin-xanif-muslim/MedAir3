import React, { useEffect, useMemo, useState } from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { Form, Table, Tooltip, message } from "antd";
import sendRequest from "../../modules/api/sendRequest";
import DeleteTableRow from "../../components/DeleteTableRow";
import { useQueryContext } from "../../modules/store/QueryContext";
import CreateNew from "./modules/components/CreateNew";

function Medications() {
    const {
        managersTabs,
        isFetchingManagersTabs,
        setIsFetchManagersTabs,
        refetchManagersTabs,
        isLoadingManagersTabs,
    } = useQueryContext();

    useEffect(() => {
        setIsFetchManagersTabs(true);
    }, []);

    const [list, setList] = useState(managersTabs || []);

    useEffect(() => {
        if (!isFetchingManagersTabs && managersTabs) {
            setList(managersTabs);
        }
    }, [isFetchingManagersTabs]);

    const columns = useMemo(() => {
        return [
            {
                title: "Name",
                dataIndex: "cureTabName",
                key: "cureTabName",
                ellipsis: true,
                editable: true,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Type",
                dataIndex: "cureTabType",
                key: "cureTabType",
                inputType: "select",
                ellipsis: true,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Mg/Ml",
                dataIndex: "cureTabSize",
                key: "cureTabSize",
                ellipsis: true,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Delete",
                dataIndex: "delete",
                width: 50,
                key: "delete",
                ellipsis: true,
                align: "center",
                render: (value, row, index) => {
                    const handleDelete = () => {
                        deletePlace(row);
                    };
                    return <DeleteTableRow onClick={handleDelete} />;
                },
            },
        ];
    }, [list]);

    const deleteItem = (delItem) => {
        let newList = list.filter((i) => i.Id !== delItem.Id);
        setList(newList);
        message.success("Deleted");
    };
    const deletePlace = async (delItem) => {
        let Id = delItem.cureTabId;
        if (!Id) {
            return deleteItem(delItem);
        }
        let res = await sendRequest("managers/tabs/" + Id, {}, "delete");
        if (res?.data === "success") {
            message.success("Deleted!");
            let newData = list.filter((i) => i.Id !== delItem.Id);
            setList(newData);
            refetchManagersTabs();
        } else {
            message.warning("Something get wrong");
        }
    };

    const [selectedRowKey, setSelectedRowKey] = useState();

    const [form] = Form.useForm();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const onRowTable = (record, index) => {
        form.setFieldsValue(record);
        setSelectedRowKey(index);
        onOpen();
    };

    return (
        <Box boxShadow="xl" p="2" bg="pink.100" borderRadius="15px">
            <Box display="flex" flexDirection="column">
                <Flex w="100%" mb="2" gap="2">
                    <CreateNew
                        isOpen={isOpen}
                        onOpen={onOpen}
                        onClose={onClose}
                        form={form}
                        selectedRowKey={selectedRowKey}
                        setSelectedRowKey={setSelectedRowKey}
                    />
                </Flex>

                <Table
                    rowKey="cureTabId"
                    loading={isLoadingManagersTabs}
                    size="small"
                    bordered
                    columns={columns}
                    dataSource={list}
                    pagination={false}
                    rowClassName={(record, index) =>
                        selectedRowKey === index + 1
                            ? "ant-table-row-selected"
                            : ""
                    }
                    onRow={(record, index) => ({
                        onClick: (e) => {
                            onRowTable(record, index);
                            setSelectedRowKey(index + 1);
                        },
                    })}
                />
            </Box>
        </Box>
    );
}

export default Medications;
