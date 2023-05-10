import { Box } from '@chakra-ui/react'
import React from 'react'
import CalendarsTable from './modules/components/CalendarsTable'
import CalendarsCalendarPage from './modules/components/CalendarsCalendarPage'

function Calendar() {

  return (
    <Box boxShadow='xl' p='2' bg='pink.100' borderRadius='15px' >

      <Box>
        <CalendarsCalendarPage />
      </Box>

      <Box>
        <CalendarsTable />
      </Box>

    </Box>
  )
}

export default Calendar