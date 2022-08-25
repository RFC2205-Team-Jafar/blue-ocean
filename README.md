
<!-- <div style="display: flex; flex-direction: column; justify-content: center;"> -->

### GreenHorn

<div align="left">
<img src="https://img.shields.io/github/package-json/dependency-version/TitanInSpirit/Project_Atelier/react" />
<img src="https://img.shields.io/github/package-json/dependency-version/TitanInSpirit/Project_Atelier/webpack" />
<img src="https://img.shields.io/github/package-json/dependency-version/TitanInSpirit/Project_Atelier/axios"/> 
<img src="https://img.shields.io/badge/react_router-%56.3.0-blue">                                                   
<img src="https://img.shields.io/github/package-json/dependency-version/TitanInSpirit/Project_Atelier/nodemon"/> 
<img src="https://img.shields.io/badge/postgres-%5E12.12-blue">                                                           
<img src="https://img.shields.io/badge/firebase-%5E9.9.2-blue">                                                             
<img src="https://img.shields.io/badge/multer-%5E1.4.5-blue">                                          
<img src="https://img.shields.io/badge/googleapis-%5E105.0.0-blue">
</div>
<br></br>
<div align="center" style="background-color:#c5f015">
  <img src="client/src/images/greenhorn.png" width=600px>
</div>

### About:
Our team was recruited to create a job board hosting service targeted at job seekers who are just entering the workforce, making a career change, or looking to find a second job.

<hr style="background-color: #5c5c5c;height: 2.0px;"/>

<p align="center">
<a href="#features" style="color: white">Features</a> |
<a href="#user-authentication" style="color: white">User Authentication</a> |
<a href="#google-services" style="color: white">Google Services</a> |
<a href="#job-posting" style="color: white">Job Posting</a> |
<a href="#resume-parser" style="color: white">Resume Parser</a> |
<a href="#profile" style="color: white">Profile</a> |
<a href="#-installation-" style="color: white">Installation</a> |
<a href="#-contributors-" style="color: white">Contributors</a>
</p>

<hr style="background-color: #5c5c5c;height: 2.0px;"/>


### Features

This section provides a broad overview of just a few of the exciting functionalities our team implemented for the GreenHorn web platform.

* User authentication:

> New end-users are required to create a user account with log-in details. Upon opening the app, the user will be prompted to provide their log-in details if not already logged in, and/or create a new user account. Based on their account type on file, user will be prompt to either the job-seeker view or recruiter view.

* Google services
> The user will be prompt to enable their location service so that the web app will filter job postings from the pool based on default filters and their current location while using the app. In addition, google calender is incoporated into both the jb seeker and recruiter view, allowing both users to view their calender and keep informed of upcoming events. In the recruiter's view, for a specific job posting, if there is candidate that the recruiter wants to give an interview, recruiter has access to schedule an event which will send a calender invite to the job seeker's email on file and also add the event to the recruiter's account.   

* Feed/Job Posting
> Depending on user's account type, they will either be supplied with job postings based on default filters tailered to the job seeker or current active job postings under recruiter's account. On the recruiter's view, recruiter has the option of posting a new job through a modal, allowing a recruiter to provide all kind's of job related info.  

* Resume upload & Resume Parser
> When a user signs up as a jobseeker, they are prompted to upload a resume, which will be stored to Amazon S3 service. While navigating the job feeds, a jobseeker has the option to upload a cover letter and apply for a job. When jobseeker sends an application, their resume is being parsed on the backend and searched for keywords requested by the recruiter who posted the job. 

* Profile
> Both jobseeker and recruiter have access to their profile page, which is prepopulated with the user's profile info and allows the user to update their first name, last name, location, resume, company, etc.


<!-- ### User Authentication -->

### Using Google Services 

##### Google API and Location Service

>In order to utilize the Google "Geocoding API" you must do the following:
1. [Create New Project At Google Cloud](https://console.cloud.google.com/)
1. Create an API Key
1. Have to add billing to attached Google account
1. Enable "Geocoding API"
---

>useLocation function utilizes Reacts built in Navigator function and does require any additional libraries.


***
Note: I have set up the userLocation.jsx file to format the lat/long returns to the same shape that we see from the Google API so they can be used interchangeably to get user location.

    geos : {
      lat: /* User Latitude xx.xxxx */,
      lng: /* User Longitute xx.xxxx */
    };

***

##### Google Calendar Event Creation

> Google Client ID and API Key will be required to utilize this application. Got to the link below to set up credentials and then add them to the calaned)event.jsx file

