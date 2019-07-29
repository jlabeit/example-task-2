Welcome to the example task for the full-stack position at IMPARGO. Please read these instructions
carefully. If you have any questions please write me an e-mail at
j.labeit@impargo.de.

# Overview
The [European rest and driving hours](https://www.gov.uk/drivers-hours/eu-rules) enforce that truck drivers take regular breaks. This task is about developing a tool that helps dispatchers plan the driving and rest time of their drivers.
Given a list of orders the driver has to execute, the tool should automatically plan breaks where needed and tell the dispatcher if delays are unavoidable.

# Getting started
Before you start you should have a recent version of `npm` and `node`
installed.
To start the server go into the `server` directory and run
```
  npm install
  node index.js
```
To see whether the server works check <http://localhost:3000> and see if you get a JSON object with a dummy shedule containing two driving period of 4.5 hours and one 45 minutes break.

To build the client go into the directory `client` and run
```
npm install
npm run start
```
Then open the file `client/dist/index.hmtl` in the browser. Make sure that the
server is still running! Now you sould see a visual representation of the dummy shedule.

It should look like this: ![Screenshot](./screenshot.png)