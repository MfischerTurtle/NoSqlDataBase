# NoSqlDataBase

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Link](#link)
* [Usage](#usage) 
* [Built-With](#built-with)
* [Models](#models)
* [EndPoints](#endpoints)
* [Packages](#packages)
* [Questions](#questions)

## Description 
This application is for creating an API for a social media network that can handle large amounts of unstructured data utilizing a NoSQL database. The user has the ability to add, delete, get, and update users, friends of users, thoughts, and reactions on those thoughts.

## Installation
Clone the application from the command line and run 'npm i' to install the necessary dependencies, then run the command "npm start" from the command line. 
## Link
[Video Link](https://drive.google.com/file/d/1qKg_AR1td1NKMKgqHvg502xtQZDmrJvo/view)
## Usage
To run this application, run: npm start to use on a local server 3001 after cloning the repository and installing the necessary dependencies.

### Built With 

 * JavaScript
 * Node JS
 * Nodemon
 * NoSQL - MongoDB
 * Mongoose
 * Express

## Models
- User
- Thought
- Reaction (used as a subdocument in Thought)

## Endpoints
**User**
- Get all users:        `GET /api/users`
- Create a user:        `POST /api/users`
- Get user by ID:       `GET /api/users/:id`
- Update a user:        `PUT /api/users/:id`
- Delete a user:        `DELETE /api/users/:id`
- Add a friend:         `PUT /api/users/:userId/friends/:friendId`
- Delete a friend:      `DELETE /api/users/:userId/friends/:friendId`

**Thought**
- Get all thoughts:     `GET /api/thoughts`
- Create a thought:     `POST /api/thoughts`
- Get thought by ID:    `GET /api/thoughts/:id`
- Update a thought:     `PUT /api/thoughts/:id`
- Delete a thought:     `DELETE /api/thoughts/:id`

**Reaction**
- Add a reaction:       `PUT /api/:thoughtId/reactions/:reactionId`
- Delete a reaction:    `DELETE /api/:thoughtId/reactions/:reactionId`

## Packages
- express
- mongoose

## Questions
If you have questions, email me at [m.rfischer5235@gmail.com](mailto:vlane0593@gmail.com) or reach out on [GitHub](https://github.com/MfischerTurtle).
