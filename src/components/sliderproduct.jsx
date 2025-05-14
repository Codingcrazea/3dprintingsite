import React, { useEffect, useState } from 'react'


import { Typed } from 'react-typed';





import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";







const jobListing = [
  {
    timePosted: "2 Day ago",
    jobType: "Full Time",
    company: "Google, New York",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png",
    title: "Sr. Product Designer",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    salary: "₹560/Hour",
  },
  {
    timePosted: "2 Day ago",
    jobType: "Full Time",
    company: "Microsoft, California",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    title: "Web Designer",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    salary: "₹860/Hour",
  },
  {
    timePosted: "1 Hour ago",
    jobType: "Full Time",
    company: "Twitter, San Francisco",
    logo: "https://e7.pngegg.com/pngimages/708/311/png-clipart-icon-logo-twitter-logo-twitter-logo-blue-social-media-thumbnail.png",
    title: "Backend Developer",
    description: "Design and build scalable backend systems when looking at its layout.",
    salary: "₹960/Hour",
  },
  {
    timePosted: "3 Days ago",
    jobType: "Remote",
    company: "Amazon, Seattle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    title: "Frontend Developer",
    description: "Experienced in React.js and Next.js, with knowledge of Tailwind CSS.",
    salary: "₹650/Hour",
  },
  {
    timePosted: "5 Days ago",
    jobType: "Internship",
    company: "Meta, London",
    logo: "https://cdn.iconscout.com/icon/free/png-512/free-meta-logo-icon-download-in-svg-png-gif-file-formats--virtual-reality-metaverse-vr-brands-social-media-pack-logos-icons-7283891.png?f=webp&w=256",
    title: "Software Engineer Intern",
    description: "Internship opportunity for software engineering students proficient in JavaScript.",
    salary: "₹400/Hour",
  },
  {
    timePosted: "7 Days ago",
    jobType: "Full Time",
    company: "Apple, San Francisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    title: "iOS Developer",
    description: "Hiring skilled Swift developers with experience in building iOS applications.",
    salary: "₹900/Hour",
  },
  {
    timePosted: "10 Days ago",
    jobType: "Contract",
    company: "Netflix, Los Angeles",
    logo: "https://cdn.iconscout.com/icon/free/png-512/free-netflix-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945044.png?f=webp&w=256",
    title: "Backend Developer",
    description: "Expertise in Node.js, MongoDB, and AWS required for backend development.",
    salary: "₹800/Hour",
  }
];
const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow absolute top-1/2 -right-5 transform -translate-y-1/2 bg-purple-500 z-10 p-1 rounded-lg text-white cursor-pointer" onClick={onClick}>
    <FaChevronRight size={30} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow absolute top-1/2 -left-8 transform -translate-y-1/2 z-10 bg-purple-500 p-1 rounded-lg text-white cursor-pointer" onClick={onClick}>
    <FaChevronLeft size={30} />
  </div>
);

