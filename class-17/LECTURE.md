# Class 17: Serverless Infrastructure with AWS Lamdba & S3

## Warm Up

- How did we do?
  - Nesting components
    - How did we break up this content

```css

/* Create class for the dropdown */
.dropdown {

}

/* Hide and show something on:hover pseudoclass applied to  */
.show-dropdown:hover {
  /* Change something about the list item display */
}

.dropdown-content {
  display: none;
}
.dropdown:hover .dropdown-content {
  display: block;
}

```

```html

<header>

  <nav>
    <!-- top header  -->
    <ul>
      <li class="show-dropdown"></li>
      <li class="show-dropdown"></li>
      <li class="show-dropdown"></li>
      <li class="show-dropdown"></li>
      <li class="show-dropdown"></li>
      <li class="show-dropdown"></li>
      <li class="show-dropdown"></li>

      <!-- Nested drop down heading -->
      <div class="dropdown"></div>
      <ul class="dropdown-content" class="content visible">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
    </ul>
  </nav>

</header>


```

## Review

- Elastic Beanstalk deployments!
- What were some struggles?
  - Permission denied issues based on time signatures.
  - The CLI does care about where your server is configured to deploy.
    - if the GUI tries to deploy resources to a region  not congruent with the CLI things become difficult.
- AWS is clunky for sure.
  - Becase it does sooooooo much.
  - Integrating services is hard.
    - Resource redudencies are expensive.
    - Security is required.
- Installation of EB is weird.
  - `brew install awsebcli` works pretty well
    - most aws cli rely heavily on Python to run terminal commands on your machine.
    - Python needs a lot of configuration.
- `eb init` : creates the app on AWS dashboard.
- `eb create <env-name>` : provisioning resources.
  - No package.json
  - James / Jason Q: needed to commit files before able to create.
- `eb deploy` : we are ready to use our code within our environment.

## Serverless Infrastructure

- "What does it mean to be serverless"
  - AWS, Azure, Google Cloud Compute, Oracle.
  - Serverless stuff still requires servers.
    - Each server just has a very small and focused job.
    - Micro-services way of solvng problems

- The last 3 weeks we built monolithic server code.
  - All the features we implemented were done through server code.
- Multiple 'servers' that do one simple thing.
- AWS has a lot of microservices.

### AWS Services

- Make sure you delete them when you are done.
  - You will get charged if you perform a lot of requests to our services.

## AWS Lamdba

- Microservice that allows you to fun functions in the cloud.
  - Node server that can run and return something.
    - Don't try to start a node process and let it stay open.
  - Try to do a very small thing.
  - When you create your first function, notice the ARN, this will be important.
  - Lambdas are event based, they need an event to trigger them.
    - Different "event"  types send differenet objects.
    - An event from elastic beanstalk, will be an object with a specific shape.
  - How can we fire this event?
    - CLI can trigger this
    - Other AWS services!
      - What service should I look for?
      - Are they permitted to trigger me?

### Triggering with s3

-  Add a trigger Function overview > Add Trigger > select Service > select s3 > choose bucket
   -  Permissions should be added automatically.

## Integrate with AWS s3

- Our simple storage service:
  - Documents / files
    - anything that your file system could store.
  - What should you not store?
    - Scalar values / database entities.
- S3 works by storing things in "buckets:
  - Whenever we add things to buckets we want to trigger our Lambda function
    - Permissions required for s3 bucket:
      - s3-bucket-name > Permissions > Bucket Policy > Add your policy config

```json
// Sample bucket policy
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::<your-lamba-role>"
            },
            "Action": [
                "s3:GetObject",
            ],
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```
