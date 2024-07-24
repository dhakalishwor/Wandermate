import { useEffect, useState } from "react";
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
        <div className="flex justify-between">
          <img src={hotels.img}  className="'h-40 w-64"/>
          <div>
            <img src={hotels.img} />
            <img src={hotels.img} />
          </div>
        </div>
        <span>
          <StarRating rating={hotels.rating} />
        </span>
        <h1>{hotels.name}</h1>
        <p>{hotels.desc}</p>
      </div>
    </>
  );
};

export default Hotel;
