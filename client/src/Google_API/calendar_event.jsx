// Refer to the JavaScript quickstart on how to setup the environment:
// https://developers.google.com/calendar/quickstart/js
// Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
// stored credentials.

import axios from 'axios';
// SET UP GOOGLE ENVIRONMENT
var gapi = window.gapi;
var CLIENT_ID = "Client Key";
var API_KEY = "Api Key";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar";

// SIGNS USER IN EACH TIME -- LETS THEM SELECT CALENDAR
gapi.load('client:auth2', () => {
  console.log('loaded client');
  window.gapi.client
    .init({
      clientId: CLIENT_ID,
      apiKey: API_KEY,
      scope: SCOPES,
      discoveryDocs: DISCOVERY_DOCS,
      plugin_name: 'GreenHorn'
    })
    .then(() => {
      return gapi.client.request({
        'path': 'https://www.googleapis.com/auth/calendar',
        "headers": {'Content-Type': 'application/json'}
      })
    })
  // LOADS CALENDAR DATA
  gapi.client.load('calendar', 'v3', () => console.log('loaded calendar'));
  // gapi.client.init({
  //   apiKey: API_KEY,
  //   clientId: CLIENT_ID,
  //   discoveryDocs: DISCOVERY_DOCS,
  //   scope: SCOPES
  // })
})
const sendInvite = function (data) {
  console.log(data);
  var event = {
    'summary': 'Interview Invitation',
    'location': data.inviteInfo.location,
    'description': data.inviteInfo.description,
    'start': {
      'dateTime': data.inviteInfo.startDate+"T"+data.inviteInfo.startTime+":00-07:00",
      'timeZone': 'America/Los_Angeles'
    },
    'end': {
      'dateTime': data.inviteInfo.endDate+"T"+data.inviteInfo.endTime+":00-07:00",
      'timeZone': 'America/Los_Angeles'
    },
    'attendees': [
      {'email': ''},
      {'email': ''}
    ],
    'reminders': {
      'useDefault': false,
      'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10}
      ]
    },
    "sendUpdates": "all"
  };

  var request = gapi.client.calendar.events.insert({
    'calendarId': 'primary',
    'resource': event,
    "sendNotifications": true,
  });

  request.execute(function(event) {
    console.log('Event created: ' + event.htmlLink);
  });
}
export default sendInvite;