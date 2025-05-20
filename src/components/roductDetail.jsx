import React, { useState, useEffect } from 'react';
import Topmenu from './topmenu';
import Foot from "../pages/Footer3dprint";
function ProductDetail() {








    const product = {
        id: 1,
        name: "3D Printed Car Model",
        price: "₹1,299",
        sizes: ["Small", "Medium", "Large"],
        description: "Highly detailed 3D printed car model for collectors and enthusiasts.",
    };

    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

    // API Fetching structure (commented)
    /*
    useEffect(() => {
      const fetchProduct = async () => {
        const res = await fetch('/api/product/:id');
        const data = await res.json();
        setProduct(data);
      };
      fetchProduct();
    }, []);
    */
    return (
        <>
        





            <Topmenu/>
            <div className="p-6 md:p-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-10 animate-fadeIn">

                {/* Left Section - Details */}
                <div className="flex-1 space-y-6">
                    <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
                    <p className="text-gray-600">{product.description}</p>

                    <div>
                        <p className="text-lg font-medium text-gray-700">Select Size:</p>
                        <div className="flex gap-3 mt-2">
                            {product.sizes.map(size => (
                                <button
                                    key={size}
                                    className={`px-4 py-2 rounded-full border border-gray-300 hover:border-blue-500 transition 
                            ${selectedSize === size ? 'bg-blue-100 text-blue-700' : 'bg-white text-gray-800'}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        {/* Marketing Content */}
                        <div className="mt-10 space-y-6 text-gray-700">
                            <h2 className="text-2xl font-bold text-gray-800">Why Choose Our 3D Models?</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>High-quality, precision-crafted 3D printed models perfect for gifting or collecting.</li>
                                <li>We offer custom 3D model creation – just share your idea or reference!</li>
                                <li>Durable material, smooth finish, and made with eco-friendly PLA filament.</li>
                                <li>Perfect for architecture, art, mechanical demos, or personal projects.</li>
                            </ul>

                            <div className="bg-blue-50 p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                                <h3 className="text-xl font-semibold text-blue-700">Need a Custom 3D Model?</h3>
                                <p className="mt-2 text-gray-600">
                                    We also create fully personalized 3D models – whether it's a character, logo, mechanical part, or architectural design. Reach out today and let's bring your imagination to life!
                                </p>
                                <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-xl hover:scale-105 transition shadow-lg hover:shadow-green-400">
                                    📞 Call Now to Place Your Order
                                </button>
                            </div>

                            <div className="pt-4 text-sm text-gray-500">
                                Fast Delivery | Quality Assurance | Free Consultation for Custom Designs
                            </div>
                        </div>

                    </div>

                    <p className="text-2xl font-semibold text-green-600">{product.price}</p>

                    <div className="flex gap-4 mt-4">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:scale-105 transition transform shadow-xl hover:shadow-blue-400 shine-effect">
                            Order Now
                        </button>
                        <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition hover:scale-105">
                            Call to brief
                        </button>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="flex-1">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src="/3dmodelmaterial.png"
                            alt="3D model"
                            className="w-full object-cover transform hover:scale-105 transition duration-500 ease-in-out shine-effect"
                        />
                    </div>
                </div>
            </div>
           <Foot/>
        </>
    )
}




export default ProductDetail;