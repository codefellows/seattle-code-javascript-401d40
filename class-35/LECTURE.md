# Class 35: DSA Graphs

## Review

Linked Lists => Trees => Graph
* The graph builds off of the behaviors from these 2 previous Data Structure.
* We still have Node
* We still have a sequence
* We still recursion.

## What is a Graph

It is a series of Nodes / Vertices, connected via an edges. Each Node / vertex still mainains a value.

### Terminology

* Vertex: our new Node, the stores any data associated with a graph
* Edge: A connection between Vertices.
* Neighbor: A Vertex that is connected to anoher vertex via a single edge.
* Degree: A property of a Vertex, represents the number of edges a vertex has.

#### Directed VS UnDirected Graphs

* A directed Graph has edges that specify a direction from one Vertex to another.

#### Cyclic VS Acyclic

* a graph with a cycle
* Do the edges from a vertex point back to the same vertex.
  * Take some special consideration to traverse.

### Complete VS Connected VS Disconnected Graph

* How many edges does the graph have?
* Connected: all vertices have at least one edge
* Complete: all vertices hace an edge that points to every othe vertex in the graph.
* Disconnected: Verteices are allowed to have 0 edges.

### Weighted Graph

* A graph that applied a quantitative value to it's edges.
  * Represent distance between vertices?

### Representing a Graph

* Adjacency Matrix
* Adjacency List

## Traversals

very similar to a tree (k-ary), we need a place to start (vertex),  all we care about are neightbors (vertex connected via an edge).  If our graph uses an Adjancency List, we can start at the first item in the list.  We can only traverse as far as the edges of that starting verted go.

* We no longer have a root, we are replacing that with an adjacency list: hashMap();
  * Each bucket in our map will have a key = Vertex, value = [edges].

* Breadth First
  * Visit all the neighbors of a Node / Vertex before we progress
  * Steps
    * need to create a structure for holding visited vertices.
    * use a queue to get some filo behavior.
    * Enqueue the starting vertex
    * Loop while their are items in the queue
      * dequeue from the front
      * process the value.
      * Loop through adjacencies
        * If not visited
          * add it to visited
          * Enqueue adjacency.


* Depth First
  * go as far away from the starting points before we move to another neighbor
