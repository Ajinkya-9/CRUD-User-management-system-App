# Crude-User-Management-system-App

This is simple application which is built using Angular and provides below functionalties:

  1. Retrieve the list of users from the server via API
  2. Add a user
  3. Edite a user
  4. Remove users
  
 Setup instructions:

    run npm install
    install bower if it's not installed and then run bower install (For Bootstrap and Font-Awesome)
    start angular app using ng serve -o

This application uses db.json file as FAKE-RST  API server.

# Getting started FAKE REST-API for the project use below steps 

Install JSON Server

    npm install -g json-server

Create a db.json file with some data

      {
    "users": [
        {
            "id": 1,
            "name": "Mark",
            "gender": "Male",
            "contactPreferance": "Email",
            "email": "mark@gmail.com",
            "phone": "9890042117",
            "dateOfBirth": "10/25/1988",
            "department": "IT",
            "isActive": true,
            "photoPath": "assets/images/jhon.jpg"
        },
        {
            "id": 2,
            "name": "Jone",
            "gender": "Male",
            "contactPreferance": "Email",
            "email": "mark@gmail.com",
            "phone": "9845621710",
            "dateOfBirth": "10/25/1988",
            "department": "IT",
            "isActive": true,
            "photoPath": "assets/images/jhon.jpg"
        },
        {
            "id": 3,
            "name": "Rock",
            "gender": "Male",
            "contactPreferance": "Email",
            "email": "mark@gmail.com",
            "phone": "9890042117",
            "dateOfBirth": "10/25/1988",
            "department": "IT",
            "isActive": true,
            "photoPath": "assets/images/jhon.jpg"
        }
    ]
    
    }

Start JSON Server

    json-server --watch db.json

Now if you go to http://localhost:3000/users, you'll get all data



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
