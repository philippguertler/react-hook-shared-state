# react-hook-shared-state
A simple way to create shared state using the hook API from React.

Requires at least React `16.7.0`

# Install
```sh
yarn add react-hook-shared-state
```

# Example
TODO

# API

`createSharedState(initialValue)`

Returns a tuple with two functions in this order:
* `useSharedState()` - Use this in your component. This will return the current state and cause your component to rerender when a new state is set.
* `setSharedState(nextState | (previousState) => nextState)` - Call this function to set the new shared state.
You can also pass a function which will receive the previous state as a parameter and returns the next state.