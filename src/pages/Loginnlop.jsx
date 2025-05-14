import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


















import Topmenu from "../components/topmenu.jsx";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleLogin = async () => {
    const newError = {};
    if (!mobile) newError.mobile = "Mobile number is required";
    if (!password) newError.password = "Password is required";

    setError(newError);
    if (Object.keys(newError).length === 0) {
      // Your login API call here
      console.log("Logging in with:", mobile, password);
      // On success:
      navigate("/"); // Replace with real route
    }
  };

  return (<>
    <Topmenu/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">
          3DPrint Portal Login
        </h2>

        {/* Mobile Field */}
        <label className="block mb-2 text-gray-700 font-medium">Mobile Number</label>
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter mobile number"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2"
        />
        {error.mobile && <p className="text-red-500 text-sm mb-2">{error.mobile}</p>}

        {/* Password Field */}
        <label className="block mb-2 text-gray-700 font-medium">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {error.password && <p className="text-red-500 text-sm mt-2">{error.password}</p>}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Login
        </button>

        {/* Forgot Password */}
        <div className="text-right mt-3">
          <button className="text-sm text-purple-600 hover:underline">Forgot Password?</button>
        </div>

        {/* Sign Up */}
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  </>);
};

export default Login;
