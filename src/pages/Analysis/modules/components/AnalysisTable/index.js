import { Box, Flex, Spacer, useMediaQuery } from '@chakra-ui/react'
import { Button, Space, Table, Tooltip } from 'antd'
import React, { memo, useMemo } from 'react'
import { useLocalStorageStore } from '../../../../../modules/store'
import DeleteAnalysisTableRow from '../DeleteAnalysisTableRow'
import AnalysisTableSetting from './AnalysisTableSetting'

function AnalysisTable() {

    const [isLargerThan400] = useMediaQuery('(min-width: 400px)')

    const analysisTableSetting = useLocalStorageStore((store) => store.diseaseHistoryTableSetting)

    const visible = (dataIndex, defaultVisible = true) => {
        return analysisTableSetting?.find(i => i.dataIndex === dataIndex) ? analysisTableSetting.find(i => i.dataIndex === dataIndex).isVisible : defaultVisible
    }

    const columns = useMemo(() => {
        return [
            {
                title: "Breast Type",
                dataIndex: "analyzesType",
                key: "analyzesType",
                isVisible: visible('analyzesType'),
                ellipsis: true,
                width: isLargerThan400 ? false : 150,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Sub Type",
                dataIndex: "analyzesSubType",
                key: "analyzesSubType",
                isVisible: visible('analyzesSubType'),
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
                dataIndex: "analyzesDesc",
                key: "analyzesDesc",
                isVisible: visible('analyzesDesc'),
                ellipsis: true,
                width: isLargerThan400 ? false : 150,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Date",
                dataIndex: "date",
                key: "date",
                isVisible: visible('date'),
                ellipsis: true,
                width: isLargerThan400 ? false : 150,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Image",
                dataIndex: "analyzesContentName",
                key: "analyzesContentName",
                isVisible: visible('analyzesContentName'),
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
                        <DeleteAnalysisTableRow />
                    );
                },
            },
        ];
    }, [isLargerThan400, analysisTableSetting]);

  return (
    <Box display='flex' flexDirection='column'>

        <Flex m='2'>
            <Space>
                <Button type="primary" >Add</Button>
                <Button danger>Clear</Button>
            </Space>

            <Spacer />

            <AnalysisTableSetting columns={columns} />
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

export default memo(AnalysisTable)