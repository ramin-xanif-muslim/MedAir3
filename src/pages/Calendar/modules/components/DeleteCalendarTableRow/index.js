import React, { memo } from 'react'
import DeleteTableRow from '../../../../../components/DeleteTableRow'

function DeleteCalendarTableRow({onClick}) {
  return (
    <DeleteTableRow onClick={onClick}/>
  )
}

export default memo(DeleteCalendarTableRow)