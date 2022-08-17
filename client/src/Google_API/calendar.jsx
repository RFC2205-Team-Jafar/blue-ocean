import React, { useState, createContext, useEffect, useRef } from 'react';
import styled from 'styled-components';

const EmbedCalendar = () => {
  const ref = useRef()
  const [showCalendar, setShowCalendar] = useState(false);

  // Listens for all clicks and closes calendar when click is heard outside
  useEffect(() => {
    const outSideClick = (e) => {
      if (showCalendar && ref.current && !ref.current.contains(e.target)) {
        setShowCalendar(false);
      }
    }
    document.addEventListener("mousedown", outSideClick)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", outSideClick)
    }
  }, [showCalendar])



  let email = ''; //TODO Replace with email from DB and also ensure that firebase gives auth to read
  let titleColor = '6362a3';
  return (
    // TODO Create ternary to display calendar with button click and go away when clicked off like modal
    <div className="calendarWrapper" ref={ref}>
        <Button_Calendar onClick={() => setShowCalendar(oldState => !oldState)}>Calendar</Button_Calendar>
        {showCalendar === true ?
        <CalendarDiv>
          <iframe src={`https://calendar.google.com/calendar/embed?src=${encodeURI(email)}&mode=WEEK&showPrint=0&showCalendars=0&showTitle=0&bgcolor=%23${titleColor}`} style={{ border: "solid 1px #777", width: "800px", height: "400px", frameBorder: "0px", scrolling: "yes", borderRadius: "5px", boxShadow: "2px 2px 10px black" }}></iframe>
        </CalendarDiv>
          : null}
    </div>
  )
}

export default EmbedCalendar;

const Button_Calendar = styled.button`
  position: fixed;
  bottom: 5px;
  right: 30px;
`;

const CalendarDiv = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
`;