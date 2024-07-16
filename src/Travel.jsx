import { useState } from "react"
import Nav from "./Nav"

const Travel = () =>{
  const[packages]=useState([
    {
      title:'Swimming',
      price:'$100',
      img:"https://tse4.mm.bing.net/th?id=OIP.3ZnAVS6zKDC17rfKR4RXcgHaE7&pid=Api&P=0&h=220"
    },
    {
      title:'Gym',
      price:'$120',
      img:'https://tse3.mm.bing.net/th?id=OIP.iXVLf8F223lRKjmm2YsfpAHaE8&pid=Api&P=0&h=220'
    },{
      title:'Spa',
      price:'$200',
      img:'https://tse1.mm.bing.net/th?id=OIP.sJsUpukoxUE2NeFbgc-SnwHaGl&pid=Api&P=0&h=220'
    },
    {
      title:'Tennis Court',
      price:'$80',
      img:'https://tse3.mm.bing.net/th?id=OIP.eDROArWYkpOv2d6EVBAW8gHaFj&pid=Api&P=0&h=220'
    }
  ])
    return(
        <>
       

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
        {packages.map((travelpack,index)=>(

            <div key={index} className="rounded-lg overflow-hidden shadow-black shadow-lg translate-y-8" 
              // {
              //   backgroundImage:'url{$travelpack.img}',
              //   backgroundSize: 'cover',
              //   backgroundPosition: 'center'

              // }
            >
              
             
               <img src={travelpack.img} className="rounded-md"/> 
               <h2>{travelpack.title}</h2>
               <p>{travelpack.price}</p>
            </div>
          ))}
            
         
        </div>
        </>
    )

}
export default Travel