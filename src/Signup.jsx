import React from "react"
import { useState } from "react"

import './index.css'
const Signup=()=>{
    const[formData,setformdata] = useState({
        name:'',
        email:'',
        password:'',
        confirmpassword:''

    })

    const haldleSubmit =(e) =>{
        e.preventDefault();
        console.log('Signed Up',formData)
    }

    const updateData =(e)=>{
        const {name, value} = e.target;
        setformdata({...formData,[name]: value})

    }

    return(
        <>

       
                <input type="text" placeholder="Enter your name" name="name" onChange={updateData}/>
            
                    <input type="text" placeholder="Email" name="email" onChange={updateData}/>
                    <input type="text" placeholder="Password" name="password" onChange={updateData}/>
                <input type="text" placeholder="Confirm Password" name="confirmpassword" onChange={updateData}/>
                
                <button onClick={haldleSubmit}>Sign Up</button>
                
                    I agree all<a href="">Terms and Condition</a>
            
        
        </>
    )
}
export default Signup