import React, { memo } from 'react'
import DeleteTableRow from '../../../../../components/DeleteTableRow'

function DeleteTreatmentMedicationsTableRow({onClick}) {
  return (
    <DeleteTableRow onClick={onClick}/>
  )
}

export default memo(DeleteTreatmentMedicationsTableRow)