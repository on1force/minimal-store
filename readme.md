# minimal-store

A simple reactive store system for managing state in TypeScript.

## Installation

Install the package using npm:

```sh
npm install @on1force/minimal-store
```

## Usage

### Creating a store

Create a store with an initial value:

```typescript
import { createStore } from '@on1force/minimal-store';

// Create a store with an initial value
const countStore = createStore(0);
```

### Subscribing to a store

Subscribe to changes in the store's value:

```typescript
const unsubscribe = countStore.subscribe(value => {
  console.log(`Count: ${value}`);
});
```

### Updating a store

Update the store's value using the set method:

```typescript
countStore.set(1);
```
Use the update method to modify the value based on the current value:

```typescript
countStore.update(value => value + 1);
```

### Unsubscribing from a store

Unsubscribe from changes to the store's value:

```typescript
unsubscribe();
```

# API

### `createStore(initialValue: T): Store<T>`
Creates a new store with the specified initial value.

- `initialValue`: The initial value of the store.
Returns: A new store object.

### `subscribe(listener: (value: T) => void): () => void`
Subscribes to changes in the store's value.

- `subscriber` (Subscriber<T>): A function that receives the current value of the store.
Returns an Unsubscribe function to remove the subscriber.

### `set(value: T): void`
Sets the store's value and notifies all subscribers.

- `value` (T): The new value of the store.

### `update(updater: (value: T) => T): void`
Updates the store's value using an updater function and notifies all subscribers.

- `updater` (Updater<T>): A function that receives the current value of the store and returns the new value.

# License

MIT

# Author
[@on1force](https://github.com/on1force)