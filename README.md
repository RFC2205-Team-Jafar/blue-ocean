
<div align="left">
<img src="https://img.shields.io/github/package-json/dependency-version/RFC2205-Team-Jafar/blue-ocean/react" />
<!-- <img src="https://img.shields.io/github/package-json/dependency-version/RFC2205-Team-Jafar/blue-ocean/webpack" />
<img src="https://img.shields.io/github/package-json/dependency-version/RFC2205-Team-Jafar/blue-ocean/axios"/>
<img src="https://img.shields.io/github/package-json/dependency-version/RFC2205-Team-Jafar/blue-ocean/nodemon"/>
<img src="https://img.shields.io/github/package-json/dependency-version/RFC2205-Team-Jafar/blue-ocean/dev/jest"/> -->
</div>

<br/>

# blue-ocean

>Our team was recruited to create a job board hosting service targeted at job seekers who are just entering the workforce, making a career change, or looking to find a second job

---

## Table of Contents

1. [Styling](#pencil2-styling)
1. [Git Workflow](#computer-how-can-i-contribute)
1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Development](#development)


---
## :pencil2: Styling

> **Note:** This repo requires that you use the styling outlined in the following guide: [AirBnb Style Guide](https://github.com/airbnb/javascript)
---

## :computer: How can I contribute?

#### Start with the main branch
All feature branches are created off the latest code state of a project. This guide assumes this is maintained and updated in the `main` branch.

```jsx
git checkout main
git fetch origin
git reset --hard origin/main
```
This switches the repo to the `main` branch, pulls the latest commits and resets the repo's local copy of `main` to match the latest version.

#### Create a new-branch
Use a separate branch for each feature or issue you work on. After creating a branch, check it out locally so that any changes you make will be on that branch.

```jsx
git checkout -b new-feature
```

This checks out a branch called new-feature based on `main`, and the `-b` flag tells Git to create the branch if it doesn’t already exist.

#### Update, add, commit, and push changes
On this branch, edit, stage, and commit changes in the usual fashion, building up the feature with as many commits as necessary. Work on the feature and make commits like you would any time you use Git. When ready, push your commits, updating the feature branch on Bitbucket.

```jsx
git status
git add <some-file>
git commit
```

#### Push feature branch to remote
It’s a good idea to push the feature branch up to the central repository. This serves as a convenient backup, when collaborating with other developers, this would give them access to view commits to the new branch.

```jsx
git push -u origin new-feature
```

#### Code Reviews
All code submitted to this repo will require a code review prior to being merged and final approval authority/merging pull requests will be the responsibility of the branch's code owner. In the event of code being merged without proper approval, the repo will be subject to rollback and the code removed.


Additional workflow information can be found here: [Git Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)

---

## Usage

> Some Usage instructions

---

## Requirements

 - Node `16.14.2`

 ---

## Development

### Installing Dependencies
From within the root directory:

> npm
>```sh
>npm install
>```

<br/>

> yarn
>```sh
> yarn install
>```



# Google API and Location Service in Blue Ocean App

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

## Google Calendar Event Creation

> Google Client ID and API Key will be required to utilize this application. Got to the link below to set up credentials and then add them to the calaned)event.jsx file

https://developers.google.com/workspace/guides/create-credentials


The calendar_event.jsx operation is not dependent on firebase authentication. Users will be prompted to sign into their Google accounts once they click on the Submit button within the interviewInvite modal. Did not have time to implement server side Google implementation which would be the better approach.
