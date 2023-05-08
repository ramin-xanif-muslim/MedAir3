import React, { memo } from 'react'
import { Box } from '@chakra-ui/react'
import AnalysisTable from './modules/components/AnalysisTable';
import AnalysisFormBlok from './modules/components/AnalysisFormBlok';
import ProfilePatientForm from '../../components/ProfilePatientForm';

function Analysis() {

    return (
        <>
            <ProfilePatientForm />

            <Box p='2' my='2' boxShadow='xl' bg='pink.50' borderRadius='15px'>

                <AnalysisFormBlok />

            </Box>

            <Box p='2' my='2' boxShadow='xl' bg='pink.50' borderRadius='15px'>

                <AnalysisTable />

            </Box>
        </>
    )
}

export default memo(Analysis)