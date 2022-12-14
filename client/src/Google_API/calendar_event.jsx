import React, { useContext } from 'react';

var gapi = window.gapi;
var CLIENT_ID = "Client_ID"; //ANCHOR Add CLIENT ID
var API_KEY = "API_KEY"; //ANCHOR Add API Key
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

const sendInvite = function (data, email, applicantInfo) {
  // SIGNS USER IN EACH TIME -- LETS THEM SELECT CALENDAR
  gapi.load("client:auth2", () => {
    console.log("loaded client");
    window.gapi.client
      .init({
        clientId: "CLIENT_ID",
        apiKey: "TOKEN",
        scope: SCOPES,
        discoveryDocs: DISCOVERY_DOCS,
        plugin_name: "GreenHorn",
      })
      .then(() => {
        return gapi.client.request({
          path: "https://www.googleapis.com/auth/calendar",
          headers: { "Content-Type": "application/json" },
        });
      });
    // LOADS CALENDAR DATA
    gapi.client.load("calendar", "v3", () => console.log("loaded calendar"));
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        var event = {
          summary: "Interview Invitation",
          location: data.inviteInfo.location,
          description: `Salutations ${applicantInfo.first_name} ${applicantInfo.last_name}, we are pleased to extend and invitation for an interview with us at the above date and time. If this time and date does not work, please reach out to use at ${email} to discuss rescheduling. Once again congratulations on being selected to interview for this position. Please see below for additional information:

          ${data.inviteInfo.description}`,
          start: {
            dateTime:
              data.inviteInfo.startDate +
              "T" +
              data.inviteInfo.startTime +
              ":00-05:00",
            timeZone: "America/Chicago",
          },
          end: {
            dateTime:
              data.inviteInfo.endDate +
              "T" +
              data.inviteInfo.endTime +
              ":00-05:00",
            timeZone: "America/Chicago",
          },
          attendees: [
            { email: [email] },
            { email: [applicantInfo.user_email] }
          ],
          reminders: {
            useDefault: false,
            overrides: [
              { method: "email", minutes: 24 * 60 },
              { method: "popup", minutes: 10 },
            ],
          },
          sendUpdates: "all",
        };

        var request = gapi.client.calendar.events.insert({
          calendarId: "primary",
          resource: event,
          sendNotifications: true,
        });

        request.execute(function (event) {
          console.log(event.data);
          console.log("Event created: " + event.htmlLink);
        });
      });
  });
};
export default sendInvite;
