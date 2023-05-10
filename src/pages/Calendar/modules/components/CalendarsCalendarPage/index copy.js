import React, { useMemo, useState } from 'react'
import CalendarUI from './CalendarUI'
import moment from 'moment';
import sendRequest from '../../../../../modules/api/sendRequest';

const visit = (value, dataSource) => {
  dataSource.findIndex(i => String(value.date()) === String(moment(i.visitDate).format("DD")))
};

const getListData = (value, dataSource) => {
  let listData = [];
  dataSource.forEach((i) => {
    let date = i.visitDate.slice(0, 10);
    if (date === moment(value).format("YYYY-MM-DD")) {
      listData.push({
        type: i.status === "approved" ? "success" : "warning",
        content: i.patientName,
        id: i.id,
      });
    }
  });
  return listData;
};

const CustomCell = ({ date, listData }) => {
  const hasData = listData && listData.length > 0;
  const className = hasData ? 'highlight' : '';
  return (
    <div className={className}>
      <span className="date">{date.date()}</span>
    </div>
  );
};

function CalendarsCalendarPage() {

  const [dataSource, setDataSource] = useState([]);
  const [isChangeDataTable, setIsChangeDataTable] = useState(false);


  // const cellRender = (date) => {
  //   const hasData = visit(date, dataSource);
  //   console.log('hasData',hasData);
  //   if (hasData) {
  //     return (
  //       <Box borderTop='1px solid pink' shadow='2xl' />
  //     );
  //   }
  // };

  const cellRender = useMemo(
    (value) => {
      if (dataSource[0]) {
        return (value) => {
          console.log('dataSource', dataSource);
          const listData = getListData(value, dataSource);
          if (listData[0]) {
            return <div style={{ borderTop: "1px solid black" }}></div>;
          }
        };
      }
    },
    [dataSource]
  );

  const fetchVisits = (data) => {
    sendRequest("visits/" + data).then(res => {
      if (res?.data) setDataSource(res.data)
    })
  }

  const onChange = (val) => {
    const data = moment(val._d).format("YYYY-MM-DD 00:00:00");
    fetchVisits(data);
  }

  return (
    <CalendarUI cellRender={cellRender} onChange={onChange} />
  )

}

export default React.memo(CalendarsCalendarPage)