import React from "react";
import { useState } from "react";
/*export default function Component(props) {
 return (
    <>
      <div></div>Component<div/>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <a href="https://Esprit.tn" target="_blank" rel="noreferrer">Visit Esprit</a>
    </>
  )
}*/

export default function Component(props) {
    const [count, setCount] = useState(8);
    <button onClick={() => setCount(count + 1)}>Increment</button>
    return (
      <>
        <div></div>Component<div/>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <a href={props.href} target="_blank" rel="noreferrer">Visit Esprit</a>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </>
    )
  } 