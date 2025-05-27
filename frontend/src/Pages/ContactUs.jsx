import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "info@tealeafresearch.com",
      subInfo: "We'll respond within 24 hours",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+94 11 234 5678",
      subInfo: "Mon-Fri, 9:00 AM - 6:00 PM",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "SLIIT, Malabe Campus",
      subInfo: "New Kandy Road, Malabe",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div id="Contact" className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto px-4">
          Have questions about our tea leaf disease detection research? We'd love to hear from you.
          Get in touch and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our research team is dedicated to advancing tea leaf disease detection technology. 
                Whether you're a researcher, tea plantation owner, or technology enthusiast, 
                we welcome your inquiries and collaboration opportunities.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={index}
                    className={`group ${contact.bgColor} rounded-2xl p-6 border border-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                        <Icon className={contact.iconColor} size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-lg mb-1">
                          {contact.title}
                        </h3>
                        <p className="text-gray-700 font-medium mb-1">
                          {contact.info}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {contact.subInfo}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Office Hours */}
            {/* <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-emerald-600" size={24} />
                <h3 className="font-semibold text-gray-800 text-xl">Office Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-red-500">Closed</span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="text-blue-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  Thank you for your message. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium py-4 px-6 rounded-xl hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Collaborate With Us
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto">
              Interested in collaborating on tea leaf disease detection research? 
              We welcome partnerships with academic institutions, research organizations, 
              and industry professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Academic Partnerships
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Industry Collaboration
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Research Exchange
              </span>
              <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                Technology Transfer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;