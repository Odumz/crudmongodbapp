<!-- GETTING STARTED -->
## Getting Started

This is an example of a simple crud application node js, express and mongodb

### Task Outline

Create a simple express application that:
1. Connects to a database
2. Creates the payload: 
{ message: String, data: Object }
This means you are to return an object containing a message that tells the client if the request is successful or not, and data object containing your result.
If there's an error in the request, the response should return the error message instead.
3. Get's the data created
4. Updates the data created
5. Deletes the data created

The data you are required to create should contain name, email and country

Very important:

You are required to upload your application to github and host it on heroku.
You are also required to create a simple documentation of your routes in your github readme file
You are to submit your your github link with the hosted link in the readme file too
 

Hint:

Test your routes with postman. Ensure they work
Deploying Node.js Apps on Heroku | Heroku Dev Center

### Installation and Usage

1. Clone the repo
   ```sh
   git clone https://github.com/Odumz/crudmongodbapp.git
   ```
   OR
   ```sh
   git pull origin main https://github.com/Odumz/crudmongodbapp.git
   ```
2. Install NPM packages
   ```sh
   npm install || npm i
   ```
3. Once in the root folder, run
   ```sh
   npm run start
   ```

### Routes and Usage

The postman collection can be imported at https://www.getpostman.com/collections/19425c4728c712fe1857


## Test Routes

 {URL}:5002:
  get:
    summary: Test route to check connection
    responses:
      status: '200'
      message: 'Welcome to my crud application with mongodb.'

 {URL}:5002/api/v1:
  get:
    summary: Test route to check connection
    responses:
      status: '200'
      message: 'Welcome to the my crud application with mongo db. This is the profile service'

## Data Routes

 {URL}:5002/api/v1/profiles:
  get:
    summary: Route for getting all records
    responses:
      status: '200'
      message: {
         message: {String: 'All profiles successfully fetched'},
         profile: {Object: {_id, name, email, country}}
      }

 {URL}:5002/api/v1/profile/:id:
  get:
    summary: Route for getting a record by id
    responses:
      status: '200'
      message: {
         message: {String: 'Profile successfully fetched'},
         profile: {Object: {_id, name, email, country}}
      }

 {URL}:5002/api/v1/create:
  get:
    summary: Route for creating new records
    responses:
      status: '200'
      message: {
         message: {String: 'Profile successfully created'},
         profile: {Object: {_id, name, email, country}}
      }

 {URL}:5002/api/v1/edit/:id:
  get:
    summary: Route for editing a record
    responses:
      status: '200'
      message: {
         message: {String: 'Profile updated successfully'},
         profile: {Object: {_id, name, email, country}}
      }

 {URL}:5002/api/v1/delete/:id::
  get:
    summary: Route for getting all records
    responses:
      status: '200'
      message: {
         message: {String: 'Profile deleted successfully'},
         profile: {String: 'item no longer exists'}
      }
