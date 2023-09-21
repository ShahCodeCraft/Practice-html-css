// import React,{useState} from 'react';

// const Demo = () =>{
//     const [inputVal,setInputVal] = useState('');
//     const [outputVal,setOutputVal] = useState([]);

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         if(inputVal){
//             setOutputVal([...outputVal,inputVal]);
//             setInputVal('');
//         }
//     }

//     const handleRemove = (index) =>{
//         setOutputVal(outputVal.filter((output,id)=>id!==index))
//     }
    
//     const handleEdit = () =>{

//     }
//     return(
//         <>
//         <h1>This is NewDemo Page</h1>
    
//         <form onSubmit={handleSubmit}>
//         <input type='text' placeholder='Enter value' value={inputVal} onChange={(e)=>setInputVal(e.target.value)}  />
//         <button>Add</button>
//         </form>
//         <ul>
//             {
//                 outputVal.map((output,index)=>
//                 <li>
//                     {output}
//                 <button onClick={()=>handleRemove(index)}>Remove</button>
//                 <button onClick={()=>handleEdit(index)}>Edit</button>
//                 </li>
//                 )
//             }
//         </ul>
//         </>
//     )
// }
// export default Demo;
import React,{useState} from 'react';


const Demo = () =>{
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();

    const [ctime,setCtime] = useState('');
    
    const updateTime = () =>{
        setCtime(time);
        setInterval(updateTime,1000);
    }
    return(
        <>
        <h1>This is Demo Page</h1>
        <h2>Time : {time}</h2>
        <h3>Date : {date}</h3>
        <button onClick={updateTime}>Update Time</button>
        </>
    )
}
export default Demo;

