# Google API and Location Service in Blue Ocean App

>In order to utilize the Google "Geocoding API" you must do the following:
1. [Create New Project At Google Cloud](https://console.cloud.google.com/)
1. Create an API Key
1. Add API Key to .env file with name of token as "GOOGLE_API_TOKEN"
1. Have to add billing to attached Google account
1. Enable "Geocoding API"
---

>useLocation function utilizes Reacts built in Navigator function and does require any additional libraries.


***
Note: I have set up the useLocation.jsx file to format the lat/long returns to the same shape that we see from the Google API so they can be used interchangeably to get user location.

    geos : {
      lat: /* User Latitude xx.xxxx */,
      lng: /* User Longitute xx.xxxx */
    };