//useEffect allows you to perform side effects to your components.

//Examples of teh side effects include: Fetching data, directly updating the DOM and the timers. 

//Accepts two arguments. The second argument is optional. 
import { useEffect, useState } from "react";

export function Timer(){
    const [count, setCount] = useState(0); //useState hook initializes the variable count to 0 and setCount to update it.

    useEffect(() =>{ //uses the useEffect hook to run a side effect.The function passed to use effect is executed after the component is rendered.
        
        setTimeout(()=> { //sets up a setTimeout to run the enclosed function after 1000 milliseconds.

            setCount((count)=> count + 1);

        }, 1000); //specifies the delay of 1000 milliseconds. 
        
    }

    )
    return <h1>I have rendered {count} times</h1>

}