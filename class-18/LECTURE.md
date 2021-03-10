# Class: AWS API Gateway + Lambda = Dynamo DB

## Announcements

- Midterm Project starts next Monday.
- Teams will be announced Friday, Meet and discuss project prep.

## Warm Up

- Creating a Model View that can overlay a larger view.
  - Jason Q: Add a button that uses an anchor.

```css

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
  transition: opacity 200ms;
  visibility: hidden;
  opacity: 0;
}

.overlay:target {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
  transition: opacity 200ms;
  visibility: hidden;
  opacity: 0;
  visibility: visible;
  opacity: 1;
}


```

```html

<div id="wrapper">
  <p><a class="button" href="#popup1">Click Me</a></p>
  <p><a class="button" href="#popup2">Click Me Too</a></p>
</div>
<div class="overlay" id="popup1">

</div>

```


## Code Review

- lambdas + S3
- What is an AWS Lamdba?
  - Small function that lives on AWS servers.
  - What programming language can a Lambda be written in?
    - Node JS - yes
    - There's are quite a few options
      - Java
      - C#
      - Python
    - You just need to select a runtime when configuring the lambda.
- How can we trigger a Lambda function?
  - AWS events:
    - Triggering with an AWS service.
      - This requires some configuration.
    - CLI: Test event from the terminal!
- What operations can you perform with a Lambda?
  - CRUD : AWS services.
  - Anything as long as you include your dependencies configuration are set.
  - Creating easily maintainable micro software.
- Role based things:
  - Giving your lambda policy
    - This was from the lambda to s3.
  - Who / what is trying to accomplish an AWS task.

- What is s3:
  - File Storage.

## API Gateway

- A Router for comsuming HTTP Requests
- Application Program Interface
- Provide access to application functionality.
  - REST / HTTP
  - Integrating with other AWS services.
    - Integrating with AWS Lambda
- Setting up our gateway
  - Defining a resource.
    - Define an HTTP method for accessing our API resource.

## Lambda Handlers:
  - Assign permission to the ROLE associated with the Lambda:
    - Lambda function > condiguration > Execution Role > Attach Policy > DynamoDBAccess

## Dynamo DB

- This is a noSQL database service from AWS.
- Functions a lot like MongoDB but is not.
  - Primary Key.
  - Typically a relational databse feature, Dynamo has implemented for the same reason, making entities unique and queryable.
  - Make sure you know what data type your primary key is going to be.

### Dynamoose

- A Dynamo DB API structured exactly like Mongoose.
  - Lets us provide a schema and perform CRUD against a Dynamo DB table.
  - Installed via node / npm
  - Configured based on a role.
