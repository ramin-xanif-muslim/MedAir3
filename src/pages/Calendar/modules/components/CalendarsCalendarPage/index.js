import React from 'react'
import {
    Stack, Button, Box,
} from '@chakra-ui/react'
import { Calendar } from 'antd'
import AddVisitButton from '../AddVisitButton'

function CalendarsCalendarPage(props) {

  const { cellRender, onPanelChange, onChange } = props

  return (
    <>

        <Stack direction='row' spacing={4} align='center'>
            <Button size='sm' colorScheme='blue'>New Patient</Button>
            <AddVisitButton />
        </Stack>

        <Box py='2' w='300px'>
            <Calendar
                dateCellRender={cellRender}
                // cellRender={cellRender}
                fullscreen={false}
                onPanelChange={onPanelChange}
                onChange={onChange}
            />
        </Box>

    </>
  )

}

export default React.memo(CalendarsCalendarPage)