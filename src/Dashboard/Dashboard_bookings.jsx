import { useEffect, useState } from "react";

const Dashboard_bookings = () => {
  const [bookings, setbooking] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newBookings, setNewBookings] = useState({
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
    loadBookingsToLocalStorage();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewBookings((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const loadBookingsToLocalStorage = () => {
    const storedHotels = localStorage.getItem("hotels");
    if (storedHotels) {
      setbooking(JSON.parse(storedHotels));
    }
  };

  const saveBookingsToLocalStorage = (hotels) => {
    localStorage.setItem("bookings", JSON.stringify(hotels));
  };

  const HandleAdd = () => {
    setShowForm(true);
  };

  const handleSaveHotel = () => {
    const updatedhotels = [...bookings, newBookings];
    setbooking(updatedhotels);
    saveBookingsToLocalStorage(updatedhotels);
    setShowForm(false);
    setNewBookings({
      name: "",
      hotelname: "",
      hotelprice: "",
      destination: "",
      destinationprice: "",
    });
  };

  return (
    <>
      <div className="ml-4 mt-4">
        <button
          onClick={HandleAdd}
          className="bg-blue-700 hover:bg-gray-400 ml-14 pt-2 pb-2 pl-2 pr-2 rounded-md"
        >
          Add Bookings
        </button>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-800 text-white ">
              <tr>
                <th className="w-64 py-3 px-4 uppercase font-semibold text-sm">
                  Name
                </th>
                <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">
                  Hotel Name
                </th>
                <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">
                  Hotel Price
                </th>
                <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">
                  Destination
                </th>
                <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">
                  Destination Price
                </th>
                <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">
                  Update
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {bookings.map((bookings, index) => (
                <tr
                  key={index}
                  className="bg-blue-100 border-b hover:bg-gray-200"
                >
                  <td className="w-1/5 py-3 px-4">{bookings.name}</td>
                  <td className="w-1/5 py-3 px-4 break-words">
                    {bookings.hotelname}
                  </td>
                  <td className="w-1/5 py-3 px-4">{bookings.hotelprice}</td>
                  <td className="w-1/5 py-3 px-4">{bookings.destination}</td>
                  <td className="w-1/5 py-3 px-4">
                    {bookings.destinationprice}
                  </td>
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
                Add New Bookings
              </h1>

              <label className="block mb-2">
                <span className="text-gray-700">Name:</span>
                <input
                  type="text"
                  name="name"
                  value={newBookings.name}
                  onChange={handleChange}
                  className="block w-full pl-2 text-2xl text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                />
              </label>

              <label className="block mb-2">
                <span className="text-gray-700">Hotel:</span>
                <input
                  type="text"
                  name="hotelname"
                  value={newBookings.hotelname}
                  onChange={handleChange}
                  className="block w-full pl-2 text-2xl text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                />
              </label>

              <label className="block mb-2">
                <span className="text-gray-700">Hotel Price:</span>
                <input
                  type="number"
                  name="hotelprice"
                  onChange={handleChange}
                  value={newBookings.hotelprice}
                  className="block w-full pl-2 text-2xl text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                />
              </label>

              <label className="block mb-2">
                <span className="text-gray-700">Destination: </span>
                <input
                  type="text"
                  value={newBookings.destination}
                  name="destination"
                  onChange={handleChange}
                  className="block w-full pl-2 text-2xl text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                />
              </label>

              <label className="block mb-2">
                <span className="text-gray-700">Destinatio Price:</span>
                <input
                  type="text"
                  value={newBookings.destinationprice}
                  name="destinationprice"
                  onChange={handleChange}
                  className="block w-full pl-2 text-2xl text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
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

export default Dashboard_bookings;
