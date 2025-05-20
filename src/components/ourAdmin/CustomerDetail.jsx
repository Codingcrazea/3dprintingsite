import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navb } from './test';
function CustomerDetail() {






  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [orders, setOrders] = useState([]);

  // Dummy customer detail data
  const dummyCustomerData = {
    1: { name: "Rahul Sharma", mobile: "9876543210", address: "Delhi, India", email: "rahul@example.com", joined: "2022-01-10" },
    2: { name: "Sneha Verma", mobile: "9123456789", address: "Mumbai, India", email: "sneha@example.com", joined: "2023-04-22" },
    3: { name: "Amit Joshi", mobile: "9988776655", address: "Pune, India", email: "amit@example.com", joined: "2022-08-15" },
    4: { name: "Kiran Mehta", mobile: "9234567890", address: "Ahmedabad, India", email: "kiran@example.com", joined: "2023-02-01" },
    5: { name: "Ravi Kumar", mobile: "9090909090", address: "Chennai, India", email: "ravi@example.com", joined: "2021-11-30" },
  };

  // Dummy order data by customer ID
  const dummyOrders = {
    1: [
      { orderId: 'ORD101', date: '2023-07-10', amount: 2500 },
      { orderId: 'ORD102', date: '2023-08-15', amount: 1800 },
    ],
    2: [
      { orderId: 'ORD201', date: '2023-09-01', amount: 3200 },
    ],
    3: [],
    4: [
      { orderId: 'ORD401', date: '2023-06-22', amount: 1450 },
      { orderId: 'ORD402', date: '2023-07-30', amount: 2050 },
    ],
    5: [
      { orderId: 'ORD501', date: '2023-05-10', amount: 1700 },
    ],
  };

  useEffect(() => {
    // TODO: Replace this with real API call in future
    /*
    axios.get(`http://localhost:5000/api/customers/${id}`)
      .then(res => {
        setCustomer(res.data.customer);
        setOrders(res.data.orders);
      })
      .catch(err => console.error(err));
    */
    setCustomer(dummyCustomerData[id]);
    setOrders(dummyOrders[id] || []);
  }, [id]);

  if (!customer) {
    return <div className="p-6 text-gray-600">Loading customer details...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <Navb/>
      <h2 className="text-2xl font-semibold mb-4">Customer Details</h2>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Mobile:</strong> {customer.mobile}</p>
          <p><strong>Email:</strong> {customer.email}</p>
        </div>
        <div>
          <p><strong>Address:</strong> {customer.address}</p>
          <p><strong>Joined:</strong> {customer.joined}</p>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="bg-gray-50 p-4 rounded border">
          <h3 className="text-lg font-semibold mb-2">🛒 Orders</h3>
          {orders.length > 0 ? (
            <ul className="text-sm text-gray-700 list-disc ml-5">
              {orders.map(order => (
                <li key={order.orderId}>
                  Order ID: <strong>{order.orderId}</strong> | Date: {order.date} | Amount: ₹{order.amount}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-600">No orders found.</p>
          )}
        </div>

        <div className="bg-gray-50 p-4 rounded border">
          <h3 className="text-lg font-semibold mb-2">💬 Support History</h3>
          <p className="text-sm text-gray-600">Show recent support tickets or chat history.</p>
        </div>

        <div className="bg-gray-50 p-4 rounded border">
          <h3 className="text-lg font-semibold mb-2">💰 Wallet / Rewards</h3>
          <p className="text-sm text-gray-600">Display wallet balance, credits, or reward points.</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetail;
