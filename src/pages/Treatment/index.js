import { Box } from '@chakra-ui/react'
import React, { memo } from 'react'
import ProfilePatientForm from '../../components/ProfilePatientForm'
import TreatmentFormBloke from './modules/components/TreatmentFormBloke'
import TreatmentTableFormBloke from './modules/components/TreatmentTableFormBloke'
import TreatmentTable from './modules/components/TreatmentTable'
import TreatmentMedicationsTable from './modules/components/TreatmentMedicationsTable'

function Treatment() {
  return (
    <>
      <ProfilePatientForm />

      <Box p='2' my='2' boxShadow='xl' bg='pink.50' borderRadius='15px'>

        <TreatmentFormBloke />

      </Box>

      <Box p='2' my='2' boxShadow='xl' bg='pink.50' borderRadius='15px'>

        <TreatmentTableFormBloke />

      </Box>

      <Box p='2' my='2' boxShadow='xl' bg='pink.50' borderRadius='15px'>

        <TreatmentTable />

      </Box>

      <Box p='2' my='2' boxShadow='xl' bg='pink.50' borderRadius='15px'>

        <TreatmentMedicationsTable />

      </Box>

    </>
  )
}

export default memo(Treatment)