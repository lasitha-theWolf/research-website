import React from 'react';
import { Play, MapPin, Calendar, Users } from 'lucide-react';

const FieldVisit = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Field Visit Documentation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness our TeaGuardian AI system in action during real-world field testing. 
            See how our technology is revolutionizing tea disease detection and protection.
          </p>
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative">
            {/* Video Container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/d8dEYFoZhR8"
                title="TeaGuardian Field Visit - AI-Powered Tea Disease Detection"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video Overlay Info */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
              <Play className="inline w-4 h-4 mr-1" />
              Field Documentation
            </div>
          </div>

          {/* Video Details */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Tea Plantation Field Site</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Documentation</h3>
                  <p className="text-gray-600">Live Field Testing</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Team</h3>
                  <p className="text-gray-600">Research & Development</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                About This Field Visit
              </h3>
              <p className="text-gray-600 leading-relaxed">
                This field visit showcases the practical implementation of our TeaGuardian AI system 
                in real tea plantation environments. Watch as our team demonstrates the technology's 
                capability to detect and identify various tea plant diseases, providing farmers with 
                immediate, actionable insights for crop protection and yield optimization.
              </p>
            </div>

            {/* Key Features Highlighted */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Key Features Demonstrated:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Real-time Disease Detection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">AI-Powered Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Field-Ready Technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Our Technology?
            </h3>
            <p className="text-gray-600 mb-6">
              Learn more about how TeaGuardian can transform your tea cultivation practices.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldVisit; 