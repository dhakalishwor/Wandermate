import { useState } from "react"
import Nav from "./Nav"

const Hotel = () =>{
    const[hotels] = useState([
        
{
"id": "1",
"name": "Hotel Yak & Yeti",
"price": 120,
"img": "https://www.yakandyeti.com/templates/yootheme/cache/central-8106e063.jpeg",
"rating": 5,
"freeCancellation": true,
"reserveNow": true,
"desc": "Hotel Yak & Yeti is a luxurious 5-star hotel located in the heart of Kathmandu, offering world-class amenities and exceptional service. Guests can indulge in the hotel's opulent accommodations, featuring elegantly appointed rooms and suites with modern amenities."
},
{
"id": "2",
"name": "Hotel Annapurna",
"price": 100,
"img": "https://tse4.mm.bing.net/th?id=OIP.WjIJpfGpldxN5vrVLI3ddQHaD3&pid=Api&P=0&h=220",
"rating": 5,
"freeCancellation": true,
"reserveNow": true,
"desc": "Hotel Annapurna is a renowned 5-star hotel in Kathmandu, offering stunning views of the Himalayas and a range of luxurious amenities. Guests can enjoy the hotel's spacious and elegantly designed rooms, which provide a perfect blend of comfort and style."
},
{
"id": "3",
"name": "Hotel Radisson",
"price": 80,
"img": "https://tse2.mm.bing.net/th?id=OIP._qT_Rqhk59lwP6G0nS1lcAHaE8&pid=Api&P=0&h=220",
"rating": 3,
"freeCancellation": true,
"reserveNow": true,
"desc": "Hotel Radisson is a modern and stylish 5-star hotel located in the heart of Kathmandu, offering exceptional service and a range of amenities. The hotel features contemporary and well-appointed rooms with modern amenities, ensuring a comfortable and luxurious stay for guests."
},
{
"id": "4",
"name": "Lumbini Garden Retreat",
"price": 150,
"img": "https://www.lumbinibuddhagarden.com/public/images/upload/gallery/entrance-lumbini-buddha-garden.jpg",
"rating": 5,
"freeCancellation": true,
"reserveNow": true,
"desc": "Lumbini Garden Retreat is a peaceful and serene 5-star hotel located in the birthplace of Lord Buddha, offering a tranquil atmosphere and a range of amenities. Guests can immerse themselves in the hotel's serene surroundings, with lush gardens."
},
{
"id": "5",
"name": "Hyatt Regency",
"price": 180,
"img": "https://tse1.mm.bing.net/th?id=OIP.DSWzXeclxN9G30JzmwmVKgAAAA&pid=Api&P=0&h=220",
"rating": 4,
"freeCancellation": true,
"reserveNow": true,
"desc": "Hyatt Regency is a luxurious 4-star hotel located in Kathmandu, offering modern amenities, exceptional service, and a range of dining options. The hotel features stylish and contemporary rooms with modern amenities, ensuring a comfortable and enjoyable stay for guests."
},
{
"id": "6",
"name": "Marriott Hotel",
"price": 200,
"img": "https://travelspan.in/wp-content/uploads/2019/06/ktmmc-exterior-marriott-kathmandu.jpg",
"rating": 5,
"freeCancellation": false,
"reserveNow": true,
"desc": "Marriott Hotel is a world-renowned 5-star hotel located in Kathmandu, offering luxurious accommodations, exceptional service, and a range of amenities. Guests can indulge in the hotel's opulent rooms and suites, featuring elegant decor, modern amenities, and stunning views of the city or the Himalayas."
},
{
"id": "7",
"name": "Soaltee Crowne Plaza",
"price": 160,
"img": "https://tse3.mm.bing.net/th?id=OIP.ZGWK6mRHLn-MZ_YuAE3PgwHaE8&pid=Api&P=0&h=220",
"rating": 4,
"freeCancellation": true,
"reserveNow": false,
"desc": "Soaltee Crowne Plaza is a 4-star hotel located in Kathmandu, offering comfortable accommodations, a range of amenities, and exceptional service. The hotel features well-appointed rooms with modern amenities, ensuring a comfortable and enjoyable stay for guests."
}

    ])
    return(
        <>
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-700">WanderMate</h1>
          <Nav></Nav>
        </div>



        <div className=" flex flex-wrap gap-3 pl-14 pt-10 ">
        {hotels.map((hotel, index)=>(
            <div key={index} className="bg-blue-100 rounded-md pl-2 w-64 shadow-black shadow-lg">
                {/* <h1>{hotel.id}</h1> */}
                
                <div className="relative">
                <img src={hotel.img} className="h-40 w-full rounded pt-2 pr-2" />
                <p className="absolute top-2 right-3 bg-yellow-200 pr-2 pl-2"> {hotel.rating}</p>

                </div>
                <h2 className="font-bold">{hotel.name}</h2>
                <p>{hotel.desc.slice(0,140)}...</p>
                <div className="flex items-center mb-2">
                <p>${hotel.price}</p>
                <button className="bg-green-600 text-white pb-2 pt-2 pr-2 pl-2 translate-x-28 hover:bg-green-900">Book Now</button>
                </div>
            </div>

        ))}
        </div>

        
        </>
    )
}

export default Hotel