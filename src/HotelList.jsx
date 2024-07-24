import { useEffect, useState } from "react"
import Nav from "./Nav"
import { Link } from "react-router-dom"
import StarRating from "./StarRating";

const HotelList = () =>{

    // const { id } = useParams();
    const[hotels,setHotels] = useState([]);
     useEffect (()=>{
        const fetchHotels = async()=>{
            const response = await fetch('http://localhost:3000/hotels')
            const data = await response.json();
            setHotels(data)
            console.log(data)
        } 
        fetchHotels()

    },[])



    
    return(
        <>
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-700">WanderMate</h1>
          <Nav></Nav>
        </div>



        <div className=" flex flex-wrap gap-3 pl-14 pt-10 ">
        {hotels.map((hotel)=>(
            <div key={hotel.id} className=" rounded-md pl-2 w-64 shadow-black shadow-lg">
                
                <div className="relative">
                <img src={hotel.img} className="h-40 w-full rounded pt-2 pr-2" />
                {/* <p className="absolute top-2 right-3 bg-yellow-200 pr-2 pl-2"> {hotel.rating}</p> */}

                </div>
                <span><StarRating rating={hotel.rating} /></span>
                <h2 className="font-bold">{hotel.name}</h2>
                <p>{hotel.desc.slice(0,140)}...</p>
                <div className="flex items-center mb-2">
                <p>${hotel.price}</p>
                <Link to={hotel.id} className="bg-green-600 text-white pb-2 pt-2 pr-2 pl-2 translate-x-28 hover:bg-green-900">Book Now</Link>
                </div>
            </div>

        ))}
        </div>

        
        </>
    )
}

export default HotelList