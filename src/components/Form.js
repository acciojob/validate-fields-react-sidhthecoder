import React,{useState} from "react";
import "./App.css";

const Form=()=>{

    
    let [name,setName]=useState("");
    let [password,setPassword]=useState("");
    let [header,setHeader]=useState("");
    function handleChange(){
        if(!name || !password){
             setHeader("Both username and password are required.")
             setName('');
             setPassword('');
        }else{
        setHeader('');
        }
    }
    return(
         <div>
            <label for="name">Username</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
            <label for="password">Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
            {header && <div id="errorMessage" className="red">Both username and password are required.</div>}
            <button onClick={handleChange}>Login</button>
            
        </div>
    )


}


export default Form;