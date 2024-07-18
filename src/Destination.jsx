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
import { useState } from "react";
import React  from 'react';
import Nav from "./Nav"

const Destination=()=> {
  const [destinations] =useState([
    {
      name: 'Kathmandu',
      price: '500$',
      img: 'https://c0.wallpaperflare.com/preview/412/1015/756/nepal-kathmandu-swayambhu-maha-chaitya.jpg',
      desc: 'Kathmandu, the capital city of Nepal, is a vibrant metropolis nestled in the Kathmandu Valley. Renowned for its rich cultural heritage, it boasts numerous UNESCO World Heritage Sites, including ancient temples, stupas, and palaces. The city history dates back over 2,000 years, and it serves as the economic, political, and cultural hub of the country. With its bustling markets, historic architecture, and backdrop of the majestic Himalayas, Kathmandu offers a unique blend of tradition and modernity.'
    },
    {
      name: 'Pokhara',
      price: '300$',
      img: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg',
      desc :'Pokhara, the second-largest city in Nepal, is a picturesque destination known for its stunning natural beauty. Situated in the central part of the country, it lies at the base of the Annapurna mountain range and is a gateway to the popular Annapurna Circuit trekking route. Pokhara is famous for its serene lakes, with Phewa Lake being the most prominent, offering boating and panoramic views of the surrounding mountains. The city is also known for its adventure sports, including paragliding, zip-lining, and ultralight flights. With its laid-back atmosphere, lush landscapes, and vibrant local culture, Pokhara is a favorite among travelers seeking both relaxation and adventure.'
    },
    {
      name: 'Dharan',
      price: '250$',
      img: 'https://i.ytimg.com/vi/var7RJiOQd0/maxresdefault.jpg',
      desc :'Dharan is a city in eastern Nepal, known for its vibrant culture and strategic location. Situated at the foothills of the Mahabharat Range, Dharan serves as a gateway to the eastern hills and is a significant hub for trade and education. The city is characterized by its clean streets, well-planned layout, and a blend of modernity and tradition. Dharan is famous for its religious sites, including the revered Dantakali Temple and Pindeshwor Temple. It is also home to the B.P. Koirala Institute of Health Sciences, one of the leading medical institutions in Nepal. With its diverse population, cultural festivals, and proximity to natural attractions like the Koshi Tappu Wildlife Reserve, Dharan offers a unique and enriching experience for visitors and residents alike.'
    }
  ]);

  const[topdestinations] = useState([
    {
      name:'Bhaktapur Durbar Square',
      img:'https://tse2.mm.bing.net/th?id=OIP.n1MCqmTKTKb3GHDBjs0JOwHaGq&pid=Api&P=0&h=220',
      price:'$500'

    },
    {
      name: 'Phewa Lake',
      img:'https://www.wendywutours.com.au/resource/upload/913/banner-lake-phewa.jpg',
      price:'$400'

    },
    {
      name:'Chitwan National Park',
      img:'https://www.backpackeninazie.nl/wp-content/uploads/2012/07/Chitwan-3.jpg',
      price:'$350'

    },
    {
      name:'Lumbini Sacred Garden',
      img:'https://cdn.elebase.io/173fe953-8a63-4a8a-8ca3-1bacb56d78a5/1541dff2-f6a9-48b2-9bcd-f2edbebf6845-lumbini-gallery-02.jpg?w=1000&h=500&fit=crop&q=75',
      price:'$300'

    }
  ])

  return (
    <>
    <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-700">WanderMate</h1>
        <Nav></Nav>
    </div>
    <div>
      {destinations.map((destination, index) => (
        
        <div key={index}>
          <img src={destination.img} className='w-full' />
          <h2>{destination.name}</h2>
          <p> {destination.price}</p>
          <p>{destination.desc}</p>
          
        </div>
      ))}
    </div>

    <div className="w-full flex flex-wrap gap-3 justify-center">
      {topdestinations.map((topdestination,index)=>(
        <div className="w-[48%]" key={index}>
          <div className="w-full relative">
            <img className="w-full h-[250px] object-cover" src={topdestination.img}/>
            <div className="w-full flex justify-between absolute bottom-0 text-white font-medium px-2 py-2">
            <p>{topdestination.name}</p>
            <p>{topdestination.price}</p>
            </div>


          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Destination;