import React, { memo } from 'react'
import DeleteTableRow from '../../../../../components/DeleteTableRow'

function DeleteVisitsTableRow({onClick}) {
  return (
    <DeleteTableRow onClick={onClick}/>
  )
}

export default memo(DeleteVisitsTableRow)