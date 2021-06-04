# GetInvolved-CalPoly
CSC 308 Team D Project 

Our goal is to provide a one stop shop for Cal Poly students and other SLO community members to connect to their community. This involves a homepage consisting of displaying the most recent events/announcements (sorting is still in the works), a calendar to see events in a Calendar format (still connecting to backend, but should see calendar shell). There is a forum page that displays the posts and will provide an opportunity to see and create comments on events and announcements. Via the Post bubble, users can create and post an announcement/event to share with the community. We have login functionality, but we are working on the UI of it.


Figma UI Prototype
https://www.figma.com/proto/pPqLzsmCB5yZfrUgGJlonF/GetInvolved-Cal-Poly?scaling=min-zoom&node-id=2%3A4

Style Checkers and Linters:

For Python in VS Code: pylint
https://code.visualstudio.com/docs/python/linting

1) $pip3 install pylint (macOS/Linux)
    $pip install pylint (Windows)

2) Open Command Pallete and select Python: Run Linting

Now in your Python files, you should see any problems in the Problems Panel located near the terminal. 
Note: As of 04/16 we are sticking with the basic settings and plan to change once we understand preferences better 

For JavaScript in VS Code: ESLint
https://dev.to/devdammak/setting-up-eslint-in-your-javascript-project-with-vs-code-2amf

1) Install ESlint extension on vs code editor (see image in link for details)

2) npm install eslint -g //this should be in myapp
  *For some reason McKenna needed to run sudo chown -R $USER /usr/local/lib/node_modules to get write access to node_modules
  
3) eslint --init //this should be in one directory above myapp
    How would you like to use ESLint?
      To check syntax, find problems, and enforce code style
    What type of modules does your project use?
      Javascript module (import/export) 
    Which framework does your project use?
      React
    Where does your code run?
      Browser
    How would you like to define a style for your project?
      Use a popular style guide
        Google
    What format do you want your config file to be in?
      Javascript
      
   //Now you should see lots of formatting errors to fix!


To acces the app, go to the following link:

https://getinvolvedcalpoly.herokuapp.com/

By clicking the link, you will be sent to a page where you can log in if you already have an account, sign up to create an account, or log in as a guest. Once you are signed in, you will be redirected to the homepage that shows upcoming events/ most recent announcements. From there it is up to you to explore and do the activites mentioned in the description, such as creating a post, viewing the calender for upcoming events, or looking through the forum for activites that interest you!

CI for the project:
https://travis-ci.com/github/KennaReed/GetInvolved-CalPoly
https://travis-ci.com/KennaReed/GetInvolved-CalPoly.svg?branch=main

