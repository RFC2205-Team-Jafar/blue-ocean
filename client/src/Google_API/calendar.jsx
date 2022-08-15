import React, { useState, createContext, useEffect, useRef } from 'react';

const EmbedCalendar = () => {
  const ref = useRef()
  const [showCalendar, setShowCalendar] = useState(false);

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



  let email = 'nicholas.kempkes@gmail.com';
  let titleColor = '6362a3';
  return (
    // TODO Create ternary to display calendar with button click and go away when clicked off like modal
    <div className="calendarWrapper" ref={ref}>
      <button onClick={() => setShowCalendar(oldState => !oldState)} style={{ position: "fixed", bottom: "5px", right: "30px" }}>Calendar (Not working)</button>
      {showCalendar === true ?
        <iframe src={`https://calendar.google.com/calendar/embed?src=${encodeURI(email)}&mode=WEEK&showPrint=0&showCalendars=0&showTitle=0&bgcolor=%23${titleColor}`} style={{ position: "fixed", right: "30px", bottom: "30px", border: "solid 1px #777", width: "800px", height: "400px", frameBorder: "0px", scrolling: "yes", borderRadius: "5px", boxShadow: "2px 2px 10px black" }}></iframe>
        : null}
    </div>
  )
}

export default EmbedCalendar;
