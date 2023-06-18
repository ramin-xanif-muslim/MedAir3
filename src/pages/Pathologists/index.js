import React, { useEffect, useMemo, useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { PlusOutlined, } from '@ant-design/icons'
import EditTableComponent from '../../components/EditTableComponent'
import { Button, Tooltip, message } from 'antd'
import { useQuery } from 'react-query'
import sendRequest from '../../modules/api/sendRequest'
import DeleteTableRow from '../../components/DeleteTableRow'
import { useQueryContext } from '../../modules/store/QueryContext'


function Pathologists() {

    const [disabledShowButton, setDisabledShowButton] = useState(true)
    const [loading, setLoading] = useState(false)

    const {
        pathologists,
        refetchPathologists,
        isFetchingPathologists,
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
                // editable: true,
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
                // editable: true,
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

    const handleSave = async () => {
        setLoading(true);
        for (let i = 0; i < list.length; i++) {
            let sendObj = { ...list[i] };
            let res = await sendRequest("managers/pathologists", sendObj, "post");
            if (res) {
                message.success({
                    content: 'Saved',
                    key: 'save_manager'
                })
                refetchPathologists()
            } else {
                message.error('Error')
            }
        }
        setLoading(false)
        setDisabledShowButton(true)
    };

    const onChange = () => {
        setDisabledShowButton(false)
    }

    const handleAddNew = () => {
        let key = new Date().getTime()
        let newData = { key, Id: key };
        setList(prev => [...prev, newData]);
        setDisabledShowButton(false)
    }

    return (
        <Box boxShadow='xl' p='2' bg='pink.100' borderRadius='15px' >

            <Box display='flex' flexDirection='column'>

                <Flex w="100%" mb="2" gap="2">

                    <Button
                        icon={<PlusOutlined />}
                        onClick={handleAddNew}
                    >
                        New
                    </Button>

                    <Button
                        disabled={disabledShowButton}
                        loading={loading}
                        onClick={handleSave}
                        type='primary'
                    >
                        Save
                    </Button>

                </Flex>

                <EditTableComponent
                    dataSource={list}
                    setDataSource={setList}
                    defaultColumns={columns}
                    onChange={onChange}
                />

            </Box>

        </Box>
    )
}

export default Pathologists