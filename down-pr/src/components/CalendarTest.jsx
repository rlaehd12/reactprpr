import React from "react";
import Calendar from "react-calendar";

import 'react-calendar/dist/Calendar.css';


export default function CalendarTest() {
  function Myclick(v) {
    console.log(v);
  }

  // function tileDisabled({ date, view }) {
  //   // Add class to tiles in month view only
  //   if (view === 'month') {
  //     // 현재 날짜와 같은 달력만 활성화
  //     return curr.getMonth() === date.getMonth() ?  false :  true
  //   }
  // }

  return (
    <>
      <div>CalendarTest</div>
        <Calendar 
        onClickDay={Myclick}
        showNeighboringMonth
        />
    </>
  );
}
