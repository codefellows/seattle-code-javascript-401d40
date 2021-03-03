# Warm Up - Implement an Order Queue System

## Overview

Implement an `Orderqueue` class and an `Order` class so that a service could use them to manage Orders placed for their business.  The main goal of the system is to be able to place an order, check on the status of an order, and complete an order using the first-in-first-out bahavior of a Queue.

## Requirements

An `Orderqueue` class should contain similar properties to a queue, but also needs to implement the following behaviors:

- `PlaceOrder` adds an `Order` to the queue so that any `Order`s in front of it are processed before the current `Order`.  This should return an `Order` object.
- `NextOrder` returns the next order in the `Orderqueue` that is up for processing.

An `Order` class needs contain similar properties to a Queue Node plus implement the following behaviors:

- maintains properties for:
  - `details`: Any information about the current Order.
  - `status`: Runs the `getPosition` method and prints to the console the how many orders are ahead, and an (rough) estimation of how many minutes might be remaining until the order is `next`.
  - `next`: a Reference to the next order in the `Orderqueue`.

- `getPosition`: Returns the number of `Order`s ahead of the current `Order` in the `OrderQueue`
- `CompleteOrder` removes the Order from the `Orderqueue` and modifies the `status` of the `Order` to `completed`.

## Sample Use Case

```javascript

const storeOrders = new OrderQueue();

let sandwiches = storeOrders.placeOrder({ quantity: 2, item: 'sandwich' });
let smallSandwhich = storeOrders.placeOrder({ quantity: 1, item: 'smaller sandwich' });

sandwhiches.status() // There are 0 order(s) ahead of you.  Appoximately 0 minute wait time.
smallSandwich.status() // There are 1 order(s) ahead of you.  Appoximately 10 minute wait time.

storeOrders.nextOrder() // {details: { quantity: 2, item: 'sandwich' }, next: <smallSandwhich>, }

sandwiches.completeOrder()
sandwiches.status() // Order complete

```
