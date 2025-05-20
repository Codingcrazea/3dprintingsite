import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { CardComponent } from "./multiuse/Cardcomponent";
import { Admin_Dashboard } from "./AdminDashboard";






import { Users, Building, Briefcase, FileText } from "lucide-react";
import UserProfile from "../UserProfile";
import Customers from "./Customers";
import Ordernewdsh from "./Ordernewdsh";
import { FaBars, FaTachometerAlt, FaUsers, FaBuilding, FaClipboardList, FaChartBar, FaUser, FaEnvelope, FaCog, FaProjectDiagram, FaMoon, FaCommentDots, FaImage, FaExpandArrowsAlt, FaSlidersH, FaBell } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { User2 } from "lucide-react";

import axios from "axios";
const data = [
  { name: "Active Users", value: 400 },
  { name: "Job Posts", value: 300 },
  { name: "Applications", value: 200 },
  { name: "Employers", value: 100 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];
export const Navb = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [admin, setAdmin] = useState([]);
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => console.error("Error attempting fullscreen:", err));
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(err => console.error("Error exiting fullscreen:", err));
    }
  };



  // let admin_id = sessionStorage.getItem("admin_id");
  const getAdminDetails = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/admin/get_admin_details",
        { Admin_Id: admin_id }
      );
      if (response.data.success) {



        setAdmin(response.data.d);
      }
    } catch (error) {
      console.log("Error fetching admin details", error);
    }
  }





  useEffect(() => {
    // getAdminDetails();

  })
  return (

    <div className="flex justify-end items-center p-4 bg-gray-100 shadow-md gap-4">
      <input type="text" placeholder="Search" className="p-2 rounded-lg border" />
      <div className="flex items-center space-x-4">
        {/* <FaMoon className="text-blue-500 cursor-pointer" size={20} /> */}
        <FaBell className="text-blue-500 cursor-pointer" size={24} />
        <FaCommentDots className="text-blue-500 cursor-pointer" size={20} />
        <FaImage className="text-gray-500 cursor-pointer" size={20} />
        <FaExpandArrowsAlt className="text-gray-500 cursor-pointer" size={20} onClick={() => { toggleFullscreen() }} />
        <div className="flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User2 size={21} />
          </div>
          <div className="ml-2">
            <p className="font-medium">{admin.Admin_Name}</p>
            <p className="text-xs text-gray-500">ADMIN</p>
          </div>
        </div>
        <FaSlidersH className="text-blue-500 cursor-pointer" size={20} />
      </div>

      <UserProfile dataa={{ admin }} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
const Sidebar = ({ setActiveComponent }) => {
  const [isOpen, setIsOpen] = useState(true);  // Track whether the sidebar is open or closed

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (<>


    <div className={`relative ${isOpen ? 'w-1/5' : 'w-16'} bg-black text-gray-400 p-4 min-h-screen overflow-auto transition-all duration-300  `}>
    
      <div className="flex justify-between items-center mb-4  bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent ">
        {isOpen && (
          <h2 className="text-xl font-bold text-start">
            <span className="text-sm md:text-l lg:text-base text-red-500">Roj</span>gar
          </h2>
        )}
        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full shadow-md focus:outline-none"
        >
          {isOpen ? <FaBars className="text-blue-500" /> : <FaBars />} 
        </button>

      </div>

      {/* Sidebar Items */}
      <ul className="space-y-2">
        <li
          className="flex items-center mb-2 cursor-pointer hover:bg-gray-200  rounded-lg transition-colors duration-500 font-semibold p-2  bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent "
          onClick={() => setActiveComponent("AdminDashboard")}
        >
          <FaTachometerAlt className="mr-2  " size={15} /> {isOpen && 'Dashboard'}
        </li>
        <li
          className="flex items-center mb-2 cursor-pointer hover:bg-gray-200  rounded-lg transition-colors duration-500 font-semibold p-2  bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent "
          onClick={() => setActiveComponent("Customers")}
        >
          <FaUsers className="mr-2 " size={15} /> {isOpen && 'Customers'} </li>
        <li
          className="flex items-center mb-2 cursor-pointer hover:bg-gray-200  rounded-lg transition-colors duration-500 font-semibold p-2   bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent"
          onClick={() => setActiveComponent("Manage Order")}
        >
          <FaBuilding className="mr-2" size={15} /> {isOpen && 'Manage Order'}
        </li>
   
     
      </ul>

      {/* Floating Toggle Button 
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 bg-gray-100 p-2 rounded-full shadow-md focus:outline-none"
      >
        {!isOpen && <FaBars />} 
      </button> */}
    </div>
  </>);
};





export default function AdminDashboard() {
  const [userData, setusersData] = useState([]);
  const [activeComponent, setActiveComponent] = useState("AdminDashboard");
  const CountRecords = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/admin/count_records");
      if (response.data.success) {
        setusersData(response.data.data);

      }
    } catch (error) {
      console.log(error);
    }
  }

useEffect(()=>{
  //  CountRecords();
},[])
 

const Companies = () => <>
    <CardComponent title="Companies" value={1001} buttonText="Manage Companies" icon={<Users size={21} /> } /> <ManageCompanies /> </>;

const Jobs = () => <CardComponent title="Order" value="500" buttonText="View Order" />;
const Applications = () => <CardComponent title="Applications" value={userData.appliedJobs} buttonText="View Applications" />;

  const Reports = () => (
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
  );
  

  const renderComponent = () => {
    switch (activeComponent) {
      case "AdminDashboard":
        return <Admin_Dashboard/>
      case "Customers":
        return <Customers/>
      case "Manage Order":
        return <Ordernewdsh/>;
     
      // case "Reports":
      //   return <Reports />;
      default:
        return <Admin_Dashboard />;
    }
  };

  return (<>

    <div className="flex flex-col md:flex-row min-h-screen">



      <Sidebar setActiveComponent={setActiveComponent} />


      <div className="flex-1 p-6 bg-gray-100 w-full">
        {/* Navbar - Always visible at the top */}
        <div className="-mt-4">
          <Navb />
        </div>

        {/* Dynamic Content Rendering */}
        <div className="w-full">{renderComponent()}</div>
      </div>
    </div>
  </>);
}
