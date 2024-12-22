# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook that can lead to an infinite loop.  The bug arises from improperly managing dependencies within the `useEffect`'s second argument (the dependency array).

## The Problem

The provided `MyComponent` uses `useEffect` to log the current count. However, because `count` is included in the dependency array, the effect runs every time `count` changes. Inside the effect, we update the `count` state, causing a continuous cycle of updates and re-renders, leading to an infinite loop.

## The Solution

The solution is to carefully consider and correctly specify the dependencies in the `useEffect`'s dependency array.  If an effect doesn't depend on any state variables, use an empty dependency array `[]` to make sure it only runs after the first render.  If you need to update a state variable based on a condition, make sure you're using the correct values in the dependency array that will prevent the loop.

## How to reproduce

1. Clone this repository
2. Run `npm install`
3. Run `npm start`

Observe the behavior and then check the solution in `bugSolution.js`