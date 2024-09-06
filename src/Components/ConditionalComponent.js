import { useState } from "react"

export default function ConditionalComponent () {
    const [display, setDisplay] = useState (false);
    let output
    if (display) {
      output = <h1>this is my condition</h1>
    }
    else (
      output =  <h1>stay or leave</h1>
    )
    return (
        <div>{output}</div>
    )
}