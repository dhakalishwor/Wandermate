import React from "react";
import { useState } from "react";



const Signin=()=>{
    const[formData,setformdata] = useState({
        username:'',
        password:''
    })

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log('submitted',formData);

    }
    const handleChange=(e)=>{
        const {name, value} = e.target;
        setformdata({...formData,[name]: value}

        );
    }

    return(
        <>
       
                <label htmlFor="Username"></label>
                <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange}/>

              
                <label htmlFor="Password"></label>
                <input className='border-blue-200 rounded-md' name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
            
            <button onClick={handleSubmit}>Sign In</button>
            New here?<a href="">Sign Up</a>
        
        </>

    )
}

export default Signin;