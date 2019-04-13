## The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.
```js
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
```
A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.


## A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
Concretely, a higher-order component is a function that takes a component and returns a new component.
```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```
Whereas a component transforms props into UI, a higher-order component transforms a component into another component.