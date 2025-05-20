import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrash, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";





import "react-toastify/dist/ReactToastify.css";


const initialCompanies = [
  { id: 1, name: "Tech Solutions", type: "IT", email: "contact@techsolutions.com", jobsPosted: 5, report: "No reports" },
  { id: 2, name: "Health Plus", type: "Healthcare", email: "info@healthplus.com", jobsPosted: 8, report: "Reported" },
  { id: 3, name: "EduWorld", type: "Education", email: "support@eduworld.com", jobsPosted: 3, report: "No reports" },
  { id: 4, name: "FinCorp", type: "Finance", email: "help@fincorp.com", jobsPosted: 12, report: "No reports" },
  { id: 5, name: "AutoMotive Inc", type: "Automobile", email: "info@automotive.com", jobsPosted: 4, report: "No reports" },
  { id: 6, name: "Green Energy", type: "Renewable", email: "support@greenenergy.com", jobsPosted: 6, report: "Reported" },
  { id: 7, name: "Foodies Ltd", type: "Food & Beverage", email: "contact@foodies.com", jobsPosted: 7, report: "No reports" }
];

const ManageCompanies = () => {
  const [loading,setloading] =useState(false);
  const [error,seter] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();
  
  
  
  
  
  
  
  
  
  const FindAllCompanies  = async()=>{
    try{
       const response  = await axios.get('http://localhost:5000/api/admin/list_companies');
       if(response.data.stat){
         setCompanies(response.data.data);
         setloading(false);
       }
    }catch(error){
         seter(error);
    }
  }

  // Search Companies
  const filteredCompanies = companies.filter((company) =>
    company.Company_Name.toLowerCase().includes(search.toLowerCase()) ||
    company.Company_Type.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastCompany = currentPage * rowsPerPage;
  const indexOfFirstCompany = indexOfLastCompany - rowsPerPage;
  const currentCompanies = filteredCompanies.slice(indexOfFirstCompany, indexOfLastCompany);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Delete Company with Confirmation
  const deleteCompany = (id) => {
    if (window.confirm("Are you sure you want to delete this company?")) {
      setCompanies(companies.filter((company) => company.id !== id));
      toast.error("Company deleted!");
    }
  };
useEffect(()=>{
    // FindAllCompanies();

},[]);
if(loading) return<><h1>Loading...</h1></>
if(error) return<><h1>{error}</h1></>
  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-semibold mb-4">Manage Companies</h2>

      {/* Search Bar */}
      <div className="flex items-center mb-4">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search by name or type..."
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

      {/* Company Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Jobs Posted</th>
            <th className="border p-2">Company Details</th>
            <th className="border p-2">Report</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentCompanies.map((company) => (
            <tr key={company.id} className="text-center">
              <td className="border p-2">{company.Company_Name}</td>
              <td className="border p-2">{company.Company_Type}</td>
              <td className="border p-2">{company.Company_Email}</td>
              <td className="border p-2">{new Date(company.createdAt).toLocaleString()}</td>
              <td className="border p-2 text-blue-500 cursor-pointer" onClick={() => navigate(`/admin/company/details`,{state:{companyId:company.Company_Id}})}>
                View Details
              </td>
              <td className="border p-2">{company.report}</td>
              <td className="border p-2">
                <button onClick={() => deleteCompany(company.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(filteredCompanies.length / rowsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)} className={`px-3 py-1 border ${currentPage === i + 1 ? "bg-gray-300" : ""}`}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default ManageCompanies;
