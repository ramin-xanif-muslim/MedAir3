import React, { useEffect, useMemo, useState } from 'react'
import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import EditTableComponent from '../../components/EditTableComponent'
import { Form, Table, Tooltip, message } from 'antd'
import sendRequest from '../../modules/api/sendRequest'
import DeleteTableRow from '../../components/DeleteTableRow'
import { useQueryContext } from '../../modules/store/QueryContext'
import CreateNew from './modules/components/CreateNew'

function ReceptionLocations() {

    const {
        places,
        refetchPlaces,
        isFetchingPlaces,
        isLoadingPlaces,
        setIsFetchPlaces,
    } = useQueryContext();

    useEffect(() => {
        setIsFetchPlaces(true)
    }, [])

    const [list, setList] = useState(places || [])

    useEffect(() => {
        if (!isFetchingPlaces && places) {
            setList(places)
        }
    }, [isFetchingPlaces])

    const columns = useMemo(() => {
        return [
            {
                title: "Name",
                dataIndex: "placeName",
                key: "placeName",
                ellipsis: true,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "City",
                dataIndex: "placeCity",
                key: "placeCity",
                inputType: 'select',
                ellipsis: true,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Country",
                dataIndex: "placeCountry",
                key: "placeCountry",
                inputType: 'select',
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
        let Id = delItem.visitPlaceId;
        if (!Id) {
            return deleteItem(delItem)
        }
        let res = await sendRequest("managers/places/" + Id, {}, "delete");
        if (res?.data === 'success') {
            message.success('Deleted!')
            let newData = list.filter(i => i.Id !== delItem.Id)
            setList(newData)
            refetchPlaces()
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
                loading={isLoadingPlaces}
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

            </Box>

        </Box>
    )
}

export default ReceptionLocations