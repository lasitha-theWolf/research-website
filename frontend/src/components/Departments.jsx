import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Leaf, AlertTriangle } from 'lucide-react';

const Departments = () => {
  const departmentsArray = [
    {
      name: "Algal Leaf Spot",
      imageUrl: "/departments/algal.jpg",
      description: "Fungal infection causing circular orange-red spots on tea leaves.",
      color: "from-emerald-500 to-green-600"
    },
    {
      name: "Grey Blight Disease",
      imageUrl: "/departments/greyblight.jpg",
      description: "Fungal pathogen creates grey-brown lesions affecting tea leaf quality.",
      color: "from-green-600 to-emerald-700"
    },
    {
      name: "Brown Blight",
      imageUrl: "/departments/brownblight.jpg",
      description: "Destructive fungal disease causing brown necrotic patches on leaves.",
      color: "from-lime-500 to-green-600"
    },
    {
      name: "Red Leaf Spot",
      imageUrl: "/departments/redleafspot.jpg",
      description: "Fungal disease causing reddish-brown circular spots on tea leaves.",
      color: "from-teal-500 to-emerald-600"
    },
    {
      name: "White Spot",
      imageUrl: "/departments/whitespot.jpg",
      description: "Fungal disease creating white chalky spots reducing tea harvest.",
      color: "from-green-400 to-teal-500"
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1,
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  // const getSeverityColor = (severity) => {
  //   switch (severity) {
  //     case 'High':
  //       return 'bg-red-100 text-red-800 border-red-200';
  //     case 'Medium':
  //       return 'bg-yellow-100 text-yellow-800 border-yellow-200';
  //     case 'Low':
  //       return 'bg-green-100 text-green-800 border-green-200';
  //     default:
  //       return 'bg-gray-100 text-gray-800 border-gray-200';
  //   }
  // };

  return (
    <>
      <div className="container departments py-12 bg-gradient-to-br from-green-50 to-emerald-50">
        {/* Enhanced Header */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Leaf className="text-green-600" size={32} />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
              Tea Leaves Disease
            </h2>
            <Leaf className="text-green-600" size={32} />
          </div>
        </div>

        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            "tablet",
            "mobile",
          ]}
          containerClass="carousel-container"
          itemClass="carousel-item-padding"
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden mx-3 my-4"
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${depart.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Severity Badge
                <div className="absolute top-4 right-4 z-10">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm transition-all duration-300 group-hover:scale-110`}>
                    {depart.severity}
                  </div>
                </div> */}

                {/* Warning Icon Animation */}
                <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                  <AlertTriangle className="text-yellow-500" size={20} />
                </div>

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={depart.imageUrl}
                    alt={depart.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Leaf Icon */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Leaf className="text-white" size={20} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Disease Name */}
                  <div className="depart-name text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                    {depart.name}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {depart.description}
                  </p>

                  {/* Learn More Button */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    <button className={`px-4 py-2 bg-gradient-to-r ${depart.color} text-white rounded-lg text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                      Learn More
                    </button>
                  </div>

                  {/* Animated Bottom Border */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${depart.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 w-full`}></div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${depart.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10`}></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      {/* Add custom CSS */}
      <style jsx>{`
        .carousel-container {
          padding: 20px 0;
        }
        .carousel-item-padding {
          padding: 0 10px;
        }
      `}</style>
    </>
  );
};

export default Departments;