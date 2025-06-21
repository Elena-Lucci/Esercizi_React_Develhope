import { useState } from "react"
import { useEffect } from "react"

export function Clock() {
    const [time, setTime] = useState(new Date())
    useEffect(
        () => {const int = setInterval(() => {setTime(new Date())}, 1000)
        return () => clearInterval(int)}
    , [])
    return(
        <>
        <h2>Current time: {time.toLocaleTimeString()}</h2>
        </>
    )
}