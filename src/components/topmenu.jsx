import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';







function topmenu() {
    const [loggenin, setloggedin] = useState(false);


    const [user, setUser] = useState(null);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    useEffect(() => {
        const u = sessionStorage.getItem("useId") || null;
        if (u) {
            // Simulate fetching user data (replace with real fetch if needed)
            setUser({
                name: "Sanskar",
                email: "sanskar@example.com",
                profileImage: "/images/user.jpg", // or default
            });
        }

    }, []);
    return (




        <div>
            <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-10">
                    <Link to="/" className="text-2xl font-bold text-[#6A38C2]">
                        3DPrintHub
                    </Link>
                    <ul className="flex gap-6 text-lg text-gray-700 font-medium ">
                        <li className='hover:scale-105 transition-all duration-500' ><Link to="/">Home</Link></li>
                        <li className='hover:scale-105 transition-all duration-500'><Link to="/services">Services</Link></li>
                        <li className='hover:scale-105 transition-all duration-500'><Link to="/pricing">Pricing</Link></li>
                        <li className='hover:scale-105 transition-all duration-500'><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Right - Auth or Profile */}
                <div className="flex items-center gap-4">
                    {!user ? (
                        <>
                            <Link
                                to="/login"
                                className="px-4 py-2 text-[#6A38C2] border border-[#6A38C2] rounded hover:bg-[#6A38C2] hover:text-white transition"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register3dp"
                                className="px-4 py-2 bg-[#6A38C2] text-white rounded hover:bg-[#4c2491] transition"
                            >
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <div className="relative">
                            <img
                                src={user.profileImage || "/default-profile.png"}
                                alt="User"
                                className="w-10 h-10 rounded-full cursor-pointer"
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                            />
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded border z-50">
                                    <div className="px-4 py-3">
                                        <p className="font-medium text-gray-800">{user.name}</p>
                                        <p className="text-sm text-gray-500">{user.email}</p>
                                    </div>
                                    <hr />
                                    <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                                    <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">My Orders</Link>
                                    <button
                                        onClick={() => {
                                            // logout logic here
                                        }}
                                        className="block px-4 py-2 text-red-600 hover:bg-gray-100 w-full text-left"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </nav>


        </div>
    )
}

export default topmenu;
