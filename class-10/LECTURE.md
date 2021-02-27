# Class 10: DSA Stacks and Queues

Stacks and Queues are different flavors of a linked list

- Linked List: Bunch a Nodes that points to each other.
  - linear way ( node don't point backwards, specificall the next property).
  - Doubly does points backwards ( think of this as 2 linked lists, pointing opposite directions)
- These have very specific Node insertion and traversal behaviors.

Terminology:

- Stack: A Linked list that pushes node on the TOP and Removes Nodes from he TOP;
  - Push: Adding a node to the Top of a Stack, the process of adding a new Node.
  - Pop: Takes a Node off the TOP of a Stack, removal process.
  - Top: The beginning Node in a stack, the last Node to be added to the stack.
  - Peek: looking at the Top of the stack.
  - isEmpty: Boolean that tells us if the stack has any Nodes.
- Queue: A linked list that addes nodes in the Rear, and removes them from the Front.
  - Rear: The back of the queue, where the last nodes to be added live.
  - Front: Where Nodes are removed from in a Queue.
  - Enqueue: The process of adding a Node to the Rear.
  - Dequeue: The process of removing a Node from the Front.
  - Peek: Looking at the node next to be removed.
  - isEmpty: Boolean that says whether there are any Node in the Queue.

## Pushing Items Onto A Stack

- Start by receiving a New Node to Add to the Stack
  - Assign the next property to the Current Top Node
  - Assign the Top property to the New Node we want to add.

## Popping Items Off a Stack

- temporarily create a reference to the Top Node
  - Assign the Top property to the Top Node's next Node.
  - Assign null to the temp Node's next property and return the value. 
