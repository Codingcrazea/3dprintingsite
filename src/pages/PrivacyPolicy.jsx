import React from 'react';
import Topmenu from '../components/topmenu.jsx'
import Foot from './Footer3dprint.jsx';







function PrivacyPolicy() {
  return (
    <>
      <Topmenu />
      <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-700">
        <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>

        <p>
          At <span className="font-semibold">Smart 3D Prints</span>, your privacy is our priority. We collect only the necessary data required to process your orders and enhance your experience on our platform.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-4">What We Collect</h2>
        <ul className="list-disc pl-6">
          <li>Name, email, phone number</li>
          <li>Shipping address and billing details</li>
          <li>Custom model files (only for order processing)</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-4">How We Use Your Data</h2>
        <ul className="list-disc pl-6">
          <li>To process and deliver orders</li>
          <li>To communicate order status and support</li>
          <li>To improve services via user feedback</li>
        </ul>

        <p className="text-sm text-gray-500 mt-4">
          We never sell or misuse your data. For any concerns, please email us at privacy@smart3dprints.in.
        </p>
      </div>
      <Foot />
    </>
  );
}

export default PrivacyPolicy;
