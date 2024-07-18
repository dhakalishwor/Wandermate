import { useEffect, useState } from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import StarRating from "./StarRating";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchHotels = async () => {
      const response = await fetch(`http://localhost:3000/hotels/${id}`);
      const data = await response.json();
      setHotels(data);
      console.log(data);
    };
    fetchHotels();
  }, []);
  return (
    <>
      <div>
        <img src={hotels.img} />
        <span><StarRating rating={hotels.rating}/></span>
        <h1>{hotels.name}</h1>
        <p>{hotels.desc}</p>
      </div>
    </>
  );
};

export default Hotel;
