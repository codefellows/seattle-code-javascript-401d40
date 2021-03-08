# Class 16: AWS Elastic Beanstalk & EC2

## Warm Up

```javascript

const people = ['Kookla','Fran','Ollie'];
let first = 'odie';
let last = 'garfield';
const newPeople = [first, ...people, last];

// spread syntax!!

let first = 'odie';
let last = 'garfield';

newPeople.push(first, ...people, last);


//****************

let x = stuff.cars;
let y = [...x,  'gmc'];

// stuff.cars;
stuff.cars = y; // mutation??

const newStuff = {...stuff};

const state = {
  people: [...people], // 
  stuff: {...stuff}
}

// *****************

// This should be our newStuff and newPeople 'objects' but added to this array
let newState = {
  //people: [...newPeople], // what should this look like?
  people: ['odie', ...people, 'garfield'],
  // stuff: [...newStuff]
  // stuff: {} // adding a car to stuff.cars
  stuff: {...stuff}
}

// adding the old stuff and adding a new item to the cars array.
newState.stuff.cars = [...newState.stuff.cars, 'GMC'];

```

## Review

- Trees
  - What is a tree?
    - A new way of structuring data!
      - Starts with Root?
      - It has leaves?
        - Nodes with no children. This is where the tree ends
      - A series of Nodes, with more than one reference, could describe it as a heirarchy.
        - If there was only one reference this would make it linear and we would just have a linked list.
      - 3 types of trees as discussed.
        - Binary trees, Binary Search Trees, K-ary.
          - Binary tree Nodes have only 2 children.
          - Search Tree has their Nodes sorted by weight (defined by the Nodes value).
          - free for all, there can be more than 2 children per Node, up to some value `K`.

## Cloud Computing with Virtual Machines

- We have been doing a little of cloud computing: Heroku
  - heroku wraps both EC2 and Elastic Beanstalk

- Creates a Virtual Computer that does whatever the systems allows
- Creates a Small `task manager` that can do code specific operations
  - Node JS

- What is a Virtual Machine.
  - Computer Simulation of an operating system?
    - Operating System?
      - Software, controls your hardware.
    - Running the operating concurrent with a master operating.
    - Typically this is running some operating system that doesn't require a lot of resources.
  - Hypervisor (software for load balancing)
    - load balance our resources?
    - What is load balanacing?
      - More clients per virtual machine.
      - The more resource a client needs, has to regualated.
    - Manages hardware scaling.
      - Vertical Scaling
        - More resources for a single machine.
          - Think of this one resouce intensive computer.
      - Horizontal Scaling
        - More computers
          - Think of this as the large server farms.
          - Heat managment.
          - More redundancy in hardware allows more flexibility for engineers.

## AWS Config

- The AWS developer console
- `AWS CLI`
  - This is a tool that allows to configure Amazon services through your command line
  - Install using the AWS docs: `https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html`
  - After installation run: `aws configure`
    - Input your accesss key and access secret.
- `EB CLI` (Elastic Beanstalk cli)
  - 2 ways to install
    - Amazon recommends this one: `https://github.com/aws/aws-elastic-beanstalk-cli-setup`
      - follow readme instructions.
    - or use brew: `brew install awsebcli`
    - when initializing with the cli, make sure you are in your project directory.
    - to create our App:
      - `eb init`
        - Select all relevant prompts
      - `eb create <env-name>`
        - this creates a runtime environment for elastic beanstalk on our virtual EC2 instance
      - `eb deploy`
        - this deploys our application to our EC3 environment

### IAM

- 1) Create a User
  - IAM in the developer console
  - CLick user on the left nav panel
    - "Add a user"
    - Add Permissions
      - Create a permissions group if none exist
      - Add policies to permissions group:
        - AWSElasticBeanstalkFullAccess
        - AdministorAccessElasticBeanstalk
    - Add access keys
  - assign them permissions

### Provisioning Services Through Amazon
 
- Express
- First create some express code that actually runs your application.
- Create an app on Elastic Beanstalk
  - GIve it a name
  - Pick NodeJS as your platform
  - Choose 'upload your code'
  - Zip up your source code files.
    - DO NOT INCLUDE:
      - package-lock.json
      - node_modules
  - Click Create Application
- What is happening?
  - It know it needs to install NodeEJS, from the creation form
  - AWS creates an EC2 environement using your package.json
    - install project dependencies.
    - Autoscaling (hypervisor)

### S3

- Simple Storage Server
- File storage, think of this as github.
  - Stores files and assets for Amazon Services to retrieve of modify.
    - Don't use to persist data, only for files.
