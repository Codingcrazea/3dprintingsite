import { IoClose } from "react-icons/io5";
import { User2 } from "lucide-react";
import { FaBars, FaTachometerAlt, FaUsers, FaBuilding, FaClipboardList, FaChartBar, FaUser, FaEnvelope, FaCog, FaProjectDiagram, FaMoon, FaCommentDots, FaImage, FaExpandArrowsAlt, FaSlidersH, FaBell } from 'react-icons/fa';
import { useEffect } from "react";









export default function UserProfile  ({ dataa ,isOpen, setIsOpen })  {
  useEffect(()=>{






  })
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"
        } p-5 overflow-auto`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Profile <span className="text-sm text-gray-500"></span></h2>
        <button onClick={() => setIsOpen(false)} className="text-gray-500">
          <IoClose size={24} />
        </button>
      </div>

      <div className="text-center">
        <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center"><User2 size={35} /></div>
        <h3 className="text-lg font-semibold">{dataa?.admin?.Admin_Name}</h3>
        {/* <p className="text-gray-500">Manager</p> */}
        <p className="text-blue-500">dummy@gmail.com</p>
        <button className="mt-2 px-4 py-1 bg-green-500 text-white rounded-lg">+ Follow</button>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <FaUser className="text-blue-500 mr-3" size={20} />
          <div>
            <p className="font-medium">My Profile</p>
            <p className="text-gray-500 text-sm">Account settings and more</p>
          </div>
        </div>
        <div className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <FaEnvelope className="text-pink-500 mr-3" size={20} />
          <div>
            <p className="font-medium">My Messages</p>
            <p className="text-gray-500 text-sm">Inbox and tasks</p>
          </div>
        </div>
        <div className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <FaCog className="text-green-500 mr-3" size={20} />
          <div>
            <p className="font-medium">Settings</p>
            <p className="text-gray-500 text-sm">Account Settings</p>
          </div>
        </div>
        <div className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <FaProjectDiagram className="text-purple-500 mr-3" size={20} />
          <div>
            <p className="font-medium">Project</p>
            <p className="text-gray-500 text-sm">Latest tasks and projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};