# EXPRESS

### Setup

1. Use and setup the project with `yarn`.
2. Convert the project to Typescript.
3. Initialize tsconfig.
4. Create .gitignore file to ignore the node_modules

## Problem Description:

Create A basic Express application, that makes a CRUD operation (create, read, update, delete) into a file database.json, document and publish your endpoints using postman.
In this project, you’ll build a basic CRUD (Create, Read, Update, Delete) CRM (Customer Relationship Management) application. A CRM lets you store information about customers to help you track the status of every customer relationship. This can help businesses keep track of their clients and ultimately increase sales. The application will be able to store and edit customer details, as well as keep notes about them.

## Requirements:

- You can add a new profile for each customer.
- You can browse through customer profiles.
- You can store relevant information on each profile, such as contact information, and any information - - You might need.
- You can edit a profile.
- You can delete a profile.

## How will I complete this project?

- Your aplication should be able to perform.
  - `GET` Request which returns all the data in your database.json data
  - `POST` Request which adds data to your database.json file (Note: If there is no database.json on post, create one dynamically).
  - `PUT` Request which updates fields of a particular data using the id in database.json
  - `DELETE` Request which removes a particular data from your database.json using the id
- Host your application on Heroku.
- Data format example:

```
[

 {
   fullname: 'john doe',
   email: 'john@example.com', // no duplicates allowed.
   gender:'m',
   phone:'+2347085647535',
   address:'1, rantech stop, ',
   notes:'This Customer is owing 10k' //optional, it can be left empty
 }

]
```

## FRONTEND

- Page to display all customers
- Page to display each customer details
- Implement add, edit and delete functions ( User can add,edit and delete customers from the platform)

## Test coverage

- Make sure you write test to cover your application using supertest

### Test

- Test for a GET request
- Test for a POST request
- Test for a PUT request
- Test for a DELETE request
- Test to return proper HTTP status codes
