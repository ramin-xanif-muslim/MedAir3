import React from 'react'
import { Box } from '@chakra-ui/react'
import CalendarsTable from './modules/components/CalendarsTable'
import CalendarsCalendarPage from './modules/components/CalendarsCalendarPage'
import sendRequest from '../../modules/api/sendRequest';
import { useStore } from '../../modules/store';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';
import Alert from '../../components/Alert';

function Calendar() {

  const selectedDate = useStore((store) => store.selectedDate)
  const setSelectedDate = useStore((store) => store.setSelectedDate)


  const fetchDataTable = async () => {
    const date = selectedDate ? selectedDate.format("YYYY-MM-DD 00:00:00") : dayjs().format("YYYY-MM-DD 00:00:00")
    let res = await sendRequest("visits/" + date);
    if (res?.data) return res.data
  };

  const { data, refetch, isLoading } = useQuery(['calendarPage', selectedDate], () => fetchDataTable())


  const cellRender = (value) => {
    try {
      const hasVisit = data?.some(({ visitDate }) => dayjs(visitDate).format('YYYY-MM-DD') === value?.format('YYYY-MM-DD'));
      return hasVisit ? <Box borderTop='3px solid black' shadow='dark-lg' /> : null;
    } catch (error) {
      console.log('%c error', 'background: red; color: dark', error);
    }
  };

  const onSelect = (value) => {
    setSelectedDate(value)
  }

  return (
    <>
      {/* <Alert /> */}

      <Box boxShadow='xl' p='2' bg='pink.100' borderRadius='15px' >

        <Box>
          <CalendarsCalendarPage
            refetch={refetch}
            cellRender={cellRender}
            onSelect={onSelect}
            defaultValue={selectedDate}
          />
        </Box>

        <Box>
          <CalendarsTable
            refetch={refetch}
            isLoadingOnSelectCalendar={isLoading}
            dataSource={data}
          />
        </Box>

      </Box></>

  )
}

export default Calendar