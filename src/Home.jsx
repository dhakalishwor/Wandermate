import React from 'react';
import Nav from './Nav'

const HomePage = () => {
  return (
     <>
     <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-700">WanderMate</h1>
          <Nav></Nav>
      </div>
     
      
     
     <div className="bg-[url('./MountEverest_PhFengWei_Getty2-56a16b185f9b58b7d0bf2e87.jpg')] h-screen w-screen rounded-md"> 
     <div className='container mx-auto flex items-center justify-end '>
      <h1 className='text-5xl bg-white rounded-mdabsolute pt-1 pb-2 translate-y-6 font-bold px-4 py-2 rounded-lg'>Explore Nepal</h1>
     </div>
     <div className='flex  justify-center min-h-screen'>
      <img src="https://www.freeiconspng.com/uploads/search-icon-png-21.png" className='h-8 w-6  translate-x-96 translate-y-80 pr-2 pt-2'   />
     <input type="text" placeholder='Enter your places or destinations' className='place-self-center h-12 w-96 p-4 border rounded-md'/>

     </div>
    

    

     
     </div>
     
    
    
    </>   
    
  );
};

export default HomePage;
