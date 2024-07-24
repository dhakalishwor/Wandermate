import { useEffect, useState } from "react";

const Dashboard_packages = () => {
  const [packages, setPackages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newPackages, setNewPackages] = useState({
    id: "",
    name: "",
    price: "",
    img: "",
    rating: "",
    freeCancellation: false,
    reservation: false,
    desc: "",
  });

  useEffect(() => {
    loadPackagestoLocalStorage();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewPackages((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const loadPackagestoLocalStorage = () => {
    const storedPackages = localStorage.getItem("hotels");
    if (storedPackages) {
      setPackages(JSON.parse(storedPackages));
    }
  };

  const savePackagesToLocalStorage = (packages) => {
    localStorage.setItem("packages", JSON.stringify(packages));
  };

  const HandleAdd = () => {
    setShowForm(true);
  };


  const handleSaveHotel = () => {
    const updatedPackages = [...packages, newPackages];
    setPackages(updatedPackages);
    savePackagesToLocalStorage(updatedPackages);
    setShowForm(false);
    setNewPackages({
      name: "",
      price: "",
      img: "",
      rating: "",
      freeCancellation: false,
      reservation: false,
      desc: "",
    });
  };

  return (
    <>
      <div className="ml-4 mt-4">
        <button
          onClick={HandleAdd}
          className="bg-green-700 hover:bg-green-400 ml-14 pt-2 pb-2 pl-2 pr-2 rounded-md"
        >
          Add Packages
        </button>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white shadow-md rounded-lg ">
            <thead className="bg-gray-800 text-white ">
              <tr>
                <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">
                  Id
                </th>
                <th className="w-64 py-3 px-4 uppercase font-semibold text-sm">
                  Name
                </th>
                <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">
                  Image
                </th>
                <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">
                  Price
                </th>
                <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">
                  Description
                </th>
                <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">
                  Update
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {packages.map((packages, index) => (
                <tr
                  key={index}
                  className="bg-blue-100 border-b hover:bg-gray-200"
                >
                  <td className="w-1/5 py-3 px-4">{packages.id}</td>
                  <td className="w-1/5 py-3 px-4 break-words">{packages.name}</td>
                  <td className="w-1/5 py-3 px-4">{packages.img}</td>
                  <td className="w-1/5 py-3 px-4">{packages.price}</td>
                  <td className="w-1/5 py-3 px-4">{packages.desc}</td>
                  <div className="flex items-center mt-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                      Delete
                    </button>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showForm && (
          <div className="max-w-md mx-auto p-4 bg-green-400 shadow-md rounded mt-6">
            <form onSubmit={handleSaveHotel}>
              <h1 className="text-3xl font-bold mb-4 text-indigo-600">
                Add new Packages
              </h1>

              <label className="block mb-2">
                <span className="text-gray-700">ID:</span>
                <input
                  type="text"
                  name="id"
                  value={newPackages.id}
                  onChange={handleChange}
                  className="block w-full pl-10 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                />
              </label>

              <label className="block mb-2">
                <span className="text-gray-700">Name:</span>
                <input
                  type="text"
                  name="name"
                  value={newPackages.name}
                  onChange={handleChange}
                  className="block w-full pl-10 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                />
              </label>

              <label className="block mb-2">
                <span className="text-gray-700">Price:</span>
                <input
                  type="number"
                  name="price"
                  onChange={handleChange}
                  value={newPackages.price}
                  className="block w-full pl-10 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                />
              </label>

              <label className="block mb-2">
                <span className="text-gray-700">Image URL:</span>
                <input
                  type="text"
                  value={newPackages.img}
                  name="img"
                  onChange={handleChange}
                  className="block w-full pl-10 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                />
              </label>

              <label className="block mb-2">
                <span className="text-gray-700">Rating:</span>
                <input
                  type="text"
                  value={newPackages.rating}
                  name="rating"
                  onChange={handleChange}
                  className="block w-full pl-10 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                />
              </label>

              

              <label className="block mb-2">
                <span className="text-gray-700">Description:</span>
                <textarea
                  name="desc"
                  value={newPackages.desc}
                  onChange={handleChange}
                  className="block w-full pl-10 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                />
              </label>

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard_packages;