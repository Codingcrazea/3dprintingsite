import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topmenu from "../components/topmenu.jsx";





const Signupp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async () => {
    const newError = {};
    if (!formData.name) newError.name = "Name is required";
    if (!formData.email) newError.email = "Email is required";
    if (!formData.mobile) newError.mobile = "Mobile number is required";
    if (!formData.password) newError.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newError.confirmPassword = "Passwords do not match";
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      // Signup API logic here
      console.log("Signing up with:", formData);
      // On success:
      navigate("/login"); // Or redirect to dashboard
    }
  };

  return (<>
    <Topmenu/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">
          Create your 3DPrint Account
        </h2>

        {/* Name */}
        <label className="block mb-1 text-gray-700 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2"
        />
        {error.name && <p className="text-red-500 text-sm mb-2">{error.name}</p>}

        {/* Email */}
        <label className="block mb-1 text-gray-700 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2"
        />
        {error.email && <p className="text-red-500 text-sm mb-2">{error.email}</p>}

        {/* Mobile */}
        <label className="block mb-1 text-gray-700 font-medium">Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter your mobile number"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2"
        />
        {error.mobile && <p className="text-red-500 text-sm mb-2">{error.mobile}</p>}

        {/* Password */}
        <label className="block mb-1 text-gray-700 font-medium">Password</label>
        <div className="relative mb-2">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-sm text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {error.password && <p className="text-red-500 text-sm mb-2">{error.password}</p>}

        {/* Confirm Password */}
        <label className="block mb-1 text-gray-700 font-medium">Confirm Password</label>
        <div className="relative mb-2">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-3 text-sm text-gray-500"
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>
        {error.confirmPassword && <p className="text-red-500 text-sm mb-2">{error.confirmPassword}</p>}

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Sign Up
        </button>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  </>);
};

export default Signupp;
