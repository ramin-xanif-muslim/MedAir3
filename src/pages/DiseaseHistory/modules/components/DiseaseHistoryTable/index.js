import { Box, Flex, Spacer, useMediaQuery } from '@chakra-ui/react'
import { Button, Space, Table, Tooltip } from 'antd'
import React, { memo, useMemo } from 'react'
import DeleteDiseaseHistoryTableRow from '../DeleteDiseaseHistoryTableRow';
import { useLocalStorageStore } from '../../../../../modules/store';
import DiseaseHistoryTableSetting from './DiseaseHistoryTableSetting';

function DiseaseHistoryTable() {

    const [isLargerThan400] = useMediaQuery('(min-width: 400px)')

    const diseaseHistoryTableSetting = useLocalStorageStore((store) => store.diseaseHistoryTableSetting)

    const visible = (dataIndex, defaultVisible = true) => {
        return diseaseHistoryTableSetting?.find(i => i.dataIndex === dataIndex) ? diseaseHistoryTableSetting.find(i => i.dataIndex === dataIndex).isVisible : defaultVisible
    }

    const columns = useMemo(() => {
        return [
            {
                title: "Breast",
                dataIndex: "complaintBreastType",
                key: "complaintBreastType",
                isVisible: visible('complaintBreastType'),
                ellipsis: true,
                width: isLargerThan400 ? false : 150,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Duration of illness",
                dataIndex: "durationOfIllness",
                key: "durationOfIllness",
                isVisible: visible('durationOfIllness'),
                ellipsis: true,
                width: isLargerThan400 ? false : 150,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Complaints",
                dataIndex: "complaintDescription",
                key: "complaintDescription",
                isVisible: visible('complaintDescription'),
                ellipsis: true,
                width: isLargerThan400 ? false : 150,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "ER",
                dataIndex: "ihkEr",
                key: "ihkEr",
                isVisible: visible('ihkEr'),
                ellipsis: true,
                render: (value) => {
                    if (value === 1) {
                        return "Pozitiv";
                    } else if (value === 2) {
                        return "Negativ";
                    }
                },
            },
            {
                title: "ER N",
                dataIndex: "erN",
                key: "erN",
                isVisible: visible('erN'),
                ellipsis: true,
                width: isLargerThan400 ? false : 150,
            },
            {
                title: "PR",
                dataIndex: "ihkPr",
                key: "ihkPr",
                isVisible: visible('ihkPr'),
                ellipsis: true,
                width: isLargerThan400 ? false : 150,
                render: (value) => {
                    if (value === 1) {
                        return "Pozitiv";
                    } else if (value === 2) {
                        return "Negativ";
                    }
                },
            },
            {
                title: "PR N",
                dataIndex: "prN",
                key: "prN",
                isVisible: visible('prN'),
                ellipsis: true,
                width: isLargerThan400 ? false : 150,
            },
            {
                title: "HER2",
                dataIndex: "her2",
                key: "her2",
                isVisible: visible('her2'),
                ellipsis: true,
                width: isLargerThan400 ? false : 150,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "HER2 FT",
                dataIndex: "her2FT",
                key: "her2FT",
                isVisible: visible('her2FT'),
                ellipsis: true,
                width: isLargerThan400 ? false : 150,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "K67",
                dataIndex: "k67",
                key: "k67",
                isVisible: visible('k67'),
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
                        <DeleteDiseaseHistoryTableRow />
                    );
                },
            },
        ];
    }, [isLargerThan400, diseaseHistoryTableSetting]);
    
    return (
        <Box display='flex' flexDirection='column'>

            <Flex m='2'>
                <Space>
                    <Button type="primary" >Add</Button>
                    <Button danger>Clear</Button>
                </Space>

                <Spacer />

                <DiseaseHistoryTableSetting columns={columns} />
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

export default memo(DiseaseHistoryTable)