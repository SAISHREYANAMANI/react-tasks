import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 3); 
        }, 3000);
        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <h1>{count}</h1>
        </>
    );
};

export default Counter;
