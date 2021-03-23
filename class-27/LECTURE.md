# Class 27: Props and Application State

## Code Review

- What is a React Component?
  - simply functions or classes with a render method.
  - What makes them special is that they return `JSX`.
  - Must utilize methods and design patterns for `React.Components`
- Component state:
  - defined as `this.state` within the component constructor.
  - updated and modified with `this.setState` method
    - With replace any state property specified with whatever value is supplied.
- Super()
  - A function that activates `React.Component` capabilites in the class constructor.
  - Allows us to use `this` and have it refer to things defined in `React.Component`.
- See review folder for comments and examples, Thanks Bill for code sharing.

## React Props

- Propegated data.  infomrmation / functions / any js that needs to passed DOWN the React Node Tree.
  - This is a ONE way data flow, from the root componentt down to it's children.
  - No way for React to pass data up.
  - You have to proactive is siblings need information from each other.

## Managing State

- Entire set of data that our needs to be aware.
- All the components that require state, combine all of those objects to estimate what your application state is.
- Many developers are still coming up with new and novel ways of managing application state.
  - `Context` Components
  - Redux for managing global state.
  - Prop tree.
    - Defining methods for updating the parent / global state object.

## Testing and Deployment

- Tests using the React Testing library are behavior driven
  - what is the screen output of the component?
  - what kind of interaction is the user meant to have with the component?
- Tests should assert that components display elements that they are required to display
  - What props are required?
    - pass those props into the componenet when it is given to the render function.

DEMO: See my demo repository that will live here for the time being - [React Props Demo](https://github.com/JacobKnaack/react-props)
