import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Customers() {





  
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  // Filter states
  const [nameFilter, setNameFilter] = useState('');
  const [mobileFilter, setMobileFilter] = useState('');
  const [addressFilter, setAddressFilter] = useState('');

  const dummyData = [
    { id: 1, name: "Rahul Sharma", mobile: "9876543210", address: "Delhi, India" },
    { id: 2, name: "Sneha Verma", mobile: "9123456789", address: "Mumbai, India" },
    { id: 3, name: "Amit Joshi", mobile: "9988776655", address: "Pune, India" },
    { id: 4, name: "Kiran Mehta", mobile: "9234567890", address: "Ahmedabad, India" },
    { id: 5, name: "Ravi Kumar", mobile: "9090909090", address: "Chennai, India" },
  ];

  useEffect(() => {
    // 👇 Dummy Data now, can replace with API
    // 🔒 Future API call to fetch real customer data
    /*
    axios.get("http://localhost:5000/api/customers")
      .then(response => {
        if (response.data.success) {
          setCustomers(response.data.customers);
        }
      })
      .catch(error => {
        console.log("Error fetching customers", error);
      });
    */
    setCustomers(dummyData);
    setFilteredCustomers(dummyData);
  }, []);

  useEffect(() => {
    const filtered = customers.filter((cust) =>
      cust.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      cust.mobile.includes(mobileFilter) &&
      cust.address.toLowerCase().includes(addressFilter.toLowerCase())
    );
    setFilteredCustomers(filtered);
  }, [nameFilter, mobileFilter, addressFilter, customers]);

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Customer List</h2>

      {/* 🔍 Filter Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by Name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Search by Mobile"
          value={mobileFilter}
          onChange={(e) => setMobileFilter(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Search by Address"
          value={addressFilter}
          onChange={(e) => setAddressFilter(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>

      {/* 📋 Customer Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Mobile</th>
              <th className="border px-4 py-2 text-left">Address</th>
              <th className="border px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{customer.name}</td>
                  <td className="border px-4 py-2">{customer.mobile}</td>
                  <td className="border px-4 py-2">{customer.address}</td>
                  <td className="border px-4 py-2">
                    <Link to={`/cd/${customer.id}`} className="text-blue-600 hover:underline">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border px-4 py-2 text-center text-gray-500" colSpan="4">
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;
