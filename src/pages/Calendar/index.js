import React from 'react'
import {
  Stack, Button, Box,
} from '@chakra-ui/react'
import AddVisitButton from './modules/components/AddVisitButton'
import { Calendar } from 'antd'
import CalendarsTable from './modules/components/CalendarsTable'

function CalendarComponent() {

  return (
    <Box boxShadow='xl' p='2' bg='pink.100' borderRadius='15px' >
      <Stack direction='row' spacing={4} align='center'>
        <Button size='sm' colorScheme='blue'>New Patient</Button>
        <AddVisitButton />
      </Stack>
      <Box py='2' w='300px'>
        <Calendar
          // dateCellRender={dateCellRender}
          className="CallCalendar"
          fullscreen={false}
        // onPanelChange={onPanelChange}
        // onChange={onChange}
        />
      </Box>
      <Box py='2'>
        <CalendarsTable />
      </Box>

    </Box>
  )
}

export default CalendarComponent