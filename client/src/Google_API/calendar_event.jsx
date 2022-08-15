// Refer to the JavaScript quickstart on how to setup the environment:
// https://developers.google.com/calendar/quickstart/js
// Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
// stored credentials.
const sendInvite = function (data) {
  // let gapi = window.gapi
  // let CLIENT_ID = process.env.GOOGLE_API_TOKEN
  // let API_KEY = "PASTE YOUR API KEY HERE"
  // let DISCOVERY_DOCS=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  // let SCOPES = "https://www.googleapis.com/auth/calendar.events"


  // gapi.load('client:auth2', () => {
  //   gapi.client.init({
  //     apiKey: API_KEY,
  //     clientId: CLIENT_ID,
  //     discoveryDocs: DISCOVERY_DOCS,
  //     scope: SCOPES,
  //   })




  // var resource = {
  //   "summary": data.summary,
  //   "location": data.location,
  //   "start": {
  //     "dateTime": `${data.startDate}T${data.startTime}:00.000-07:00`
  //   },
  //   "end": {
  //     "dateTime": `${data.endDate}T${data.endTime}:00.000-07:00`
  //   }
  // };
  // var request = gapi.client.calendar.events.insert({
  //   'calendarId': 'primary',
  //   'resource': resource
  // });
  // request.execute(function (resp) {
  //   console.log(resp);
  // });
}
export default sendInvite;











