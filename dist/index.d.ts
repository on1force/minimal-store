/**
 * Type definition for a subscriber function that listens to store updates.
 * @template T The type of the value managed by the store.
 */
type Subscriber<T> = (value: T) => void;
/**
 * Type definition for the unsubscribe function returned by the store's subscribe method.
 */
type Unsubscribe = () => void;
/**
 * Type definition for an updater function that modifies the store's value.
 * @template T The type of the value managed by the store.
 */
type Updater<T> = (value: T) => T;
/**
 * Interface for a reactive store.
 * @template T The type of the value managed by the store.
 */
type Store<T> = {
    /**
     * Subscribes a function to be called whenever the store's value changes.
     * @param subscriber A function that receives the current value of the store.
     * @returns An unsubscribe function to remove the subscriber.
     */
    subscribe: (subscriber: Subscriber<T>) => Unsubscribe;
    /**
     * Sets the store's value and notifies all subscribers.
     * @param value The new value to set.
     */
    set: (value: T) => void;
    /**
     * Updates the store's value using an updater function and notifies all subscribers.
     * @param updater A function that receives the current value and returns the updated value.
     */
    update: (updater: Updater<T>) => void;
};
/**
 * Creates a reactive store with an initial value.
 * @template T The type of the value managed by the store.
 * @param initialValue The initial value for the store.
 * @returns An object representing the store with subscribe, set, and update methods.
 */
export declare function createStore<T>(initialValue: T): Store<T>;
export {};