https://developers.google.com/workspace/guides/create-credentials


The calendar_event.jsx operation is not dependent on firebase authentication. Users will be prompted to sign into their Google accounts once they click on the Submit button within the interviewInvite modal. Did not have time to implement server side Google implementation which would be the better approach.

<!-- ### Job Posting -->


<!-- ### Resume Parser -->



<h2 style="color:#73E0FE"> Installation: </h2>

Getting your own copy of Project GreenHorn is easy!

- Fork and clone this repo to your local machine
- Run npm install to install dependencies
- Read about the following scripts to understand their functionality
- Enjoy!

### Scripts

The following scripts can be found in package.json

<hr style="background-color: #5c5c5c;height: 2.0px;"/>

`npm run start`

<i> Bundles your webpack in development mode </i>

`npm run build`

<i> Bundles your webpack in production mode </i>

`npm run server`

<i> Launches nodemon to watch the server path and serve static files </i>



<hr style="background-color: #5c5c5c;height: 2.0px;"/>

<h2 style="color:#73E0FE"> Contributors </h2>

<table >
    <td align="center">
        <a href="https://github.com/xuxiaqing2011" style="color: white; text-decoration: none;">
            <img src="https://avatars.githubusercontent.com/u/98438591?v=4" width="100px;" alt=""/>
            <br />
            <sub>
                <b><span style="color: white"> Xiaqing X. </span> | <span style="color: #229AEF"> xuxiaqing2011</span></b>
            </sub>
        </a>
        <br /><br>
    </td>
    <td align="center">
           <a href="https://github.com/sbirvin1s" style="color: white; text-decoration: none;">
               <img src="https://avatars.githubusercontent.com/u/101069215?v=4" width="100px;" alt=""/>
               <br />
               <sub>
                   <b><span style="color: white"> Sam I.</span> | <span style="color: #229AEF"> sbirvin1s </span></b>
               </sub>
           </a>
           <br /><br>
    </td>
     <td align="center">
           <a href="https://github.com/kemp3673" style="color: white; text-decoration: none;">
               <img src="https://avatars.githubusercontent.com/u/102747919?v=4" width="100px;" alt=""/>
               <br />
               <sub>
                   <b><span style="color: white"> Nicholas K.</span> | <span style="color: #229AEF"> kemp3673 </span></b>
               </sub>
           </a>
           <br /><br>
    </td>
     <td align="center">
           <a href="https://github.com/jeankayy" style="color: white; text-decoration: none;">
               <img src="https://avatars.githubusercontent.com/u/100891819?v=4" width="100px;" alt=""/>
               <br />
               <sub>
                   <b><span style="color: white"> Jean K. </span> | <span style="color: #229AEF">jeankayy </span></b>
               </sub>
           </a>
           <br /><br>
    </td>
     <td align="center">
           <a href="https://github.com/andronicus217" style="color: white; text-decoration: none;">
               <img src="https://avatars.githubusercontent.com/u/103600647?v=4" width="100px;" alt=""/>
               <br />
               <sub>
                   <b><span style="color: white"> Andrew W.</span> | <span style="color: #229AEF"> andronicus217 </span></b>
               </sub>
           </a>
           <br /><br>
    </td>
     <td align="center">
           <a href="https://github.com/rhosmans" style="color: white; text-decoration: none;">
               <img src="https://avatars.githubusercontent.com/u/4683213?v=4" width="100px;" alt=""/>
               <br />
               <sub>
                   <b><span style="color: white"> Reave H. </span> | <span style="color: #229AEF"> rhosmans </span></b>
               </sub>
           </a>
           <br /><br>
    </td>
      <td align="center">
           <a href="https://github.com/shnguyen8" style="color: white; text-decoration: none;">
               <img src="https://avatars.githubusercontent.com/u/93746840?v=4" width="100px;" alt=""/>
               <br />
               <sub>
                   <b><span style="color: white"> Shirley N. </span> | <span style="color: #229AEF">shnguyen8 </span></b>
               </sub>
           </a>
           <br /><br>
    </td>
<table>
</div>






