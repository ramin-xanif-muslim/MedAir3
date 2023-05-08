import { Box, Flex, Spacer, useMediaQuery } from '@chakra-ui/react'
import { Button, Space, Table, Tooltip } from 'antd'
import React, { memo, useMemo } from 'react'
import VisitsTableSetting from '../VisitsTableSetting'
import { useLocalStorageStore } from '../../../../../modules/store'
import DeleteVisitsTableRow from '../DeleteVisitsTableRow'

function VisitsTable() {

    const [isLargerThan400] = useMediaQuery('(min-width: 400px)')

    const visitsTableSetting = useLocalStorageStore((store) => store.diseaseHistoryTableSetting)

    const visible = (dataIndex, defaultVisible = true) => {
        return visitsTableSetting?.find(i => i.dataIndex === dataIndex) ? visitsTableSetting.find(i => i.dataIndex === dataIndex).isVisible : defaultVisible
    }

    const columns = useMemo(() => {
        return [
            {
                title: "Date",
                dataIndex: "visitDate",
                key: "visitDate",
                isVisible: visible('visitDate'),
                ellipsis: true,
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
                isVisible: visible('status'),
                ellipsis: true,
                width: isLargerThan400 ? false : 150,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Visit type",
                dataIndex: "visitType",
                key: "visitType",
                isVisible: visible('visitType'),
                ellipsis: true,
                width: isLargerThan400 ? false : 150,
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
                isVisible: visible('visitReason'),
                ellipsis: true,
                width: isLargerThan400 ? false : 150,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Description",
                dataIndex: "visitDesc",
                key: "visitDesc",
                isVisible: visible('visitDesc'),
                ellipsis: true,
                width: isLargerThan400 ? false : 150,
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
                isVisible: visible('delete'),
                ellipsis: true,
                align: 'center',
                render: (value, row, index) => {
                    return (
                        <DeleteVisitsTableRow />
                    );
                },
            },
        ];
    }, [isLargerThan400, visitsTableSetting]);

  return (
    <Box display='flex' flexDirection='column'>

        <Flex m='2'>
            <Space>
                <Button type="primary" >Add</Button>
                <Button danger>Clear</Button>
            </Space>

            <Spacer />

            <VisitsTableSetting columns={columns} />
        </Flex>

        <Table
            size='small'
            bordered
            scroll={{
                x: window.innerHeight
            }}
            pagination={false}
            columns={columns.filter(i => i.isVisible === true)}
            dataSource={[]}
        />

    </Box>
  )
}

export default memo(VisitsTable)