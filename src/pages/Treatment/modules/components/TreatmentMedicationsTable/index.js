import React, { memo, useMemo, useState } from 'react'
import EditTableComponent from '../../../../../components/EditTableComponent'
import { useLocalStorageStore } from '../../../../../modules/store';
import { Button, Tooltip } from 'antd';
import DeleteTreatmentMedicationsTableRow from '../DeleteTreatmentMedicationsTableRow';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import TreatmentMedicationsTableSetting from './TreatmentMedicationsTableSetting';
import { PlusOutlined } from '@ant-design/icons'

function TreatmentMedicationsTable() {

    const [list, setList] = useState([])


    const treatmentMedicationsTableSetting = useLocalStorageStore((store) => store.treatmentMedicationsTableSetting)

    const visible = (dataIndex, defaultVisible = true) => {
        return treatmentMedicationsTableSetting?.find(i => i.dataIndex === dataIndex) ? treatmentMedicationsTableSetting.find(i => i.dataIndex === dataIndex).isVisible : defaultVisible
    }

    const columns = useMemo(() => {
        return [
            {
                title: "Date",
                dataIndex: "treatmentDate",
                key: "treatmentDate",
                isVisible: visible('treatmentDate'),
                ellipsis: true,
                editable: true,
                width: 200,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Name",
                dataIndex: "cureTabName",
                key: "cureTabName",
                isVisible: visible('cureTabName'),
                inputType: 'select',
                ellipsis: true,
                editable: true,
                width: 200,
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
                isVisible: visible('cureTabType'),
                inputType: 'select',
                ellipsis: true,
                editable: true,
                width: 200,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Mg/Ml",
                dataIndex: "cureTabDose",
                key: "cureTabDose",
                isVisible: visible('cureTabDose'),
                ellipsis: true,
                editable: true,
                width: 200,
                render: (value) => (
                    <Tooltip placement="topLeft" title={value}>
                        {value}
                    </Tooltip>
                ),
            },
            {
                title: "Usage guide",
                dataIndex: "cureTabUsing",
                key: "cureTabUsing",
                isVisible: visible('cureTabUsing'),
                ellipsis: true,
                editable: true,
                width: 200,
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
                        <DeleteTreatmentMedicationsTableRow />
                    );
                },
            },
        ];
    }, [treatmentMedicationsTableSetting]);
    return (
        <Box display='flex' flexDirection='column'>

            <Flex m='2'>
                <Text fontSize='20' fontWeight='600' >Medications</Text>

                <Spacer />

                <TreatmentMedicationsTableSetting columns={columns} />
            </Flex>

            <EditTableComponent
                dataSource={list}
                setDataSource={setList}
                defaultColumns={columns.filter(i => i.isVisible === true)}
            />

            <Button block icon={<PlusOutlined />} onClick={() => setList(prev => [...prev, {}])}  >New medications</Button>

        </Box>
    )
}

export default memo(TreatmentMedicationsTable)