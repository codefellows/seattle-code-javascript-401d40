# Class 15: Trees

## Lab Review

- Terminal TicTacToe
  - Nick + James
- Automated Sinky Ship
  - James + Bill

## Trees

- Last 2 weeks we've been in Linked List Land
  - Connections are made via a node each node reference is linear
`(1) -> (2) -> null`

- Trees use a 'branching' reference structure to each of it's nodes.
  - We add an extra reference to other nodes with our Tree Node class

```
(1)
  - (3)
    - (4)
    - (5)
  - (2)
    - (6)
    - (7) 
```

### Terminology

- Root: the starting node of a tree. (Similar to the head in a linked list).
- Node: Still the data point of a tree. tree nodes contain more than 1 reference.
  - This produces more of a hierarchy of children, instead of a linear line that a linked list has.
- Right (Child / Node): A node that is a child of a node (We visualize it on the right side).
- Left (Child / Node): another node that is a child of a node. ( visualize this on the left side).
- K: The maximum number of children a node can have.
- Leaf: A node with 0 children.
- Edge / Vertex: A link that connects two nodes togther (a parent and a child)
- Height: the number of edges, from the root to the furthest leaf.

### Binary Trees

#### Binary Search Trees

### K-ary

- Trees with more than 2 node references at each Node.

### Traversal

- Depth First
  - Pick a child of the node, and process it before moving to other children.
  - Sub categories;
    - pre-order: Start with the current node, than looking at the left, followed by the right.
      - `current -> left -> right`
    - post-order: Start with left, followed by the right, than look at the current.
      - `left -> right -> current`
    - in-order: Start with left, followed by the current node, finishing with right
      - `left -> current -> right`

#### Depth First Algorithms

- Pre Order traversal

```java

define PreOrder

    // 1) 
  process(currentNode.value);

  // 2)
  if currentNode.left:
    PreOrder(currentNode.left);
  // 3)
  if currentNode.right:
    PreOrder(currrentNode.right);

```

- Post Order Traversal

```java
define PreOrder

  // 1)
  if currentNode.left:
    PreOrder(currentNode.left);
  // 2)
  if currentNode.right:
    PreOrder(currrentNode.right);

  // 3) 
  process(currentNode.value);

```

- In Order Traversal

```java

define InOrder

  // 1)
  if currentNode.left:
    PreOrder(currentNode.left);

  // 2) 
  process(currentNode.value);

  // 3)
  if currentNode.right:
    PreOrder(currrentNode.right);

```

- Breadth First
  - Process both sides (all children), before moving to sub-children.
    - This requires either recursion or a queue.

```java

define BreadthFirst

  queue <- new Queue
  queue.enqueue(tree.root)

  while queue.peek
    current = queue.dequeueu

    process(current)

    for all children of current
      queue.enqueue(current[child])

```
