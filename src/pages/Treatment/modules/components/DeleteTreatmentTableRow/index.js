import React, { memo } from 'react'
import DeleteTableRow from '../../../../../components/DeleteTableRow'

function DeleteTreatmentTableRow({onClick}) {
  return (
    <DeleteTableRow onClick={onClick}/>
  )
}

export default memo(DeleteTreatmentTableRow)