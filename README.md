Thank you for taking the time to complete this short exercise and for your interest in our team!

It is our hope that this exercise should take no more than 2 or 3 hours, maybe less. We tried to keep the scope very small and appreciate any amount of time and effort, even if the exercise is not completed! We will be happy to discuss your ideas and plans with a partial submission.

Please email a zipped folder of your solution to blitman@egov.com

## PREREQUISITE

(This should take just a couple of minutes to set up - please contact us if there are any issues!)

Before continuing, please make sure that you have NPM installed.

To install and set up the local API, run the following to install json-server:

    npm install json-server

Run the following command to start up the local server:

npx json-server --watch ./example.json --port 3001 --routes routes.json

This will run it on port 3001 so that it won't conflict with running React locally at the same time.
You should see a message describing the endpoints available:

    Resources
    http://localhost:3001/user
    http://localhost:3001/address

There is also a nested route
http://localhost:3001/user/:id/address
Thanks to the routes.json configuration

Requests to these two endpoints will return all the data, but you can also send GET and PUT requests using the user's ID to request and change data for specific users.
For example, http://localhost:3001/user/1 and http://localhost:3001/address/1 will return the user information and address information for user #1.
PUT requests to the same addresses will overwrite the data stored there, so make sure to send the full object - missing fields will be dropped from the database file.

## EXERCISE

The goal of this exercise is to build a small component or set of components, and an example page to demonstrate their use.
The data set represents users (with an ID, first name, and email) and their address.

The example file contains some sample user and address data, but your code should not make assumptions that these few examples represent all the possible cases.
There may be many more records in a given data set, some of which might have empty fields, or no nested address records, for example.

Your application should initially display a list of all users found in the data set.

When clicking on a given user, your application should then display a "user details" page listing all available information for that user.

The general criteria we will use to evaluate submissions are :

- the functional requirements are met
- the page can handle a different data set
- readable and maintainable code, its intent is clear
- usability and user experience. This does not include graphic design elements, but layout & navigation & overall behavior
