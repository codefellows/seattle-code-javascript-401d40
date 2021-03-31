# Class 33: React Context - and Global State

## Warm Up

Traversing a tree both iteratively and recursively:

* traverseIteratively

```javascript

function traverseIteratively(callback)  {

  let queue = []; //  in a binary tree, the queue  will traverse breadth first!
  queue.unshift(this.root);

  let current;
  while(queue) {

    current = queue.pop();
    callback(current.value);

    current.children.forEach(child => {
      if(child) {
        queue.unshift(child);
      }
    });

  }

}

```

* traverseRecursively

```javascript


function traverseRecursively(callback) {

  let _traverse = (node) => {

    callback(node.value);

    node.children.forEach(child => {
      if(child) {
        _traverse(child);
      }
    });
  }

  _traverse(this.root);

}

```

## Review Hooks

* Goal: Reimplement the `useForm` hook, also creating our own `useAjax`
  * supply a getter that stores http request results.
  * define a setter, that is able to make a request using provided details:
    * url, method, body.
  * useEffect helps use run functions when things change.

## Global State

What is global State?

* Data that multiple components need to subscribe.
  * opt in form of subscription, whenever a component needs high level data, it can reach up to "state" and read  it.
  * In some cases the component can change it.

## React Context Components

* Provider
  * high level parent that is he arbiter.
* React.Context
  * a function that returns all the necessary pieces to provide a context object
  * From this object comes he provider.

