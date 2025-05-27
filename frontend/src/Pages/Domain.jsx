import {
  BookOpen,
  Calendar,
  Lightbulb,
  Search,
  Settings,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

const ProjectScope = () => {
  const [activeTab, setActiveTab] = useState("literature-survey");

  const tabs = [
    { id: "literature-survey", label: "Literature Survey", icon: BookOpen },
    { id: "research-gap", label: "Research Gap", icon: Search },
    { id: "research-problem", label: "Research Problem", icon: Target },
    {
      id: "research-objectives",
      label: "Research Objectives",
      icon: Lightbulb,
    },
    { id: "methodology", label: "Methodology", icon: Settings },
    { id: "technologies-used", label: "Technologies Used", icon: Zap },
  ];

  const contentData = {
    "literature-survey": {
      title: "Literature Survey",
      description:
        "Tea leaf contamination area has been a basic zone of exploring, solidifying machine learning, significant learning, and picture taking care of techniques. Distinctive considers have proposed techniques to create strides the accuracy and efficiency of contamination recognizable verification.",
      details: [
        {
          name: "Multi-objective Image Division",
          type: "Research Finding [11]",
          rating: 4.2,
          users: "Enhanced Accuracy",
          since: "Recent Study",
          status: "VALIDATED",
          statusColor: "bg-green-100 text-green-800",
          icon: "🔍",
          color: "bg-green-500",
        },
        {
          name: "Compact CNNs for Plant Classification",
          type: "Research Finding [12]",
          rating: 4.5,
          users: "Real-time Apps",
          since: "Mobile Optimization",
          status: "PROVEN",
          statusColor: "bg-blue-100 text-blue-800",
          icon: "📱",
          color: "bg-blue-500",
        },
        {
          name: "U-Net & Exception Models",
          type: "Research Finding [13]",
          rating: 4.7,
          users: "Semantic Division",
          since: "Deep Learning",
          status: "SUPERIOR",
          statusColor: "bg-purple-100 text-purple-800",
          icon: "🧠",
          color: "bg-purple-500",
        },
      ],
    },
    "research-gap": {
      title: "Research Gap",
      description:
        "Data broadening methodologies and integration of NLP techniques have shown promise, but gaps remain in comprehensive tea leaf disease management systems.",
      details: [
        {
          name: "Limited Real-time Processing",
          type: "Technical Gap",
          rating: 2.3,
          users: "Field Application",
          since: "Ongoing Issue",
          status: "CRITICAL",
          statusColor: "bg-red-100 text-red-800",
          icon: "⚠️",
          color: "bg-red-500",
        },
        {
          name: "Insufficient Integration",
          type: "System Gap",
          rating: 2.8,
          users: "Holistic Approach",
          since: "Identified Need",
          status: "IMPORTANT",
          statusColor: "bg-orange-100 text-orange-800",
          icon: "🔗",
          color: "bg-orange-500",
        },
        {
          name: "Manual Assessment Dependency",
          type: "Process Gap",
          rating: 2.1,
          users: "Automation Need",
          since: "Persistent",
          status: "URGENT",
          statusColor: "bg-yellow-100 text-yellow-800",
          icon: "👤",
          color: "bg-yellow-500",
        },
      ],
    },
    "research-problem": {
      title: "Research Problem",
      description:
        "Current tea leaf quality assessment faces multiple challenges including disease spread, manual classification subjectivity, and inefficient pesticide usage.",
      details: [
        {
          name: "Disease Spread Risk",
          type: "Agricultural Problem",
          rating: 1.8,
          users: "Tea Plantations",
          since: "High Risk",
          status: "CRITICAL",
          statusColor: "bg-red-100 text-red-800",
          icon: "🦠",
          color: "bg-red-500",
        },
        {
          name: "Manual Classification Issues",
          type: "Assessment Problem",
          rating: 2.2,
          users: "Expert Dependent",
          since: "Subjective & Error-prone",
          status: "SIGNIFICANT",
          statusColor: "bg-orange-100 text-orange-800",
          icon: "👁️",
          color: "bg-orange-500",
        },
        {
          name: "Pesticide Overuse",
          type: "Environmental Problem",
          rating: 2.5,
          users: "Cost & Environment",
          since: "Without Accuracy",
          status: "MODERATE",
          statusColor: "bg-yellow-100 text-yellow-800",
          icon: "🌿",
          color: "bg-yellow-500",
        },
      ],
    },
    "research-objectives": {
      title: "Research Objectives",
      description:
        "Primary goals focused on automated tea leaf disease detection, accurate classification, and intelligent treatment recommendations.",
      details: [
        {
          name: "Healthy vs Diseased Classification",
          type: "Primary Objective",
          rating: 5.0,
          users: "Core Functionality",
          since: "Essential Goal",
          status: "PRIMARY",
          statusColor: "bg-blue-100 text-blue-800",
          icon: "🎯",
          color: "bg-blue-500",
        },
        {
          name: "Disease Category Classification",
          type: "Advanced Objective",
          rating: 4.8,
          users: "Detailed Analysis",
          since: "Accurate Identification",
          status: "HIGH PRIORITY",
          statusColor: "bg-green-100 text-green-800",
          icon: "🔬",
          color: "bg-green-500",
        },
        {
          name: "Treatment Recommendation System",
          type: "Intelligent Objective",
          rating: 4.5,
          users: "Customized Solutions",
          since: "User Input Based",
          status: "INTELLIGENT",
          statusColor: "bg-purple-100 text-purple-800",
          icon: "💡",
          color: "bg-purple-500",
        },
      ],
    },
    methodology: {
      title: "Methodology",
      description:
        "Comprehensive approach utilizing CNN-based classification, denoising autoencoders, dual classifier modules, and VGG16-based treatment recommendation systems.",
      details: [
        {
          name: "Interactive Leaf Differentiation",
          type: "CNN Module",
          rating: 4.7,
          users: "Real-time Feedback",
          since: "Enhanced Dataset",
          status: "IMPLEMENTED",
          statusColor: "bg-green-100 text-green-800",
          icon: "🧮",
          color: "bg-green-500",
        },
        {
          name: "Preprocessing & Segmentation",
          type: "DAE + Semantic Segmentation",
          rating: 4.5,
          users: "Pixel-level Analysis",
          since: "Quality Enhancement",
          status: "ACTIVE",
          statusColor: "bg-blue-100 text-blue-800",
          icon: "🔧",
          color: "bg-blue-500",
        },
        {
          name: "Dual Classifier System",
          type: "CNN + Xception",
          rating: 4.8,
          users: "Hybrid Approach",
          since: "Feature Refinement",
          status: "OPTIMIZED",
          statusColor: "bg-purple-100 text-purple-800",
          icon: "⚡",
          color: "bg-purple-500",
        },
      ],
    },
    "technologies-used": {
      title: "Technologies Used",
      description:
        "Modern technology stack comprising machine learning frameworks, cloud platforms, and development tools for comprehensive tea leaf disease detection and management.",
      details: [
        {
          name: "Python",
          type: "Programming Language",
          rating: 4.9,
          users: "Core Development",
          since: "Primary Language",
          status: "FOUNDATIONAL",
          statusColor: "bg-blue-100 text-blue-800",
          icon: "🐍",
          color: "bg-blue-500",
        },
        {
          name: "React",
          type: "Frontend Framework",
          rating: 4.8,
          users: "User Interface",
          since: "Modern UI",
          status: "ACTIVE",
          statusColor: "bg-cyan-100 text-cyan-800",
          icon: "⚛️",
          color: "bg-cyan-500",
        },
        {
          name: "TensorFlow",
          type: "ML Framework",
          rating: 4.9,
          users: "Deep Learning",
          since: "Model Training",
          status: "CORE",
          statusColor: "bg-orange-100 text-orange-800",
          icon: "🔥",
          color: "bg-orange-500",
        },
        {
          name: "Keras",
          type: "Neural Network API",
          rating: 4.7,
          users: "Model Development",
          since: "High-level API",
          status: "INTEGRATED",
          statusColor: "bg-red-100 text-red-800",
          icon: "🧠",
          color: "bg-red-500",
        },
        {
          name: "MongoDB",
          type: "Database",
          rating: 4.6,
          users: "Data Storage",
          since: "NoSQL Solution",
          status: "DEPLOYED",
          statusColor: "bg-green-100 text-green-800",
          icon: "🍃",
          color: "bg-green-500",
        },
        {
          name: "Google Colab",
          type: "Development Environment",
          rating: 4.3,
          users: "Model Training",
          since: "Collaborative Notebooks",
          status: "DEVELOPMENT",
          statusColor: "bg-orange-100 text-orange-800",
          icon: "📓",
          color: "bg-orange-500",
        },
        {
          name: "Jupyter Notebook",
          type: "Development Environment",
          rating: 4.5,
          users: "Interactive Computing",
          since: "Common Tool",
          status: "STANDARD",
          statusColor: "bg-orange-100 text-orange-800",
          icon: "📓",
          color: "bg-orange-500",
        },
        {
          name: "PyCharm",
          type: "IDE",
          rating: 4.8,
          users: "Python Development",
          since: "Primary IDE",
          status: "PREFERRED",
          statusColor: "bg-green-100 text-green-800",
          icon: "💻",
          color: "bg-gray-500",
        },
      ],
    },
  };

  const currentContent = contentData[activeTab];

  return (
    <div id="Domain" className="max-w-7xl mx-auto p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="text-center pt-12 pb-6">
        <div className="flex items-center justify-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-300 to-green-400"></div>
          <div className="relative">
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-green-500 to-teal-600 drop-shadow-sm whitespace-nowrap">
              Project Scope
            </h1>
            <div className="absolute -top-2 -right-2">
              <div className="w-8 h-8 text-emerald-400">✨</div>
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-green-400 via-emerald-300 to-transparent"></div>
        </div>
        <p className="text-lg text-gray-600 mt-4 font-medium">
          Explore our research framework and objectives ✨
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white rounded-lg p-2 shadow-sm">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#10b981] text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="text-[#10b981]" size={28} />
          <h2 className="text-2xl font-bold text-gray-800">
            {currentContent.title}
          </h2>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          {currentContent.description}
        </p>
      </div>

      {/* Details Cards */}
      <div
        className={`grid gap-6 ${
          activeTab === "technologies-used"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {currentContent.details.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              {/* Header with Icon and Status */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center text-white text-xl`}
                >
                  {item.icon}
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${item.statusColor}`}
                >
                  {item.status}
                </span>
              </div>

              {/* Title and Type */}
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{item.type}</p>

              {/* Stats */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="font-medium">{item.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Users size={14} />
                    {item.users}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Calendar size={14} />
                  {item.since}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectScope;
