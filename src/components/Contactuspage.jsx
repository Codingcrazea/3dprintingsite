import React from 'react';
import Topmenu from './topmenu';
import Foot from '../pages/Footer3dprint';







function Contact() {
  return (
    <>
      <Topmenu />
      <div className="max-w-3xl mx-auto p-6 space-y-6 text-gray-700">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p>
          Have questions or custom model requests? We're here to help! Reach out via phone, email, or message us directly using the form below.
        </p>

        <div className="space-y-4">
          <p><strong>📞 Phone:</strong> +91-9876543210</p>
          <p><strong>✉️ Email:</strong> support@smart3dprints.in</p>
          <p><strong>📍 Address:</strong> 3D Innovation Street, Tech Park, Bangalore, India</p>
        </div>

        {/* Contact form can be added later */}
        <p className="text-sm text-gray-500 mt-4">Note: Custom orders are usually confirmed within 24 hours.</p>
      </div>
      <Foot />
    </>
  );
}

export default Contact;
