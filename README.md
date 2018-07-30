# Unit testing in frontend Javascript

## Description

This project is a case study that shows how unit testing can be applied for Javascript code that normally runs in a browser.
The tests themselves however are executed in a Node.js environment.

## Prerequisites

Either Node.js or Docker + docker-compose.

## Usage

The project consists of one simple HTML file and several Javascript files. That's why you can just open the HTML in a browser
without a web server to run the application. Alternatively, you can start a built-in web server by running the command:

```docker-compose up```

This will start the application on localhost:8888.

## Architecture

The application is a simple calculator without any real value. The actual value is in the way the application is structured, 
which allows us to write unit tests for the most relevant parts of it.

There are two logical layers: the Presentation and the Business Logic. The Presentation contains everything that is not
unit-testable. This code can only be executed inside of a browser, because it needs the DOM to be present. The files that 
belong to the Presentaion are the following:

- [```index.html```](https://github.com/subugoe/javascript-testing/blob/master/app/index.html)

- [```event-handlers.js```](https://github.com/subugoe/javascript-testing/blob/master/app/scripts/event-handlers.js) module

- [```dom-changer.js```](https://github.com/subugoe/javascript-testing/blob/master/app/scripts/dom-changer.js) module

The HTML file doesn't contain anything special, basically some buttons and input fields. 
The ```event-handlers``` module has very limited responsibilities. It binds click events to the HTML buttons, reads 
from the DOM, and delegates all other tasks to other modules. These limitations allow this module to remain "dumb", 
i. e. not to have any complex logic like for example if-branches. Generally, such straightforward code doesn't need to be
unit-tested. The actual computing and decision making is delegated to the Business Logic, which returns "command" objects.
These objects contain information on what must be changed in the DOM, and consequently are passed on to the ```dom-changer```
module. This is the only place where it is allowed to write to the DOM. This module must also remain "dumb", since we cannot 
unit-test it.

The Business Logic layer contains only this file:

- [```business-logic.js```](https://github.com/subugoe/javascript-testing/blob/master/app/scripts/business-logic.js) module

In the simplest case, it just returns an array of "command" objects which are understood by the ```dom-changer```. Here, we 
can use arbitrary logic to compute the "commands". Note that there is a ```module.exports``` statement here which allows us to 
execute this code inside of a Node.js environment and thus to unit-test it.

## Unit testing

To execute the tests, run the following commands (the one in parentheses only the first time after cloning):

(```npm install```)

```npm test```

Again, you can use Docker as an alternative if you don't have a Node.js environment installed:

(```docker-compose run command npm install```)

```docker-compose run command npm test```

The unit tests are contained in this file:

- [```business-logic.test.js```](https://github.com/subugoe/javascript-testing/blob/master/test/business-logic.test.js)

The tests have a direct access to the ```business-logic``` module. Its functions can be executed and the returned "command"
objects can be asserted easily. Of course, this is only possible, because the Business Logic doesn't contain any DOM interactions.

In this little project, the Javascript code is divided evenly between the Presentation and the Business Logic. 
However, in a real-life project, the Business Logic is the place where most of the code will end up being, and the Presentaion code 
should not grow significantly.
