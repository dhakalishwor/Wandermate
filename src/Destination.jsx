
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    const fetchDestination = async () => {
      const response = await fetch("http://localhost:3000/destinations");
      const data = await response.json();
      setDestinations(data);
    };
    fetchDestination();
  });

  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-700">WanderMate</h1>
        <Nav></Nav>
      </div>
      <div className="px-4 gap-3">
        {destinations.map((destination) => (
          <div key={destination}>
            <img src={destination.img} className="w-full" />
            <h2>{destination.name}</h2>
            <p> {destination.price}</p>
            <p>{destination.desc}</p>
            <Link to={destination.id} className="bg-green-600 text-white pb-2 pt-2 pr-2 pl-2 translate-x-28  hover:bg-green-900">Book Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
