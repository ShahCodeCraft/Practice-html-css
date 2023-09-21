import React,{useState} from 'react';

const DigitalClock = () =>{

    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    
    const [ctime,setCtime] = useState(time);

    const UpdateTime = () =>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
        setInterval(UpdateTime,1000);
    }
    return(
        <>
        <h1>Digital Clock</h1>
        <h1>{ctime}</h1>
        <h1>{date}</h1>
        <button onClick={UpdateTime}>Get time</button>
        </>
    )
}
export default DigitalClock;