const companyLogos = [
  { src: "src/assets/images/company/Logo_ATS.png" },
  { src: "src/assets/images/company/logo11.png" },
  { src: "src/assets/images/company/appson_blue_Logo_1.png" },
  { src: "src/assets/images/company/Untitled_design.png" },
  { src: "src/assets/images/company/ASK.png" },
  { src: "src/assets/images/company/asparrowtech-logoflippped.png" },
  { src: "src/assets/images/company/Betterpeople.jpg" },
  { src: "src/assets/images/company/BTW_IMF_Logo1.png" },
  { src: "src/assets/images/company/Company_Name_Original_White_and_Orange.jpg" },
  { src: "src/assets/images/company/download.jpg" },
  // { src: "src/assets/images/company/logo8.png" },
  { src: "src/assets/images/company/WhatsApp_Image_2024-01-17_at_6_55_15_PM.jpeg" },
  { src: "src/assets/images/company/facebook.jpg" },
  { src: "src/assets/images/company/1519878142742.jpg" },
  { src: "src/assets/images/company/logo-black_(2).jpeg" },
  // { src: "src/assets/images/company/LOGOY.png" },
  { src: "src/assets/images/company/LogowithR.png" },
  { src: "src/assets/images/company/logo4.png" },
  // { src: "src/assets/images/company/company_logo_(1).png" },
  { src: "src/assets/images/company/Fast_Logo1.png" },
  { src: "src/assets/images/company/ef4c58c2-ce96-4430-9ebb-8f6ab81a4993.jpg" },
  { src: "src/assets/images/company/imgpsh_fullsize_anim.jpg" },
  { src: "src/assets/images/company/Logo.png" },
  { src: "src/assets/images/company/Picture1.png" },
  { src: "src/assets/images/company/image_2023_11_02T05_26_18_327Z.png" },
  { src: "src/assets/images/company/Company_logo.png" },
  { src: "src/assets/images/company/photo.png" },
  { src: "src/assets/images/company/Ksv.png" },
  { src: "src/assets/images/company/Beige_Brown_Simple_Personal_LinkedIn_Banner.png" },
  { src: "src/assets/images/company/images.png" },
  { src: "src/assets/images/company/logo33.jpg" },
];













function sliderproduct() {





  const [showTyped, setShowTyped] = useState(false);

  useEffect(() => {
    setShowTyped(true);
  }, []);
  const [jobListings, setjobListings] = useState(jobListing);
  const prod = [
    {
      src: "/h.png",
      title: "3D Printing",
    },
    {
      src: "/heartnew add.png",
      title: "3D Printing",
    },
    {
      src: "/Model1.png",
      title: "3D Printing",
    },
    {
      src: "/webnewhjl.png",
      title: "3D Printing",
    },
    {
      src: "/cubenhdshdo.png",
      title: "3D Printing",
    },
  ]
  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000, // Slide change every 2.5 sec
    pauseOnHover: true, // Pause when hovered
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>




      <style>
        {`
          .text-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: #fff;
          }

          .typing-text {
            font-size: 40px;
            color: #6A38C2;
            font-weight: bold;
            border-right: 3px solid #6A38C2;
            white-space: nowrap;
            overflow: hidden;
            width: 0;
            animation: typing 3s steps(12, end) forwards, blink 0.75s step-end infinite;
          }

          @keyframes typing {
            from { width: 0; }
            to { width: 10ch; } /* Adjust character count here */
          }

          @keyframes blink {
            50% { border-color: transparent; }
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative py-4">
        <div className="text-center mt-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-[#6A38C2] ">3DPrintHub</span>
          </h1>

          <div className="w-max mx-auto border-r-1 border-[#6A38C2] text-2xl font-semibold text-[#6A38C2] whitespace-nowrap overflow-hidden typing-effect">
            High-Quality 3D Printing
          </div>

          {/* Internal CSS */}
          <style>
            {`
          .typing-effect {
            animation: typing 4s steps(30, end) infinite , blink .75s step-end infinite;
          }

          @keyframes typing {
            0% { width: 0 }
            50% { width: 20ch } /* Adjust based on text length */
            100% { width: 0 }
          }

          @keyframes blink {
            50% { border-color: transparent }
          }
        `}
          </style>
        </div>

        <div className="max-w-6xl -mt-5">
          <Slider {...settings}>
            {prod.map((p, index) => (
              <div
                key={index}
                className="px-3 mt-5 mb-5 hover:scale-105 transition-all duration-500 group"
              >
                <div
                  className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-[#6A38C2] transition-transform duration-300 h-[221px] flex justify-center items-center relative overflow-hidden"
                >
                  {/* Image Centered */}
                  <img
                    src={p.src}
                    alt="Product"
                    className="max-h-full max-w-full object-contain"
                  />

                  {/* Hover-only Button */}
                  <button
                    className="absolute bottom-4 bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Make
                  </button>
                </div>
              </div>
            ))}
          </Slider>

        </div>
      </div>
    </div>
  )
}


export default sliderproduct;
