# Class 28: Application Component Composition

## Code Review

- Component Props:  Parameters for a component.  Payloads like socket.io.
  - state
  - functions

```javascript

class Header {
  constructor(props) {


  }

  render() {
    return (
      <div className={this.props.class}>
        <p>Hello from header!</p>
      </div>
    )
  }
}


// Somewhere else...

import Header from './header';

function App () {
  return (
    <div>
      <Header class='small' />
    </div>
  )
}

```

- Tests
  - Jason Q: writing tests

## Warm Up

## View / Layout logic with React

- Conditional Rendering
  - Since JS poweres everything within a react component, we can use conditional statements to make rendering decisions.
    - Create utility function for deciiding what to render
  - Include conditional statements within specific component logic

  ```javascript

  function if(condition) {

    if (condition) {
      return 'one thing'
    } else {
      return 'another thing'
    }

  }

  ```

## Component LifeCycle

- These methods are only available to class components
- You will sometimes need to perform operations before a component renders
- some of these so not allow `this.setState`
  1) componentWillMount: The setup phase for a react component.
    - If you need to perfrom something before a `render` you can do it here.
  2) componentWillReceiveProps:  The component receives infomration from it parent.
  3) render: occurs in the middle of the components lifecycle.
  4) componentDidUpdate:  state or props was changeed.  you won't be able to adjust the render logic.
  5) componentWillUnmount: clean up any data, make requests, making quality of life adjusttments for other components or services.

- We aren't going to dive very deep into these because we are switching to almost entirely functional components next week.
- When we makes modifications to state or props, we start this process over (almost).
