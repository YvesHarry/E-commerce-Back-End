# E-commerce-Back-End

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
## Description
The back-end database has been purposed towards e-commerce websites using Express.js API and Sequelize to connect to the MySQL database. The back-end database allows users to create a development database, seed it with test data, and sync Sequelize models to MySQL database. User's have the ability to use GET, POST, PUT, and DELETE routes to display and manipulate data in the users database. Give it a try and see how it helps your company power up to the next level!

## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [User Story](#user-story)
- [Usage Information](#Usage-Information)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage Instruction](#usage-instructions)
- [Installation Process](#Installation-Process)
- [Credits](#Credits)
- [License](#License)
- [Author](#Author)


# Overview

## The Challenge:
This challenge requires the creation of an e-commerce back-end site that meets specific user requirements. These requirements include the ability to connect to a MySQL database using Sequelize, create a development database that is seeded with test data, sync Sequelize models to the MySQL database, and display data from categories, products, and tags in a formatted JSON. The application should also be able to create, update, and delete data in the database.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Usage Instructions
1. Repository: Open documentation run 'npm i' and update '.env'.
2. Create database: use the schema.sql file in the db folder with MySQL shell commands. Use environment variables to store sensitive data like your MySQL username, password, and database name.
3. Run 'npm run seed' to seed the database with test data. Then, run 'npm start' or 'nodemon' to start the server and sync the Sequelize models to the MySQL database.
4. Generate a development database with test data, use the schema and seed commands.
5. Use Insomnia to test http://localhost:3001 with the following route end points API GET, POST, PUT, and DELETE routes for categories, products, and tags, ensuring successful creation, updating, and deletion of data in the database.


## Deployed Application Link:

N/A

## Installation Process
1. Clone the Repository from GitHub 
2. (or) Download Zip Folder from Repository from GitHub
3. Open the cloned (or downloaded) repository in any source code editor.
4. Open the integrated terminal for the document and complete the respective installation guides provided in "Built With" to ensure the cloned documentation will operate.

## Credits

N/A

## License & Copyright ©
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)

  
## Author

Follow me on Github at [YvesHarry](https://github.com/YvesHarry)! 

If you have an additional questions or concerns, feel free to contact me at yhdeslouches@hotmail.com

Thank you!

© 2023 [YvesHarry](https://github.com/YvesHarry). All Rights Reserved.