

import { useEffect, useState } from "react";

const Dashboard_hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newHotel, setNewHotels] = useState({
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
    loadHoteltoLocalStorage();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewHotels((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const loadHoteltoLocalStorage = () => {
    const storedHotels = localStorage.getItem("hotels");
    if (storedHotels) {
      setHotels(JSON.parse(storedHotels));
    }
  };

  const saveHotelsToLocalStorage = (hotels) => {
    localStorage.setItem("hotels", JSON.stringify(hotels));
  };

  const HandleAdd = () => {
    setShowForm(true);
  };

  // const handleSaveHotel = (e) => {
  //   e.preventDefault(); // Prevent the default form submission behavior
  //   const newId = hotels.length ? hotels[hotels.length - 1].id + 1 : 1;
  //   const updatedhotels = [...hotels, { ...newHotel, id: newId }];
  //   setHotels(updatedhotels);
  //   saveHotelsToLocalStorage(updatedhotels);
  //   setShowForm(false);
  //   setNewHotels({
  //     id: "",
  //     name: "",
  //     price: "",
  //     img: "",
  //     rating: "",
  //     freeCancellation: false,
  //     reservation: false,
  //     desc: "",
  //   });
  // };

  const handleSaveHotel = () => {
    const updatedhotels = [...hotels, newHotel];
    setHotels(updatedhotels);
    saveHotelsToLocalStorage(updatedhotels);
    setShowForm(false);
    setNewHotels({
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
          className="bg-blue-700 hover:bg-gray-400 ml-14 pt-2 pb-2 pl-2 pr-2 rounded-md"
        >
          Add Hotels
        </button>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-800 text-white ">
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
              {hotels.map((hotel, index) => (
                <tr
                  key={index}
                  className="bg-blue-100 border-b hover:bg-gray-200"
                >
                  <td className="w-1/5 py-3 px-4">{hotel.id}</td>
                  <td className="w-1/5 py-3 px-4 break-words">{hotel.name}</td>
                  <td className="w-1/5 py-3 px-4">{hotel.img}</td>
                  <td className="w-1/5 py-3 px-4">{hotel.price}</td>
                  <td className="w-1/5 py-3 px-4">{hotel.desc}</td>
                  <div className="flex mt-2 mr-4">
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
          <div className="max-w-md mx-auto p-4 bg-blue-200 shadow-md rounded mt-6">
            <form onSubmit={handleSaveHotel}>
              <h1 className="text-3xl font-bold mb-4 text-indigo-600">
                Add new Hotels
              </h1>

              <label className="block mb-2">
                <span className="text-gray-700">ID:</span>
                <input
                  type="text"
                  name="id"
                  value={newHotel.id}
                  onChange={handleChange}
                  className="block w-full pl-2 text-2xl text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                />
              </label>

              <label className="block mb-2">
                <span className="text-gray-700">Name:</span>
                <input
                  type="text"
                  name="name"
                  value={newHotel.name}
                  onChange={handleChange}
                  className="block w-full pl-2 text-2xl text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                />
              </label>

              <label className="block mb-2">
                <span className="text-gray-700">Price:</span>
                <input
                  type="number"
                  name="price"
                  onChange={handleChange}
                  value={newHotel.price}
                  className="block w-full pl-2 text-2xl text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                />
              </label>

              <label className="block mb-2">
                <span className="text-gray-700">Image URL:</span>
                <input
                  type="text"
                  value={newHotel.img}
                  name="img"
                  onChange={handleChange}
                  className="block w-full pl-2 text-2xl text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                />
              </label>

              <label className="block mb-2">
                <span className="text-gray-700">Rating:</span>
                <input
                  type="text"
                  value={newHotel.rating}
                  name="rating"
                  onChange={handleChange}
                  className="block w-full pl-2 text-2xl text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                />
              </label>

              <label className="block mb-2">
                <input
                  type="checkbox"
                  name="freeCancellation"
                  checked={newHotel.freeCancellation}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-gray-700">Free Cancellation</span>
              </label>

              <label className="block mb-2">
                <input
                  type="checkbox"
                  name="reservation"
                  checked={newHotel.reservation}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-gray-700">Reservation</span>
              </label>

              <label className="block mb-2">
                <span className="text-gray-700">Description:</span>
                <textarea
                  name="desc"
                  value={newHotel.desc}
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

export default Dashboard_hotel;
