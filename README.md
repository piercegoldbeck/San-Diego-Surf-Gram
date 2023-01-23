# San-Diego-Surf-Gram 🌊 🏄
A website for surfers and aspiring to be surfers in San Diego. This app will allow you to find the best places to surf in San diego and chat with others in the commmunity just by signing up and creating an account. Users will be able to post their favorite places to surf and chat with other members in the community allowing them to gain the advantage in their Surfing journey. Ride on!

## Technologies Used
-Mongoose
-Express
-Node JS
-React Js
-JWT-Simple
-HTML
-Material UI, CSS

## Application Features
- Home page conditionally redering the SignUp/Login pages for the app and the Post/Chat components of the app upon login or signup completion.
- error page 404 with return navigation functionality when a user goes to a route that does not exist
- Sign up and login pages for new and current users
- Full CRUD throughout the application, posts can be created and deleted, chats can be created and edited
-Ability to delete a post and update a chat depending on which user is logged in. In other words, the delete/edit funcitonality will only be present if you are the user that created the chat or post.

## Approach Taken towards MVP and Completion
During the beggining of the project, it was very difficult to understand all the parts that were moving throughout the application. At first, I wanted everything to be rendered on different pages of the application. Later on, it made more sense to create an app which everything could be rendered on one page after signup and login functionality had been completed. This will allow the user to have a better understanding of how the application works and how it will benefit them by using it. As the project continued, I felt that users should have the ability to edit their chats and delete any of the posts they have made if they deem necessary. The idea of this application is that everyone is respectful of one another and everyone can benefit from the information that is posted.

## Deployed Application through Heroku
"https://san-diego-surfgram.herokuapp.com/"

## User Stories:
- As an aspiring surfer, I use this website to gain an understanding of where I should surf and what places are best fit for me in San Diego. This site has also allowed me to connect to others that love the same sport that I do. 
- As a normal everyday surfer, I use this site to find new places to surf that I have never heard of since I do not live in San Diego. 
- As a Surfing teacher, I use San Diego SurfGram to give my students some insight on the best places to go and learn how to surf in San Diego.

### Route Page
this is the basics behind how my routes/controllers were made

![image](https://user-images.githubusercontent.com/115511495/204766997-a0d17ad7-e3bc-4779-ba62-da2cf462bed8.png)

### Wireframe:
![project 4 proposal](https://media.git.generalassemb.ly/user/45877/files/93403b78-383b-428d-914d-9cc0b2d014ae)

### Completed Application:
![Screen Shot 2023-01-22 at 10 45 28 PM](https://user-images.githubusercontent.com/115511495/213980608-ecd78dbd-2082-42b8-ba4e-8895f8ad9887.jpeg)

### Instalation Instructions:
In order to successfully clone and run the applicaiton in your own environment follow these steps and run them inside of your terminal:

Step 1: npm i mongoose express method-override jwt-simple

Step 2: npm i dotenv axios cors

Step 3: npm i react-router-dom

Step 4: npm install @mui/material @emotion/react @emotion/styled

Step 5: npm install @fontsource/roboto @mui/material @mui/icons-material

This will allow you to have full acess and understanding of the application. Cheers!
