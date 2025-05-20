import axios from "axios";
import  { useEffect, useState } from "react";
import {  FaTrash, FaSearch } from "react-icons/fa";
// import { MdBlock } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// We will get primary key of user and we have to search user detail using that key

// import { Users } from "lucide-react";
const ManageUsers = () => {







  
  const [error,seter] = useState(null);
  const [loading,setloading] = useState(true);
  const [users, setUser] = useState([]);
  const FindAllUsers = async() =>{
    try{
        const response  = await axios.get('http://localhost:5000/api/admin/list_users');
        if(response.data.stat){
           console.log(response.data.data);
           setUser(response.data.data);
           setloading(false);
        }      
    }
    
    
    
    
    
    
    
    
    
    
    
    catch(error){
       console.log(`Error Occured : ${error}`);
       seter(error);
    }
  }
  






  useEffect(()=>{
    //  FindAllUsers();
  },[]);
  
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Search Users
  const filteredUsers = users.filter((user) =>
    user.Name.toLowerCase().includes(search.toLowerCase()) ||
    user.Email.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Toggle User Status
  const toggleStatus = (id) => {
    setUser((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user
      )
    );
    toast.success("User status updated!");
  };

  // Delete User with Confirmation
  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUser(users.filter((user) => user.id !== id));
      toast.error("User deleted!");
    }
  };

  if(loading) return<>Loading... </>
  if(error) return <>{error}</>
  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>

      {/* Search Bar */}
      <div className="flex items-center mb-4">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Rows Per Page Selector */}
      <div className="mb-4">
        <label className="mr-2">Rows per page:</label>
        <select value={rowsPerPage} onChange={(e) => setRowsPerPage(Number(e.target.value))} className="border p-2 rounded">
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>

      {/* User Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Mobile</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="border p-2">{user.Name}</td>
              <td className="border p-2">{user.Email}</td>
              
              
              <td className="border p-2">{user.Mobile_Number}</td>
              <td className="border p-2 flex justify-center space-x-2">
              
                <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(filteredUsers.length / rowsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)} className={`px-3 py-1 border ${currentPage === i + 1 ? "bg-gray-300" : ""}`}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
