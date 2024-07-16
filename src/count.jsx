import React from "react";
import { useEffect, useState } from "react";


function Count(){
    const[count, setCounter] = useState(0);
    
    useEffect(()=>{
        setTimeout(()=>{
            setCounter((count)=> count + 1);
        },10000000);
    },[count]);

    console.log()
    

}
export default Count