# GetInvolved-CalPoly
CSC 308 Team D Project 

A public forum/place where anyone can see the activities going on at Cal Poly. 
  This includes clubs, sporting events, local events, new buisnesses, and more!

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



