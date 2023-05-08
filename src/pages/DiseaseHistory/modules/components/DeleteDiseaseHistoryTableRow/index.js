import React, { memo } from 'react'
import DeleteTableRow from '../../../../../components/DeleteTableRow'

function DeleteDiseaseHistoryTableRow({onClick}) {
  return (
    <DeleteTableRow onClick={onClick}/>
  )
}

export default memo(DeleteDiseaseHistoryTableRow)