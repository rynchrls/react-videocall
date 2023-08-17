import React from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";

const JoiningRoom = () => {

    const [value, setValue] = React.useState()
    
    const navigate = useNavigate()

    const handleJoinRoom = React.useCallback(() => {
        navigate(`/room/${value}`)
      }, [navigate, value])

    return (
        <div className="App2">
            <input type="text" placeholder="title of your room" value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={handleJoinRoom}>Start</button>
        </div>
    )
}
export default JoiningRoom;