import { useState } from "react"

export default function Count(){
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count+1;
        setCount(newCount);
    }

    const handleSub = () => {
        const newCount = count-1;
        setCount(newCount);
    }

    return (
        <div style={{border: '2px solid tomato', borderRadius: '20px', margin: '20px', padding: '10px'}}>
            <h3> Counter: {count} </h3>
            <button onClick={handleAdd}>Add</button>
            <button style={{margin: '5px'}} onClick={handleSub}>Reduce</button>
        </div>
    )
}