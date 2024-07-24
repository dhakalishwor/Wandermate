
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
   const[hotels] = [
    {
      "id": "1",
      "name": "Hotel Yak & Yeti",
      "price": 120,
      "img": "https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/v1/WanderMate/tv5jbv6wn68crhqdjm1b",
      "rating": 5,
      "freeCancellation": true,
      "reserveNow": true,
      "desc": "Hotel Yak & Yeti is a luxurious 5-star hotel located in the heart of Kathmandu, offering world-class amenities and exceptional service. Guests can indulge in the hotel's opulent accommodations, featuring elegantly appointed rooms and suites with modern amenities. The hotel boasts an array of dining options, from fine dining restaurants to casual cafes, catering to diverse culinary preferences. Additionally, it features a state-of-the-art fitness center, a rejuvenating spa, and a stunning outdoor pool, providing guests with ample opportunities for relaxation and rejuvenation."
    },
    {
      "id": "2",
      "name": "Hotel Annapurna",
      "price": 100,
      "img": "https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/v1/WanderMate/zgpubhnmahhywx21t1j2",
      "rating": 5,
      "freeCancellation": true,
      "reserveNow": true,
      "desc": "Hotel Annapurna is a renowned 5-star hotel in Kathmandu, offering stunning views of the Himalayas and a range of luxurious amenities. Guests can enjoy the hotel's spacious and elegantly designed rooms, which provide a perfect blend of comfort and style. The hotel features multiple dining options, including a rooftop restaurant with panoramic views of the city and the majestic mountains. Additionally, guests can unwind at the hotel's spa, take a dip in the outdoor pool, or stay active at the well-equipped fitness center."
    },
    {
      "id": "3",
      "name": "Hotel Radisson",
      "price": 80,
      "img": "https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/v1/WanderMate/ymdp7tcjizdaoiiytyio",
      "rating": 3,
      "freeCancellation": true,
      "reserveNow": true,
      "desc": "Hotel Radisson is a modern and stylish 5-star hotel located in the heart of Kathmandu, offering exceptional service and a range of amenities. The hotel features contemporary and well-appointed rooms with modern amenities, ensuring a comfortable and luxurious stay for guests. Guests can indulge in a variety of dining options, from international cuisine to local Nepali delicacies, catering to diverse tastes. The hotel also boasts a state-of-the-art fitness center, a relaxing spa, and a rooftop pool with stunning city views, providing guests with ample opportunities for relaxation and rejuvenation."
    },
    {
      "id": "4",
      "name": "Lumbini Garden Retreat",
      "price": 150,
      "img": "https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/v1/WanderMate/snng9ztpxqockoxj4v7n",
      "rating": 5,
      "freeCancellation": true,
      "reserveNow": true,
      "desc": "Lumbini Garden Retreat is a peaceful and serene 5-star hotel located in the birthplace of Lord Buddha, offering a tranquil atmosphere and a range of amenities. Guests can immerse themselves in the hotel's serene surroundings, with lush gardens and peaceful courtyards that provide a perfect setting for relaxation and spiritual rejuvenation. The hotel features spacious and elegantly designed rooms, with traditional Nepali touches and modern amenities. Guests can indulge in the hotel's wellness offerings, including yoga and meditation sessions, or explore the nearby UNESCO World Heritage Site of Lumbini, the birthplace of Buddha."
    },
    {
      "id": "5",
      "name": "Hyatt Regency",
      "price": 180,
      "img": "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/6608967321245190-d9dabdf82d2611eabcfc0242ac110003.jpg",
      "rating": 4,
      "freeCancellation": true,
      "reserveNow": true,
      "desc": "Hyatt Regency is a luxurious 4-star hotel located in Kathmandu, offering modern amenities, exceptional service, and a range of dining options. The hotel features stylish and contemporary rooms with modern amenities, ensuring a comfortable and enjoyable stay for guests. Guests can indulge in a variety of dining experiences, from international cuisine to local Nepali delicacies, catering to diverse tastes. The hotel also boasts a state-of-the-art fitness center, a relaxing spa, and an outdoor pool, providing guests with ample opportunities for relaxation and rejuvenation."
    },
    {
      "id": "6",
      "name": "Marriott Hotel",
      "price": 200,
      "img": "https://royalcollege.edu.np/wp-content/uploads/2020/04/HQ5A8705_20190611131701.jpg",
      "rating": 5,
      "freeCancellation": false,
      "reserveNow": true,
      "desc": "Marriott Hotel is a world-renowned 5-star hotel located in Kathmandu, offering luxurious accommodations, exceptional service, and a range of amenities. Guests can indulge in the hotel's opulent rooms and suites, featuring elegant decor, modern amenities, and stunning views of the city or the Himalayas. The hotel boasts multiple dining options, from fine dining restaurants to casual cafes, catering to diverse culinary preferences. Additionally, guests can unwind at the hotel's spa, stay active at the well-equipped fitness center, or take a dip in the outdoor pool, surrounded by lush gardens."
    },
    {
      "id": "7",
      "name": "Soaltee Crowne Plaza",
      "price": 160,
      "img": "https://lh4.googleusercontent.com/proxy/cguEeVMN81BkYeeUl8EpVCzts4PTtUcx1H2TSsw-5hzcHhYY3-DvdZviVpr3GrzSLAE4cG7qNqE",
      "rating": 4,
      "freeCancellation": true,
      "reserveNow": false,
      "desc": "Soaltee Crowne Plaza is a 4-star hotel located in Kathmandu, offering comfortable accommodations, a range of amenities, and exceptional service. The hotel features well-appointed rooms with modern amenities, ensuring a comfortable and enjoyable stay for guests. Guests can indulge in a variety of dining options, from international cuisine to local Nepali delicacies, catering to diverse tastes. The hotel also boasts a fitness center, a relaxing spa, and an outdoor pool, providing guests with ample opportunities for relaxation and rejuvenation."
    }
  ]
  return (
     <>

     <div className='overflow-hidden pb-4'>
     
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

    {/* <div className="w-full flex flex-wrap gap-3 justify-center translate-y-6">
    {hotels.map((hotel,index)=>(
        <div className="w-[48%]" key={index}>
          <div className="w-full relative">
            <img className="w-full h-[250px] object-cover rounded-lg" src={hotel.img}/>
            <div className="w-full flex justify-between absolute bottom-0 text-white font-medium px-2 py-2">
            <p>{hotel.name}</p>
            <p>{hotel.price}</p>
            </div>


          </div>
        </div>
      ))}
    </div> */}

    <div className="ml-4">
      <img src="https://i.pinimg.com/originals/8b/ef/50/8bef50a09e62cf3d554504b90c1cd7f4.jpg"className="rounded-full h-10 w-10 translate-y-8" />
      <p className="translate-x-12">Top Travel Packages</p>
    </div>

    <div className="w-full flex flex-wrap gap-3 justify-center translate-y-6 pb-4">
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
     

    </div>

  
   
    
    
    </>   
    
  );
};

export default HomePage;
