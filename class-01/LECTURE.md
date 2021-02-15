## Class 01

## Intros:
- Where are you from?
- Talk about your previous career?
- Fun / Nerdy fact about yourself.

## Canvas

## Course Repository

- Forking, cloning and adding an upstream to the class repository.

## Node

- Install Nodejs?
- What is Node?
  - Runtime for javascript.
  - Runtime code and source code.
- Node JS syntax.
  - Node Module.
  - Resouces for npm install.
    - Correct 
  - node_modules folder
    - This stores all the node modules from npm.
  - Any javascript code, that is able to use node syntax.
  - module.exports
    - this allows javascript code to be available within other javascript files
  - require statement
    - our import method

```javascript


function banana(a, b) {
  return a + b;
}

function hello() {
  console.log('hello');
}

// this only means something to code running in the NodeJS environment

module.exports = banana;

// module.exports = {
//   banana: banana,
//   hello: hello,
// }

// make this function 'sum' avilable to other javascript files that are running within Nodejs.


/***** IN ANOTHER FILE ********/

// require is a global function that exists in Node js, allows files to be "imported"
const sumNumbers = require('relative/path/to/sum.js');

const number = sumNumbers(1,3); // 4

```


### Code Challenges

- Everyday there will be a new code challenge, you are expected to have a data-structures-and-algorithms repo.


### Lab Requirements

- We are using express as our application framework.
  - What is Express?
  - Magically makes a server.
    - REST (represenational state transfer)
      - combines a method and an endpoint to produce consistent API behavior.
        - get, post, put, delete
        - /notes
    - HTTP: hyper transfer prototcol.
