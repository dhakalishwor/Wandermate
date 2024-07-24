import { useState } from "react";
import { useEffect } from "react";

const Dashboard_packages = () => {
  const [travelPackages, setTravelpackages] = useState([]);
  useEffect(() => {
    const fecthTravelspackages = async () => {
      const response = await fetch("http://localhost:3000/travelPackages");
      const data = await response.json();
      setTravelpackages(data);
    };
    fecthTravelspackages();
  }, []);

  return (
    <>
      <table>
        <tr className="justify-between">
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {travelPackages.map((travelPackages) => (
          <tr key={travelPackages.id} className="justify-between">
            <td>{travelPackages.id}</td>
            <td>{travelPackages.name}</td>
            <td>{travelPackages.price}</td>
            <div>
              <button>Add</button>
              <button>Delete</button>
            </div>
          </tr>
        ))}
      </table>
    </>
  );
};
export default Dashboard_packages;
