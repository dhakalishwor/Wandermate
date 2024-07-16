// import { useState } from "react"
// 


// const Destination=()=>{
    
// const[destinations, selectDestination] = useState([
//     {
//     name:'Kathmandu',
//     price:'500$',
//     img:'https://tse2.mm.bing.net/th?id=OIP.3XTA3zYfXyWQACdSrJm7-QHaEe&pid=Api&P=0&h=220'
// },
// {
//     name:'Pokhara',
//     price:'300$',
//     img:'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg'
// },
// {
//     name:'Dharan',
//     price:'250$',
//     img:'https://web.nepalnews.com/storage/story/1024/DharanClocktower1611483854_1024.jpg'
// }
// ])
//     return(
//         <>
//         {destinations.map((destination)=>{
//             <div key={destination.name}>
//                 <img src={destination.img}/>
//                 <p>{destination.price}</p>

//             </div>
//         })
//     }
        
//         
//         <body>
            

            
//         </body>
        
//         </>
//     )
// }


    

// export default Destination
import React from 'react';
import Nav from "./Nav"

const Destination=()=> {
  const [destinations] = React.useState([
    {
      name: 'Kathmandu',
      price: '500$',
      img: 'https://tse2.mm.bing.net/th?id=OIP.3XTA3zYfXyWQACdSrJm7-QHaEe&pid=Api&P=0&h=220'
    },
    {
      name: 'Pokhara',
      price: '300$',
      img: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg'
    },
    {
      name: 'Dharan',
      price: '250$',
      img: 'https://web.nepalnews.com/storage/story/1024/DharanClocktower1611483854_1024.jpg'
    }
  ]);

  return (
    <>
    <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-700">WanderMate</h1>
        <Nav></Nav>
    </div>
    
    <div className='flex flex-wrap gap-3'>
      {destinations.map((destination, index) => (
        
        <div key={index} className='bg-blue-100 rounded-md pl-2 w-64 shadow-black shadow-lg'>
          <img src={destination.img} className='' />
          <h2>{destination.name}</h2>
          <p> {destination.price}</p>
          
        </div>
      ))}
    </div>
    </>
  );
}

export default Destination;