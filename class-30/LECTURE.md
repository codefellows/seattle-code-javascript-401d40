# Class 30: Hash Table

## Announcements

* Code Challenge may have a broken.
* fixed now :)

## Review

Previous structures:

* Linked Lists
  * Stack and Queues
* Trees
* All of these were recursive.
  * One small part that comprises the whole structure.
  * The structure is just a reference point to a node.

Our hash table will use one or more of these structure within it.

## What is a Hash Table

What is a hash and what is a table?

* Table: information organized via columns and rows.
  * Key / value pairs.
* Hash: result of an algorithm that converts a key into a position / address / location for a value.
  * determinitic - alwats get the same result given the same key.
  * Sometimes a hash is made to encrypt (hiding data).
  * Our hashing today will just be to find a location.

What are hash Tables used for?

* Consistent storing values, based on a given key.
* Efficient retrieval of information.
  * Reduces time and space retrieval of information.
  * This is not searching.

When would I use this?

* The JS object does has the same storage benefits.
  * JS objects are limited by key type.
    * Have to have strings as keys, the hash table can use anything as a key.
  * JS objects to not manage any collisions, they only overwrite.
* 0(1) space and time efficiencies for our behavior (retrieval and adding).
  * Library of whatever.
    * Lists
    * Dictionaries

### Terminology

- Hash:  The results of our hashing alogorithm, also a method that every hash table should perform.
  - Hopefully accounts for collision.
- Collision: When a hash produces the same location for a key.
- Bucket: This is what our node has turned into, it is a storage container, probably a linked list or an array.
  - We will be using Linked Lists as our Bucket.
  - This allows us to gracefully handle Collisions

### Visualize

### Hashing Algorithm

1) Add up the string ascii values of your key

  ```js
  key = Jacob
  value = instructor

  'J', 'a', 'c', 'o', 'b' = 359

  ```

2) Multiply by a large prime number

`359 * 599 = 210246`

3) Moduluo by the number of buckets in our hash table.

`210249 % 1024 = 329`

  * The result is our position.

### What specific things does a Hash Table Do?

* Hash: Takes in a key, and performs our hashing algorithm.
* Add: Takes in a key and value to store in the table, hashes the key and inserts the value into the bucket.
* Contains: takes in a key and returns a boolean, whether or not their is a value stored for a given key.
* getHash: Takes in a key, performs the hash, and returns that.
