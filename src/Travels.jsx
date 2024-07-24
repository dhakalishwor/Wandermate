import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Travels=()=>{
    const[travelPackages,setTravelpackages] = useState([]);
    const {id} = useParams()
    useEffect(()=>{
        const fetchTravels=async()=>{
            const response = await fetch(`http://localhost:3000/travelPackages/${id}`)
            const data = response.json();
            setTravelpackages(data);

        }
        fetchTravels()

    })
    return(
        <>
        <div>
            {travelPackages.img}
            {travelPackages.name}
        </div>
        </>
    )
    

    }

export default Travels