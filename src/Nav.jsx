import { Link } from "react-router-dom"

const Nav=() => {
return(
    <>
    
    <nav className="flex space-x-4">
        <ul className="flex space-x-10 justify-self-auto items-center text-whiter">
          
            <li >
                <Link to= "/" className="hover:text-red-500">
                
                Home
                </Link>

            </li>
            <li>
                <Link to= "/destination" className="hover:text-red-500">
                Destination
                </Link>

            </li>

            <li>
                <Link to="/travelpackage" className="hover:text-red-500">
                Travel Package</Link>
            </li>
            <li>
                <Link to="/hotellist" className="hover:text-red-500"> Hotels</Link>
            </li>
        </ul>
    </nav>
    </>
)
}

export default Nav