
import Nav from './Nav'
import { useState } from 'react';

const HomePage = () => {
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

     <div className='overflow-hidden'>
     
     <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-700">WanderMate</h1>
          <Nav></Nav>
      </div>
     
      
     
     <div className="bg-[url('https://travelhousenepal.com/wp-content/uploads/2018/06/Boudhanath.jpg')] h-full w-full rounded-md object-cover mr-4 ml-4"> 
     <div className='container mx-auto flex items-center justify-end '>
      <h1 className='text-5xl bg-white rounded-mdabsolute pt-1 pb-2 translate-y-6 font-bold px-4 py-2 rounded-lg'>Explore Nepal</h1>
     </div>
     <div className='flex  justify-center min-h-screen'>
      <img src="https://www.freeiconspng.com/uploads/search-icon-png-21.png" className='h-8 w-6  translate-x-96 translate-y-80 pr-2 pt-2'   />
     <input type="text" placeholder='Enter your places or destinations' className='place-self-center h-12 w-96 p-4 border rounded-md'/>

     </div>
     </div>


     <div className="ml-4">
      <img src="https://tse4.mm.bing.net/th?id=OIP.IqbHvbKw4lR7IoENn24WlgHaEo&pid=Api&P=0&h=220"className="rounded-full h-10 w-10 translate-y-8" />
      <p className="translate-x-12">Top Destination</p>
    </div>


     <div className="w-full flex flex-wrap gap-3 justify-center translate-y-6">
      {topdestinations.map((topdestination,index)=>(
        <div className="w-[48%]" key={index}>
          <div className="w-full relative">
            <img className="w-full h-[250px] object-cover rounded-lg" src={topdestination.img}/>
            <div className="w-full flex justify-between absolute bottom-0 text-white font-medium px-2 py-2">
            <p>{topdestination.name}</p>
            <p>{topdestination.price}</p>
            </div>


          </div>
        </div>
      ))}
    </div>

    <div className="ml-4">
      <img src="https://tse2.mm.bing.net/th?id=OIP.HZbNdLlpx5Ft7udAdgn_agHaEK&pid=Api&P=0&h=220"className="rounded-full h-10 w-10 translate-y-8" />
      <p className="translate-x-12">Top Hotels</p>
    </div>

    <div className="ml-4">
      <img src="https://i.pinimg.com/originals/8b/ef/50/8bef50a09e62cf3d554504b90c1cd7f4.jpg"className="rounded-full h-10 w-10 translate-y-8" />
      <p className="translate-x-12">Top Travel Packages</p>
    </div>
     

    </div>
    
    
    </>   
    
  );
};

export default HomePage;
