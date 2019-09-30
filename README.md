* ***What is this?***

  * ***One day*** i ask myself a question _Dude you dont have any app that will show your all **programing skill**_. Then i ask my self why? _I dont have idea what i will be **building**_. Soo I think all day and all night and I figure _I will make fullstack webaplication **smilar to twitter**_. So here is it this repo will demonstrate all my knowledge that I learn since i start my programing journey.

* ### ***What is exactly this repo?***

  * This repo contain all code ( no key_api or dotenv :) ) that i will use in this **fullstack app**. This code is of course free to use and you can left the comment or add a issue if I can something better or If there is problem with some stuff.
  
* ### ***When this project will be finish?***
  * Really i don't know 
  
* ### ***How much often will you be update your repo?***
  * Probably every day

* ### ***How we can check your progress?***
  * I will be streaming every day at week on different hours on [twitch.tv/kamio90](https://www.twitch.tv/kamio90)

# TECHNOLOGY STACK:
#### _This is my stack technology but i will check things that i will use in this project_
* Database: 
  * [x] MongoDB
  * [ ] MariaDB
  * [ ] PostSQL
* Client Side:
  * [x] React
    * [x] TypeScript
    * [ ] Javascript
  * [ ] vanilla html5, css and javascript
  * [ ] Vue:
    * [ ] Javacscipt
    * [ ] TypeScript
* Server Side:
  * [x] NodeJS:
    * [x] Express
      * [x] TypeScript
      * [ ] Javascript
    * [ ] Koa
      * [ ] Javascript
    * [ ] Feathers
      * [ ] TypeScript
      * [ ] Javascript
* Package Menager:
  * [x] Yarn
  * [ ] npm
* Operating System:
  * [ ] Ubuntu
  * [x] Windows
  * [ ] MacOs
* Programming languages:
  * [x] Javascript
    * [x] NodeJS
    * [ ] ReactNative
    * [x] Typescript
  * [ ] C#
    * [ ] .Net
    * [ ] Xamarin

# SETTINGS
#### _Some settings to save_
* Client
  * port: 3000

# TODO LIST
#### _Let's exacly write point by point what I will be building_

* Day 1:
  * Setup folders of aplication:
    * [x] add gitignore:
      * [x] ```node_modules .env```
    * [x] Create Client folder:
      * [x] ```npm yarn global add create-react-app ```
      * [x] ```npm create-react-app client --typescript ```
    * [x] Create Server folder:
      * [x] ```npm yarn add express body-parser cookie-parser mongoose ```
      * [x] ```npm yarn add @types/express @types/body-parser @types/cookie-parser @types/mongoose -D ```
  * Setup of backend:
    * [x] Set typescript:
        * [x] ```npm yarn add typescript ts-node ```
        * [x] ```npm yarn add @types/ts-node -D ```
        * [x] Create of tslint.json
        * [x] Setup tslint config
    * [x] Set dev env:
        * [x] ```npm yarn add nodemon -D ```
        * [x] Create yarn run scripts ``` dev build ```
    * [x] Set a simple server:
        * [x]  Create ``` server.js ```
        * [x] Create ``` app.js ```
* Day 2:
    * Setup of backend:
        * [x] Create Exceptions
          * [x] Http
          * [x] WrongCredentials
          * [x] UserWithThatEmailAlreadyExists
        * [x] Database connection:
            * [x] local database mongodb
            * [x] add method to connect to database on class App
            * [x] Get info about success database connection
        * [x] Create Interfaces:
          * [x] TokenData
          * [x] User
          * [x] Controller
        * [x] Create Dto: 
          * [x] install ```npm yarn add class-validator ```
          * [x] install ```npm yarn add @types/class-validator ```
          * [x] LoginDto
          * [x] CreateUserDto
        * [x] Create Middleware: 
          * [x] ```npm yarn add body-parser cookie-parser class-transformer```
          * [x] ```npm yarn add @types/body-parser @types/cookie-parser @types/class-transformer -D``` 
          * [x] validationMiddleware
          * [x] body-parser
          * [x] cookie-parser
          * [x] errorMiddleware
        * [x] Create Model:
          * [x] userModel
        * [x] Create Authentication
          * [x] ```npm yarn add jsonwebtoken bcrypt```
          * [x] ```npm yarn add @types/jsonwebtoken @types/bcrypt -D``` 
          * [x] Service
          * [x] Controller
            * [x] register user
            * [x] log in
            * [x] log out

* Day 3:
  * Setup of backend:
    * [x] Create Exceptions
      * [x] postNotFound
      * [x] authTokenMissing
      * [x] wrongAuthToken 
    * [x] Create Interfaces:
      * [x] requsetwithUser
      * [x] post
    * [x] Create Dto: 
      * [x] post
    * [x] Create Middleware: 
      * [x] authMiddleware
    * [x] Create Controller
      * [x] post
    * [x] Create Model:
      * [x] postModel
  * Setup of frontend:
    * [x] File structure
    * [x] Home page component
      * [x] Add form 
      * [x] Simple style
          * [x] Get data from form
          * [ ] Try to validate data from form (by your self || package)
          * [ ] Make object to send it to backend

***More todo soon***

