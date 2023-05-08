import { Table, Tooltip } from 'antd'
import moment from 'moment';
import React, { memo, useMemo } from 'react'
import { Box, useMediaQuery } from '@chakra-ui/react'
import { useLocalStorageStore } from '../../../../../modules/store';
import DeleteCalendarTableRow from '../DeleteCalendarTableRow'
import CalendarTableSetting from './CalendarTableSetting';

function CalendarsTable() {

  const [isLargerThan400] = useMediaQuery('(min-width: 400px)')

  const calendarTableSetting = useLocalStorageStore((store) => store.calendarTableSetting)

  const visible = (dataIndex, defaultVisible = true) => {
    return calendarTableSetting?.find(i => i.dataIndex === dataIndex) ? calendarTableSetting.find(i => i.dataIndex === dataIndex).isVisible : defaultVisible
  }

  const columns = useMemo(() => {
    return [
      {
        title: "Patient Number",
        dataIndex: "patientId",
        key: "patientId",
        ellipsis: true,
        width: isLargerThan400 ? false : 100,
        isVisible: visible('patientId'),
      },
      {
        title: "Time",
        dataIndex: "visitDate",
        key: "visitDate",
        ellipsis: true,
        width: isLargerThan400 ? false : 150,
        isVisible: visible('visitDate'),
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
        ellipsis: true,
        width: isLargerThan400 ? false : 150,
        isVisible: visible('patientName'),
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
        ellipsis: true,
        width: isLargerThan400 ? false : 150,
        isVisible: visible('patientSurName'),
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
        ellipsis: true,
        width: isLargerThan400 ? false : 150,
        isVisible: visible('patientPatronymic'),
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
        ellipsis: true,
        width: isLargerThan400 ? false : 150,
        isVisible: visible('birthDate'),
        render: (value) => {
          if (!value) return "";
          else {
            return moment().diff(value, "years");
          }
        },
      },
      {
        title: "Mobile number",
        ellipsis: true,
        width: isLargerThan400 ? false : 150,
        dataIndex: "phoneNumber",
        key: "phoneNumber",
        isVisible: visible('phoneNumber'),
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
        ellipsis: true,
        width: isLargerThan400 ? false : 150,
        isVisible: visible('visitReason'),
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
        isVisible: visible('placeName'),
        ellipsis: true,
        width: isLargerThan400 ? false : 150,
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
        isVisible: visible('recommendationPerson'),
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
        render: (value, row, index) => {
          return (
            <div
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              {/* <SelectStatus
              value={value}
              row={row}
              updatePage={() => updatePage(row)}
            /> */}
            </div>
          );
        },
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
            <DeleteCalendarTableRow />
          );
        },
      },
    ];
  }, [isLargerThan400, calendarTableSetting])

  return (
    <Box display='flex' flexDirection='column'>

      <Box alignSelf='flex-end'>
        <CalendarTableSetting columns={columns} />
      </Box>

      <Table
        size='small'
        bordered
        scroll={{
          x: window.innerHeight
        }}
        pagination={false}
        columns={columns.filter(i => i.isVisible === true)}
        dataSource={[{ as: 'as' }]}
      />

    </Box>
  )
}

export default memo(CalendarsTable)