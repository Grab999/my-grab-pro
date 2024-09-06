import { useState } from "react";

function FunctionalCounter (){
    const [counter,setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 12);
    }

    const decement = () => {
        setCounter(counter - 1)
    }


    return (
        <div>
            <div>
               <h1>
               Counter value: {counter}
               </h1>
            </div>
            <div>
              <button onClick={increment}>Increment</button>
              <button onClick={decement} >decrement</button>
           </div>
        </div>
    )
}

export default FunctionalCounter;