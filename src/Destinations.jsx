import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Destinations = ()=>{
    const [destinations ,setTopdestination] = useState([]);
    const{id} = useParams();
    useEffect(()=>{
        const fetchTopdestination=()=>{
            const response = fetch(`http://localhost:3000/destinations/${id}`)
            const data = response.json();
            setTopdestination(data);
        }
        fetchTopdestination();
    },[])
    return(
        <>
        <div>
            {destinations.img}
        </div>
        </>
    )


}
export default Destinations