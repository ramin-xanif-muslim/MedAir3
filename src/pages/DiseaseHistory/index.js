import React, { memo } from 'react'
import DiseaseHistoryFormBloke from './modules/components/DiseaseHistoryFormBloke'
import ProfilePatientForm from '../../components/ProfilePatientForm'
import BlockForm from './modules/components/BlockForm'
import BlockCanvas from './modules/components/BlockCanvas'
import { Box } from '@chakra-ui/react'
import DiseaseHistoryTable from './modules/components/DiseaseHistoryTable'

function DiseaseHistory() {
    return (
        <>
            <ProfilePatientForm />

            <Box p='2' my='2' boxShadow='xl' bg='pink.50' borderRadius='15px'>

                <DiseaseHistoryFormBloke />

            </Box>

            <Box p='2' my='2' boxShadow='xl' bg='pink.50' borderRadius='15px'>

                <DiseaseHistoryTable />

            </Box>

            <Box p='2' my='2' boxShadow='xl' bg='pink.50' borderRadius='15px'>

                <BlockForm />

            </Box>

            <Box p='2' my='2' boxShadow='xl' bg='pink.50' borderRadius='15px'>

                <BlockCanvas />

            </Box>
        </>
    )
}

export default memo(DiseaseHistory)