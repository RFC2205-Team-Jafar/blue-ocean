/* PRETTIFY THE STUPID THING
https://support.google.com/calendar/thread/23205641/advanced-embed-option-descriptions?hl=en


%237CB342 - Green
%2333B679 - Medium Green
%23C0CA33 - Puke Green
%230B8043 - Christmas Tree
%237986CB - Purple-ish blue
%23B39DDB - violet

*/

const embedCalendar = () => {
  let email = process.env.EMAIL;
  let titleColor = '6362a3';
  return (
    <iframe src={`https://calendar.google.com/calendar/embed?src=${encodeURI(email)}&mode=WEEK&showPrint=0&showCalendars=0&showTitle=0&bgcolor=%23${titleColor}`} style={{position: "fixed", right: "30px", bottom: "10px", border:"solid 1px #777", width:"800px", height:"400px", frameBorder:"0px", scrolling:"yes", borderRadius:"5px", boxShadow: "2px 2px 10px black"}}></iframe>
  )
}

export default embedCalendar;




//      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%237986CB&ctz=America%2FChicago&showNav=1&showDate=0&showPrint=0&showTabs=1&showTz=1&showCalendars=0&showTitle=0&mode=WEEK&title=LinkedOut&src=bmljaG9sYXMua2VtcGtlc0BnbWFpbC5jb20&src=MjFhZjQ0ZnFjZ2Y3cGhkZ2RkdG92OGlsczRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZmFtaWx5MDE0NDc3MDE3NDc2NDc3NTE2NjdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y181YmIybG44NGsyazk1YWJqdmZyYm5pa2Jvc0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB&color=%237CB342&color=%2333B679&color=%23C0CA33&color=%230B8043&color=%23B39DDB" style={{position: "fixed", right: "30px", bottom: "10px", border:"solid 1px #777", width:"800px", height:"400px", frameBorder:"0px", scrolling:"yes", borderRadius:"10px"}}></iframe>