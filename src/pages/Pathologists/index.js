import React, { useMemo, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import EditTableComponent from '../../components/EditTableComponent'
import { Button, Popconfirm, Tooltip, Typography } from 'antd'


function Pathologists() {

    const [list, setList] = useState([])

    const columns = useMemo(() => {
        return [
            {
                title: "Name",
                dataIndex: "pathologistName",
                key: "pathologistName",
                ellipsis: true,
                editable: true,
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
                editable: true,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Delete",
                dataIndex: "delete",
                key: "delete",
                ellipsis: true,
                align: 'center',
                render: (value, row, index) => {
                    return (
                        <Typography.Link>
                            <Box color='red' onClick={(e) => e.stopPropagation()}>
                                <Popconfirm
                                    title="Are you sure you want to delete this item?"
                                    okText="Yes"
                                    cancelText="No"
                                // onConfirm={onClick}
                                >
                                    <DeleteOutlined />
                                </Popconfirm>
                            </Box>
                        </Typography.Link>
                    );
                },
            },
        ];
    }, []);

    return (
        <Box boxShadow='xl' p='2' bg='pink.100' borderRadius='15px' >

            <Box display='flex' flexDirection='column'>

                <EditTableComponent
                    dataSource={list}
                    setDataSource={setList}
                    defaultColumns={columns}
                />

                <Button block icon={<PlusOutlined />} onClick={() => setList(prev => [...prev, {}])}  >Add New</Button>

            </Box>

        </Box>
    )
}

export default Pathologists