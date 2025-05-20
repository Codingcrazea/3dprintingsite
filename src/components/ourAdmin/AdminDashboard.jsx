// import React from 'react';
// import { CardComponent } from './multiuse/Cardcomponent';
// import { PieChart, Pie, Tooltip, Cell } from 'recharts';

// const data = [
//   { name: "Active Users", value: 400 },
//   { name: "Job Posts", value: 300 },
//   { name: "Applications", value: 200 },
//   { name: "Employers", value: 100 },
// ];

// const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

// export const Admin_Dashboard = () => {
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

//       {/* First Row: Three Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         <CardComponent title="Users" value="1500" buttonText="Manage Users" />
//         <CardComponent title="Job Posts" value="500" buttonText="View Jobs" />
//         <CardComponent title="Applications" value="1200" buttonText="View Applications" />
//       </div>

//       {/* Second Row: Statistics Chart */}
//       <div className="bg-white p-6 rounded-lg shadow-lg flex justify-center">
//         <PieChart width={400} height={300}>
//           <Pie data={data} cx={200} cy={150} innerRadius={60} outerRadius={100} fill="#8884d8" dataKey="value">
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//         </PieChart>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import { CardComponent } from './multiuse/Cardcomponent';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, PieChart, Pie, Cell } from 'recharts';
import { Users, Building, Briefcase, FileText } from "lucide-react";
import axios from "axios";


const data = [
  { name: "Active Users", value: 400 },
  { name: "Job Posts", value: 300 },
  { name: "Applications", value: 200 },
  { name: "Employers", value: 100 },

];
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

















// const chartData = {
//   "7days": [
//     { name: "Day 1", value: 100 },
//     { name: "Day 2", value: 120 },
//     { name: "Day 3", value: 90 },
//     { name: "Day 4", value: 140 },
//     { name: "Day 5", value: 110 },
//     { name: "Day 6", value: 130 },
//     { name: "Day 7", value: 150 }
//   ],
//   "1month": [
//     { name: "Week 1", value: 500 },
//     { name: "Week 2", value: 550 },
//     { name: "Week 3", value: 520 },
//     { name: "Week 4", value: 600 }
//   ],
//   "3months": [
//     { name: "Month 1", value: 1500 },
//     { name: "Month 2", value: 1700 },
//     { name: "Month 3", value: 1600 }
//   ],
//   "6months": [
//     { name: "Month 1", value: 3000 },
//     { name: "Month 2", value: 3200 },
//     { name: "Month 3", value: 3100 },
//     { name: "Month 4", value: 3500 },
//     { name: "Month 5", value: 3400 },
//     { name: "Month 6", value: 3600 }
//   ],
//   "12months": [
//     // {month name dalna hai }
//     { name: "Month 1", value: 6000 },
//     { name: "Month 2", value: 6200 },
//     { name: "Month 3", value: 6100 },
//     { name: "Month 4", value: 6500 },
//     { name: "Month 5", value: 6400 },
//     { name: "Month 6", value: 6600 },
//     { name: "Month 7", value: 6800 },
//     { name: "Month 8", value: 7000 },
//     { name: "Month 9", value: 7100 },
//     { name: "Month 10", value: 7300 },
//     { name: "Month 11", value: 7400 },
//     { name: "Month 12", value: 7600 }
//   ]
// };








// if (loading) return <p>Loading data...</p>;
// if (error) return <p>Error: {error}</p>;     
export const Admin_Dashboard = () => {
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);
  const [UserChartData, setUserChartData] = useState([]);
  const [CompanyChartData,setCompanyChartData] = useState([]);
  const fetchUserStatics = async () => {
    try {

      const response = await axios.get('http://localhost:5000/api/admin/list_userStatics');
      if (response.data.stat) {
        let data = response.data.data;
        
        setUserChartData(data);
        setloading(false);
      }


    } catch (error) {
      console.error(error);
      setError(error);
    }
  }


  const [info,setinfo] = useState(null);
  const admin_id = sessionStorage.getItem("admin_id");
  
  const getAdminDetails = async () => {
    
    try {
      
      const response = await axios.post('http://localhost:5000/api/admin/get_admin_details', { Admin_Id: admin_id });
      if (response.data.success) {
       
        const d = response.data.d;
        setinfo(d);
        
      }

    } catch (error) {
      console.error('Error:', error);
    }
  }







 
  const fetchCompanyStatics = async ()=>{
    try{
      const response = await axios.get('http://localhost:5000/api/admin/list_companyStatics');
      if (response.data.stat) {
        let data = response.data.data;
        
        
        setCompanyChartData(data);
        setloading(false);
      }
    }catch(error){
      console.error(error);
      setError(error);
    }
  }








  const [adminData,setadminData] =useState([]);
  const CoutRecords = async () =>{
    try{
     const response = await axios.get("http://localhost:5000/api/admin/count_records");
     if(response.data.success){
      setadminData(response.data.data);
     }
    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    // fetchUserStatics();
    // fetchCompanyStatics();
    // getAdminDetails();
    // CoutRecords();
   
  }, []);

  const [CompanySelectedRange,setCompanySelectedRange] = useState("7days");
  const [UserSelectedRange, setUserSelectedRange] = useState("7days");
  

  return (
    <div className="p-6">


      {/* First Row: Three Cards */}

      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Learn With Effectively With Us!</h2>
        <p className="text-sm mb-4">Get 30% off every course in January.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <CardComponent title="User" value={501} buttonText="Manage Users" icon={<Users size={21}  />} />
          <CardComponent title="Order" value="101" buttonText="Manage Companies" icon={<Building size={21} />} />
       
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Put In Div and hover it to scale it up of mouse hover */}

      </div>

      {/* Second Row: Statistics Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Users</h3>
          <select
            className="p-2 border rounded"
            value={UserSelectedRange}
            onChange={(e) => setUserSelectedRange(e.target.value)}
          >
            <option value="7days">Last 7 Days</option>
            <option value="1month">Last 1 Month</option>
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="12months">Last 12 Months</option>
          </select>
        </div>

        <LineChart width={600} height={300} data={UserChartData[UserSelectedRange]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </LineChart>

        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Reports & Analytics</h2>
          <PieChart width={400} height={300}>
            <Pie data={data} cx={200} cy={150} innerRadius={60} outerRadius={100} fill="#8884d8" dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Companies</h3>
          <select
            className="p-2 border rounded  "
            value={CompanySelectedRange}
            onChange={(e) => setCompanySelectedRange(e.target.value)}
          >
            <option value="7days">Last 7 Days</option>
            <option value="1month">Last 1 Month</option>
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="12months">Last 12 Months</option>
          </select>
        </div>
        <LineChart width={600} height={300} data={CompanyChartData[CompanySelectedRange]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </div>
    </div>
  );
}
