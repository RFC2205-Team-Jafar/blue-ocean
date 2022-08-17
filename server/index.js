require("dotenv").config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');
const app = express();
const routes = require('./routes.js');

// middlewares here
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(compression());

app.use('/', routes);

if (!module.parent) {
  const PORT = 3000;
  app.listen(PORT);
  console.log("Listening on", process.env.PORT || 3000);
}


app.get("/downloadFile", async (req, res) => {
  var resume = "https://jafar-2022.s3.amazonaws.com/Tripp+(8)+.doc"
  var searchWords = "tripp, home, Ready, bites"

  try {
    const results = await parseResume(resume, searchWords)
    console.log('results', results)
    return res.json({ status: "success" });
  } catch (err) {
    console.log(err);
  }

});


function addEvent(event, auth) {
  return new Promise(function(resolve, reject) {
      calendar.events.insert({
          auth: auth,
          calendarId: 'primary',
          resource: {
              'summary': event.eventName,
              'description': event.description,
              'start': {
                  'dateTime': event.startTime,
                  'timeZone': TIME_ZONE,
              },
              'end': {
                  'dateTime': event.endTime,
                  'timeZone': TIME_ZONE,
              },
          },
      }, (err, res) => {
          if (err) {
              console.log('Rejecting because of error');
              reject(err);
          }
          console.log('Request successful');
          resolve(res.data);
      });
  });
}

module.exports.app = app;
