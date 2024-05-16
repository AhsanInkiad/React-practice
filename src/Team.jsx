import { useState } from "react"

export default function Team() {
    const [teamCount, setTeamCount] = useState(11);

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    const addPlayer =()=>{
        let x = teamCount+1;
        setTeamCount(x);
    }

    const removePlayer =()=>{
        let x = teamCount-1;
        setTeamCount(x);
    }

    return (
        <div style={teamStyle}>
            <h3> Players: {teamCount} </h3>
            <button onClick={addPlayer}> Add players </button>
            <button style={{margin: '10px'}} onClick={removePlayer}> Remove players </button>
        </div>
    )
}