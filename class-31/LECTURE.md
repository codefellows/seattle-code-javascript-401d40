# Class 31: React Hooks

## Warm Up

- Find Pairs in an array that sum to a specific integer.
  - Complete in 0(n) time complexity.
  - We could use a table or map (our hash table implements this).

```javascript

// Nick A / Nick M and Carly
function printPairs(arr, sum){ // jacob: brute force array search.
  // Consider all possible pairs and check
  // their sums
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {

      if (arr[i] + arr[j] === sum){
        console.log("(" + arr[i] + ", "  + arr[j] + ")");
      } else if (arr[i] + arr[j] !== sum){
        console.log(null);
      }

        // console.log(null);
    }
  }
  // console.log(null);
}

// Jason Q and Seid: solution using a table / map
const twoSum = (arr, target) => {
  let numObject = {}; // storage for values
  for (let i = 0; i < arr.length; i++) {
    let thisNum = arr[i];
    numObject[thisNum] = i; // adding our number to the storage object
  }
  // loop for checking if any number addds up to our sum against the things in numObject.
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (numObject[diff] && numObject[diff] !== i) {
      return [arr[i], arr[numObject[diff]]];
    } else { return null; }
  }
}

```

## React Review

```javascript

function Component() {
  return <h1>Some content</h1>
}

```


- What makes a function or class a React Component?
  - returning jsx / render method with jsx.
  - What allows our JSX to work?
    - Magically transpiling -> create-react-app -> babel.
- What is the purpose of component state?
  - Gives our components some data / functions to use.
  - Allows our components to change.
  - When components change, what needs to occur?
    - When changes in a component React needs to re-render.

```javascript
// required to perfrom something on `this`
this.setState()

```

- What are React lifecycle methods?
  - Represents the stages of life for a component
    - componentWillMount
    - componentWIllRecieveProps
    - render
    - componentDidUpdate
    - componentWillUnmount
  - These give us developers ways to interact with component logic before / after / during it's being used in the DOM.
  - These events occur multuple times while `this.setState`.

- This week we are leaving classes
  - We can use Hooks to do all the same things that classes were doing.
  - This will have a different syntax, it's not going to be as clear.
    - we won't have `this.setState` not will we have any of the life cycle methods.
- We are gaing a much cleaner syntax.
  - We are going to have more staight forward becasuse of Facebook.

- James: Testing route paths (browser router).
  - Tests should ideally be specific to a component.
  - `Results component should render results data`
    - `render <Results data={[..]} />`
    - `expect data stuff to be render`
  - `App should be able to navigate to Results component`
    - `render `<BrowserRouter><App /><BrowserRouter>`
    - expectation is the same, but we have to click on something first.

## useState and useEffect

* useState: a function that can be imported from react, adds a state powered variable to our App. hooks into re-render and life cycle of react.
* useEffect: a function from react, allows to to define properties that will trigger / or not trigger React API features.
  * Replaces our life-cycle methods. React thought the life cycle methods were not that great.
  * We lose a lot of specificity, and readablity.  We refer to changes in our application as mutation `effects`.

### Recap

- 2 new React Features?
  - useState: adds state vairable / property, some value that react cares about.
  - useEffect: allows us to specific vairables that will trigger the React API.
- What features do these replace?
  - this.setState gets replaced with useState?
    - we use the second item in the arrary returned from useState
      - `let [property, setProperty] = useState('');`
  - Life Cycle methods are replaced by useEffect
    - componentDidMount: useEffect(handleMount, []) => empty dependenct array as 2nd arg
    - compoentDidUpdate: useEffect(handlUpdate, [propertyToUpdateOn]) // add items to checkf updates within dependency array.
    - ComponentWillUnmount: useEffect(() => handleUnmount); // return a function within the 1st arg.

## 3rd Party Component Libraries

When we dont want/need to create our own jsc logic for rendering elements, we can turn to 3rd party libraroes
- Installed like any other dependency from NPM, but they can be imported like any other react component. 

