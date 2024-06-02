"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStore = void 0;
/**
 * Creates a reactive store with an initial value.
 * @template T The type of the value managed by the store.
 * @param initialValue The initial value for the store.
 * @returns An object representing the store with subscribe, set, and update methods.
 */
function createStore(initialValue) {
    let value = initialValue;
    let subscribers = [];
    /**
     * Subscribes a function to be called whenever the store's value changes.
     * @param subscriber A function that receives the current value of the store.
     * @returns An unsubscribe function to remove the subscriber.
     */
    const subscribe = (subscriber) => {
        subscribers.push(subscriber);
        subscriber(value); // Call subscriber immediately with current value
        return () => {
            subscribers = subscribers.filter(s => s !== subscriber);
        };
    };
    /**
     * Sets the store's value and notifies all subscribers.
     * @param newValue The new value to set.
     */
    const set = (newValue) => {
        value = newValue;
        subscribers.forEach(subscriber => subscriber(value));
    };
    /**
     * Updates the store's value using an updater function and notifies all subscribers.
     * @param updater A function that receives the current value and returns the updated value.
     */
    const update = (updater) => {
        value = updater(value);
        subscribers.forEach(subscriber => subscriber(value));
    };
    return { subscribe, set, update };
}
exports.createStore = createStore;
