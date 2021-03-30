# Class 32: Custom Hooks

## Warm Up

Creating Tabs and Accordion Components

### Structure / Layout

- boostrap will dictate this!

```jsx

// outer container
<Deck>

  // stuff to click on, hopefully this toggles className / State properties
  // <button type="radio"></button>
  // <button type="radio"><button>
  //at least one thing here to display content based on a clicked button
  {cardData.map(contents => {
    return  (
      <>
      <button type="radio">{contents.title}</button>
      <If condition={selectedCards.include(contents.name)}>
          <Card />
      </If>
      </>
    ))}
  }
  /**
   * Tab: can display only one thing
   * Accordion: can display many things
   * */

<Deck>

```

### Styling logic

- Opening and closing he accordion
  - transition: what should happen on state change.

  ```scss

  .radio-button {
    ...normalstate for buttons
  }

  .radio-button-active {
    <!-- what do I want to change from the normal state -->
    background-color: dark-blue;
    transition: 2s ease-in-out;

    .arrow {
      transform: rotate(180deg);
    }
  }

  ```

## Code Review

Refactoring our Class components into functional components.

- See review folder for notes and review code.

## Custom Hooks

- What makes a hook a hook?
  - Hook into the React API.
    - A function that performs whatever need to be performed, but the hook allows us to re-render, wait for something to change, generally trigger something that react cares about.
  - Why do call useState?
    - to assign values that react cares about.
  - Why do use useEffect?
    - Similate lifecycle methods.
    - Trigger an event when a component mutates.
      - Pass a callback to run when a specified value changes / mutates.
  - What other things might we want to hookify?
    - Any functionality that we want to abstract to other components, we can turn into any functionality that was repeated into a hook.
  - Hooks do not return stuff to render, they return getters and setters.
  - They always (by convention) start with `use`.
