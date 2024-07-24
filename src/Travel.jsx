import { useEffect, useState } from "react"
import Nav from "./Nav"
import { Link } from "react-router-dom";

const Travel = () =>{
  const[travelPackages,setPackages]=useState([]);
  useEffect(()=>{
    const fetchTravels= async()=>{
      const response = await fetch('http://localhost:3000/travelPackages')
      const data = await response.json();
      setPackages(data);

    }
    fetchTravels();
  })
    return(
        <>
       <div>

        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-700">WanderMate</h1>
          <Nav></Nav>
      </div>
      <div>
        <img src="https://tse4.mm.bing.net/th?id=OIP.IqbHvbKw4lR7IoENn24WlgHaEo&pid=Api&P=0&h=220" className="translate-y-8 h-10 w-10 rounded-full"/>
      <h1 className="translate-x-12">Top Travel Packages</h1>
      </div>
        
        <div>
            <img src="https://tse1.mm.bing.net/th?id=OIP.wLo6eYSFRXpa8HAXgXLBDQHaFj&pid=Api&P=0&h=220" className=" translate-y-8 rounded-full h-10 w-10" />
            <h1 className="translate-x-12">Things To Do</h1>
        </div>

        <div className="flex flex-wrap gap-3 pl-14 pt-10  ">
        {travelPackages.map((travelpackage)=>(

            <div key={travelpackage} className="rounded-lg overflow-hidden shadow-black shadow-lg pb-3 translate-y-8 w-64" >
              
             
               <img src={travelpackage.img} className="rounded-md h-40 w-full "/> 

               <h2 className="text-lg">{travelpackage.name}</h2>
               <p>{travelpackage.price}</p>
               <p>{travelpackage.desc}</p>
               <Link to={travelpackage.id} className="bg-green-600 text-white pb-2 pt-2 pr-2 pl-2 translate-x-28 hover:bg-green-900">Book Now</Link>

            </div>
          ))}
            
         
        </div>
        </div>
        </>
    )

}
export default Travel