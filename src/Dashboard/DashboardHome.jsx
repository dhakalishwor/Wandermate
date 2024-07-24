import { Link, Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Dashboard_hotel from "./Dashboard_hotel"
import Dashboard_packages from "./Dashboard_packages"
import Dashboard_users from "./Dashboard_users"
import Dashboard_bookings from "./Dashboard_bookings"



const DashboardHome = () =>{
    return(
        <>
        <div className="flex">
        <div>
            <Sidebar/>
        </div>
        
        <div>
        <Paths/>

        </div>
        </div>
        
    
        </>

    )

}
export default DashboardHome

function Sidebar(){
    return(
        
<ul className="flex-col w-60 bg-gray-800 text-white h-screen text-xl"> 
    <li className=" hover:bg-gray-800 ">
    Travel Dashboard
    </li>

    <li className=" hover:bg-gray-600 translate-y-12">
        <Link to='*'>Dashboard Home</Link>
    </li>

    <li className=" hover:bg-gray-600 translate-y-12">
   <Link to='hotels'>Hotels</Link>
   </li>

    <li className=" hover:bg-gray-600 translate-y-12">
        <Link to='users'>Users</Link>
    </li>

    <li className=" hover:bg-gray-600 translate-y-12">
        <Link to='travel_packages'>Travel Packages</Link>
    </li>
    <li className=" hover:bg-gray-600 translate-y-12">
   <Link to='bookings'>Bookings</Link>
   </li>

  
</ul>
)}

const Paths = () =>{
    return(
    <Routes>
        {/* <Route path='/' element={<DashboardHome/>}></Route> */}
        <Route path="hotels" element={<Dashboard_hotel/>}></Route>
        <Route path="users" element={<Dashboard_users/>}></Route>
        <Route path="travel_packages" element={<Dashboard_packages/>}></Route>
        <Route path="bookings" element={<Dashboard_bookings/>}></Route>
        
        
    </Routes>

)}