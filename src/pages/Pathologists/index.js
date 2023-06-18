import React, { useEffect, useMemo, useState } from 'react'
import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import { Form, Table, Tooltip, message } from 'antd'
import sendRequest from '../../modules/api/sendRequest'
import DeleteTableRow from '../../components/DeleteTableRow'
import { useQueryContext } from '../../modules/store/QueryContext'
import CreateNew from './modules/components/CreateNew'


function Pathologists() {

    const {
        pathologists,
        refetchPathologists,
        isFetchingPathologists,
        isLoadingPathologists,
        setIsFetchPathologists,
    } = useQueryContext();

    useEffect(() => {
        setIsFetchPathologists(true)
    }, [])

    const [list, setList] = useState(pathologists || [])

    useEffect(() => {
        if (!isFetchingPathologists && pathologists) {
            setList(pathologists)
        }
    }, [isFetchingPathologists])

    const columns = useMemo(() => {
        return [
            {
                title: "Name",
                dataIndex: "pathologistName",
                key: "pathologistName",
                ellipsis: true,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Place",
                dataIndex: "pathologistPlace",
                key: "pathologistPlace",
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
                align: 'center',
                render: (value, row, index) => {
                    const handleDelete = () => {
                        deletePlace(row)
                    }
                    return (
                        <DeleteTableRow onClick={handleDelete} />
                    );
                },
            },
        ];
    }, [list]);

    const deleteItem = (delItem) => {
        let newList = list.filter(i => i.Id !== delItem.Id)
        setList(newList)
        message.success('Deleted')
    }
    const deletePlace = async (delItem) => {
        let Id = delItem.pathologistId;
        if (!Id) {
            return deleteItem(delItem)
        }
        let res = await sendRequest("managers/pathologists/" + Id, {}, "delete");
        if (res?.data === 'success') {
            message.success('Deleted!')
            let newData = list.filter(i => i.Id !== delItem.Id)
            setList(newData)
            refetchPathologists()
        } else {
            message.warning('Something get wrong')
        }
    };

    const [selectedRowKey, setSelectedRowKey] = useState()
    const [selectedItem, setSelectedItem] = useState()

    const [form] = Form.useForm()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const onRowTable = (record, index) => {
        form.setFieldsValue(record)
        setSelectedItem(record)
        setSelectedRowKey(index)
        onOpen()
    }

    return (
        <Box boxShadow='xl' p='2' bg='pink.100' borderRadius='15px' >

            <Box display='flex' flexDirection='column'>

                <Flex w="100%" mb="2" gap="2">

                    <CreateNew
                        isOpen={isOpen}
                        onOpen={onOpen}
                        onClose={onClose}
                        form={form}
                        selectedItem={selectedItem}
                        setSelectedRowKey={setSelectedRowKey}
                    />

                </Flex>

                <Table
                    loading={isLoadingPathologists}
                    size='small'
                    bordered
                    columns={columns}
                    dataSource={list}
                    pagination={false}
                    rowClassName={(record, index) =>
                        selectedRowKey === index + 1 ? 'ant-table-row-selected' : ''
                    }
                    onRow={(record, index) => ({
                        onClick: (e) => {
                            onRowTable(record, index)
                            setSelectedRowKey(index + 1)
                        },
                    })}
                />

                {/* <EditTableComponent
                    dataSource={list}
                    setDataSource={setList}
                    defaultColumns={columns}
                    onChange={onChange}
                /> */}

            </Box>

        </Box>
    )
}

export default Pathologists