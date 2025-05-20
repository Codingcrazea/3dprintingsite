import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMenu, IoMdClose } from 'react-icons/io';

function Topmenu() {
    const [user, setUser] = useState(null);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const u = sessionStorage.getItem('useId') || null;
        if (u) {
            setUser({
                name: 'Sanskar',
                email: 'sanskar@example.com',
                profileImage: '/images/user.jpg',
            });
        }
    }, []);
    return (
        <header className="bg-black shadow-md t ">
            <nav className="  max-w-7xl md:w-auto sm:w-auto lg:w-auto  mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-[#6A38C2]">
                    <img
                        src="/GOPRINT3D.png"
                        alt="Logo"
                        className="rounded-full w-16 h-16 md:w-16 md:h-16 lg:w-16 lg:h-16 object-cover border-white border-2 shadow-2xl shadow-white"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-lg bg-black text-gray-700 font-medium">
                    <li className="hover:scale-105 transition-all duration-300">
                        <Link to="/" className='bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent' >Home</Link>
                    </li>
                    <li className="hover:scale-105 transition-all duration-300">
                        <Link to="/about" className='bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent' >About</Link>
                    </li>
                    <li className="hover:scale-105 transition-all duration-300">
                        <Link to="/privacy" className='bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent' >Privacy</Link>
                    </li>
                    <li className="hover:scale-105 transition-all duration-300">
                        <Link to="/contact3dhub"className='bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent'  >Contact</Link>
                    </li>
                </ul>

                {/* Right Section */}
                <div className="hidden md:flex items-center gap-4">
                    {!user ? (
                        <>
                            <Link
                                to="/login"
                                className="px-4 py-2 font-normal  border  rounded hover:bg-[#6A38C2] hover:text-white transition bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent bg-amber-400 "
                            >
                                Login
                            </Link>
                            <Link
                                to="/register3dp"
                                className="px-4 py-2  font-normal border rounded hover:bg-[#4c2491] transition hover:text-white  bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent"
                            >
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <div className="relative">
                            <img
                                src={user.profileImage || '/default-profile.png'}
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
                                    <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                                        Profile
                                    </Link>
                                    <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">
                                        My Orders
                                    </Link>
                                    <button
                                        onClick={() => {
                                            // logout logic
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

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-3xl text-[#6A38C2]"
                >
                    {mobileMenuOpen ? <IoMdClose /> : <IoIosMenu />}
                </button>
            </nav>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-3 text-lg text-gray-700">
                    <Link to="/" className="block">Home</Link>
                    <Link to="/about" className="block">About</Link>
                    <Link to="/privacy" className="block">Privacy</Link>
                    <Link to="/contact3dhub" className="block">Contact</Link>

                    {!user ? (
                        <>
                            <Link to="/login" className="block text-[#6A38C2]">Login</Link>
                            <Link to="/register3dp" className="block text-white bg-[#6A38C2] px-3 py-2 rounded">Sign Up</Link>
                        </>
                    ) : (
                        <div className="space-y-2">
                            <p className="font-semibold">{user.name}</p>
                            <Link to="/profile" className="block">Profile</Link>
                            <Link to="/orders" className="block">My Orders</Link>
                            <button
                                onClick={() => {
                                    // logout logic
                                }}
                                className="text-red-600"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
}

export default Topmenu;
