# Maxed Out: a fitness tracker
  ![made-with](https://img.shields.io/badge/Made%20with-CSS-1f425f.svg)
  ![made-with](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)  
  ![made-with](https://img.shields.io/badge/Made%20with-Node.js-1f425f.svg)
  ![made-with](https://img.shields.io/badge/Made%20with-Express.js-1f425f.svg)
  ![made-with](https://img.shields.io/badge/Made%20with-Handlebars.js-1f425f.svg)
  ![made-with](https://img.shields.io/badge/Made%20with-Sequelize-1f425f.svg)
  ![made-with](https://img.shields.io/badge/Made%20with-MySQL-1f425f.svg)
  ![GitHub issues](https://img.shields.io/github/issues/Travis2445/workout-tracker)
  ![GitHub branches](https://badgen.net/github/branches/Travis2445/workout-tracker)
  ![GitHub contributors](https://img.shields.io/github/contributors/Travis2445/workout-tracker)
  ![Github license](http://img.shields.io/badge/license-MIT-blue.svg)


## Description
  A simple and easy to use at home fitness tracker where a user can log, view, edit, and delete their workouts from the comfort of their own home. After a user logs in, they are taken to their personal workout dashboard, where they can see all workouts they have completed and add new ones.
  ##### Link to Deployed Application: https://aqueous-headland-83808.herokuapp.com/

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Credits](#credits)
  * [License](#license)
  * [Questions](#questions)

## Installation
  To use this application, please run and install:
  * npm init
  * npm install
  
  This application uses bcrypt, bulma, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2, and sequelize. All of these should be listed under your dependencies in the package.json.

## Usage
  After cloning this repository to your local device and installing the packages listed above, first create a .env file in the root of the folder and add this code to the file:
  * DB_NAME='workout_tracker_db'
  * DB_USER='< your SQL user >'
  * DB_PW='< your SQL password >'
  
  Then, run the following commands in the root of your project: 
  * mysql -u root -p (enter password when prompted)
  * source db/schema.sql
  * quit
  * npm start (run the application on your localhost:3001)
 
  There are seed files located in this project. If you would like to use the seed files, simply type 'npm run seed' in the command line before starting the application. 

  ### Screenshot of Deployed Application
  * Homepage
  <img width="1379" alt="Screen Shot 2022-02-06 at 9 27 51 PM" src="https://user-images.githubusercontent.com/91511805/152720754-03e75d7c-ee97-497a-a005-cfd2b80693c3.png">
  
  * After logging in, users view their personal dashboard
  <img width="1625" alt="Screen Shot 2022-02-06 at 9 38 23 PM" src="https://user-images.githubusercontent.com/91511805/152720820-cb78d0ac-a2dd-4046-a4e8-81f5a5884baa.png">
  
## Contributing
  There are no current guidelines for contribution.

## Tests
  No testing is currently required for this application.

## Credits
  This project was completed by a team of 4:
  * Travis - https://github.com/Travis2445
  * Bo Kok - https://github.com/BoKok
  * Jessica Hille - https://github.com/jessicalhille
  * Cameron Quicksall - https://github.com/cameronquicksall

## License
  This project is licensed under the MIT license.

## Questions
  If you have any questions about this project, please contact Jessica Hille directly at jessicalhille@gmail.com.
  You can view more projects created by the members of this team by checking out their GitHub pages, linked above.
