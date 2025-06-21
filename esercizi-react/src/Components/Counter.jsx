import { useEffect } from "react"
import { useState } from "react"

function Counter ({initialValue = 0, increment = 1}) {
    const [counter, setCounter] = useState(initialValue)

    useEffect(() => {console.log("The current value of the counter is", counter)}, [counter])

    const incrementFunction = () => {
        setCounter(counter + increment)
    }
    return(
        <>
        <h2>Counter: {counter}</h2>
        <button onClick={incrementFunction}>Increment</button>
        </>
    )
}

export default Counter