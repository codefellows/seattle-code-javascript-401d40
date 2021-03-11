# Class 19: SQS & SNS

## Announcements

- Project week kicks off tomorrow.

## Warm Up

- Hamburger Menus
  - Creating a sliding menu that toggles two states
  - 20 minutes is difficult.
    - What did you spend you time focused on.
      - Golden bullet.

```html

<!-- html -->

<header>

  <hamburgerIcon href="#open" />
  <closeIcon href="#close" class="invisible"/>

  <div class="invisible">
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>

</header>
  
<!--  -->

<!-- css -->

<style>

/* we have a smaller screen! */
@media (max-width: 400px) {
  /* 
    The nav collapses
      we need to hide he nav, but it still needs to be there.
        we could remove visibility
        we could position iit over to the right.
  */

  /* 
    The icon / icons need to be visible.
      have them start as invisible, and now make them visible
      hide tthem behind the menu, and when the menu becomes invisible they will show.
  */
}

#open:target {

}

#close:target {

}
</style>

<!--  -->



<!-- javascript -->
<script>
const state = {
  menu: false
}

function toggleState() {
  state.menu = !state.menu;
  if (state.menu) {

    // do we need to toggle classes?
    // how can we select an element and toggle a class?

  }
}

</script>
<!--  -->
```

## Code Review

- API Gateway, Lambda functions, Dynamo BD.
- Debugging these services is hard with `console.logs`.
- Dynamo DB updating
  - Puts vs Patches
    - Depending on your dynamoose method, we may be putting vs patching.

## Event Driven Architecture with AWS

- Publisher -> Subscriber relationship between services.
  - Clients that subscribe to a notification system.
    - clients wait for subscribed event.
    - Respond when and event fires.

## Using SQS with SNS

- SNS: Simple Notification system
  - This is like socket.io, handle our events.
  - this of each event that our system cares about as a new 'Topic' for SNS
  - Once we have our topic, we can subscribe via a lambda or some other service.
  - In order to send messages through our SNS service, we need permissions.
    - If you are sending through you need to make sure your user, has a role that has SNS permissions.
    - Or make sure your user is the owner of the SNS Topic.

- SQS: Simple Queuing service
  - Behaves just like the queue we created last week.
  - After we create a new Queue, we can subscribe to our 'Topic' created in SNS.
