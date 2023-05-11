import React from 'react'
import {
    Stack, Button, Box,
} from '@chakra-ui/react'
import { Calendar } from 'antd'
import AddVisitButton from '../AddVisitButton'
import { useNavigate } from 'react-router-dom'


function CalendarsCalendarPage(props) {

    const { cellRender, onSelect, defaultValue } = props

    const navigate = useNavigate();

    const onClickNewPatientButton = () => {
    //   clearPatient();
      navigate("/person_info");
    };

    return (
        <>

            <Stack direction='row' spacing={4} align='center'>
                <Button size='sm' colorScheme='blue' onClick={onClickNewPatientButton}>New Patient</Button>
                <AddVisitButton />
            </Stack>

            <Box py='2' w='300px'>
                <Calendar
                    fullscreen={false}
                    cellRender={cellRender}
                    onSelect={onSelect}
                    defaultValue={defaultValue}
                />
            </Box>

        </>
    )

}

export default React.memo(CalendarsCalendarPage)