import React, { memo } from 'react'
import { Box } from '@chakra-ui/react'
import VisitsTable from './modules/components/VisitsTable';
import VisitsFormBloke from './modules/components/VisitsFormBloke';
import ProfilePatientForm from '../../components/ProfilePatientForm';

function Visits() {

    return (
        <>
            <ProfilePatientForm />

            <Box p='2' my='2' boxShadow='xl' bg='pink.50' borderRadius='15px'>

                <VisitsFormBloke />

            </Box>

            <Box p='2' my='2' boxShadow='xl' bg='pink.50' borderRadius='15px'>

                <VisitsTable />

            </Box>
        </>
    )
}

export default memo(Visits)