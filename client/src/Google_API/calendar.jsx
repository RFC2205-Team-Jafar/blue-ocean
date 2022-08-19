import React, { useState, useContext, useEffect, useRef } from 'react';
import Button from "@mui/material/Button";
import styled from 'styled-components';
import { AllContext } from "../index.jsx";
import { MdOutlineCalendarToday } from "react-icons/md";

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


  const { email } = useContext(AllContext);
  let titleColor = '6362a3';
  return (
    <div className="calendarWrapper" ref={ref}>
        <Button_Calendar
          variant='contained'
          onClick={() => setShowCalendar(oldState => !oldState)}
          >{<MdOutlineCalendarToday
            style={{
              marginRight: '10px',
              transform: 'scale(1.5)'
            }}
            />} Calendar
        </Button_Calendar>
        {showCalendar === true ?
        <CalendarDiv>
          <iframe src={`https://calendar.google.com/calendar/embed?src=${encodeURI(email)}&mode=WEEK&showPrint=0&showCalendars=0&showTitle=0&bgcolor=%23${titleColor}`} style={{ border: "solid 1px #777", width: "800px", height: "400px", frameBorder: "0px", scrolling: "yes", borderRadius: "5px", boxShadow: "2px 2px 10px black" }}></iframe>
        </CalendarDiv>
          : null}
    </div>
  )
}

export default EmbedCalendar;

const Button_Calendar = styled(Button)({
  position: 'fixed',
  bottom: '5px',
  right: '20px',
});


const CalendarDiv = styled.div`
  position: fixed;
  bottom: 40px;
  right: 30px;
`;