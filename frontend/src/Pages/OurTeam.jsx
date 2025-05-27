import { Building, Crown, GraduationCap, Mail, Users, Sparkles } from "lucide-react";
import React from "react";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Palihawadana M.M",
      role: "Group Leader",
      isLeader: true,
      degree: "Undergraduate",
      institution: "Sri Lanka Institute of Information Technology",
      specialization: "Information Technology",
      email: "it21264948@my.sliit.lk",
      image: "/departments/maneesha.jpg",
      cardColor: "border-blue-200 hover:border-blue-400",
      iconColor: "text-blue-500",
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-600",
    },
    {
      id: 2,
      name: "Heenkenda H.M.L.D",
      role: "Team Member",
      isLeader: false,
      degree: "Undergraduate",
      institution: "Sri Lanka Institute of Information Technology",
      specialization: "Information Technology",
      email: "It21215124@my.sliit.lk",
      image: "/departments/lasitha.jpg",
      cardColor: "border-teal-200 hover:border-teal-400",
      iconColor: "text-teal-500",
      gradientFrom: "from-teal-500",
      gradientTo: "to-teal-600",
    },
    {
      id: 3,
      name: "Rathnayake K.M.S.T",
      role: "Team Member",
      isLeader: false,
      degree: "Undergraduate",
      institution: "Sri Lanka Institute of Information Technology",
      specialization: "Information Technology",
      email: "it21251696@my.sliit.lk",
      image: "/departments/sasika.jpg",
      cardColor: "border-purple-200 hover:border-purple-400",
      iconColor: "text-purple-500",
      gradientFrom: "from-purple-500",
      gradientTo: "to-purple-600",
    },
    {
      id: 4,
      name: "Ranaweera R.K.I.P",
      role: "Team Member",
      isLeader: false,
      degree: "Undergraduate",
      institution: "Sri Lanka Institute of Information Technology",
      specialization: "Information Technology",
      email: "it21348570@my.sliit.lk",
      image: "/departments/ishara.jpg",
      cardColor: "border-orange-200 hover:border-orange-400",
      iconColor: "text-orange-500",
      gradientFrom: "from-orange-500",
      gradientTo: "to-orange-600",
    },
    {
      id: 5,
      name: "Prof. Pradeep Abeygunawardhana",
      role: "Supervisor",
      isLeader: false,
      degree: " B.Sc. in Electrical Engineering University of Moratuwa",
      institution: "Sri Lanka Institute of Information Technology",
      specialization: "Information Technology",
      email: "Pradeep.a@sliit.lk",
      image: "/departments/supervisor.jpg",
      cardColor: "border-gray-400 hover:border-gray-600",
      iconColor: "text-gray-600",
      gradientFrom: "from-gray-500",
      gradientTo: "to-gray-600",
    },
  ];

  return (
    <div id="OurTeam" className="max-w-7xl mx-auto p-2 bg-white min-h-screen">
      {/* Header */}
      <div className="text-center pt-12 pb-6">
        <div className="flex items-center justify-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-300 to-green-400"></div>
          <div className="relative">
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-green-500 to-teal-600 drop-shadow-sm whitespace-nowrap">
              Our Team
            </h1>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-8 h-8 text-emerald-400 animate-pulse" />
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-green-400 via-emerald-300 to-transparent"></div>
        </div>
        <p className="text-lg text-gray-600 mt-4 font-medium">
          Meet our talented team members ✨
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <React.Fragment key={member.id}>
            {member.role === "Supervisor" && (
              <div className="lg:col-span-4 md:col-span-2 text-center mt-8 mb-4">
                <h4 className="text-2xl font-bold text-gray-800">
                  Academic guidance and mentorship
                </h4>
              </div>
            )}
            <div
              className={`group relative bg-white rounded-2xl shadow-lg ${
                member.cardColor
              } border-2 transition-all duration-500 hover:shadow-2xl hover:scale-105 transform cursor-pointer overflow-hidden ${
                member.role === "Supervisor"
                  ? "lg:col-span-2 md:col-span-2"
                  : ""
              }`}
            >
              {/* Animated Background Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Leader Crown */}
              {member.isLeader && (
                <div className="absolute -top-2 -right-2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full p-3 shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <Crown className="text-white" size={20} />
                  </div>
                </div>
              )}

              <div className="relative p-6">
                {/* Conditional Layout based on Role */}
                {member.role === "Supervisor" ? (
                  // Supervisor Layout: Image Left, Details Right (Flexbox)
                  <div className="flex items-start gap-6">
                    {/* Profile image container (for Supervisor) */}
                    <div className="relative w-1/3 flex-shrink-0">
                      <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100 group-hover:shadow-xl transition-shadow duration-500">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      {/* Floating Role Badge - Positioned relative to supervisor image container */}
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                        <div
                          className={`bg-white px-4 py-2 rounded-full shadow-lg border-2 ${member.cardColor} group-hover:shadow-xl transition-all duration-500`}
                        >
                          <div className="flex items-center gap-2">
                            <Users className={member.iconColor} size={16} />
                            <span className="text-sm font-medium text-gray-700">
                              {member.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Details container (for Supervisor) */}
                    <div className="flex-1 mt-4">
                      {" "}
                      {/* Added mt-4 for spacing below role badge */}
                      {/* Name */}
                      <div className="mb-4">
                        {" "}
                        {/* Adjusted margin below name */}
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                          {member.name}
                        </h3>
                      </div>
                      {/* Details (Degree, Institution, Email) */}
                      <div className="space-y-3 text-sm">
                        {" "}
                        {/* Reduced space-y and text size for compactness */}
                        {/* Degree */}
                        <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                          <div
                            className={`p-1 rounded-lg bg-gray-50 ${member.iconColor} group-hover:bg-white group-hover:shadow-md transition-all duration-300`}
                          >
                            {" "}
                            {/* Reduced padding */}
                            <GraduationCap size={16} />{" "}
                            {/* Reduced icon size */}
                          </div>
                          <span className="text-gray-600 font-medium">
                            {member.degree}
                          </span>
                        </div>
                        {/* Institution */}
                        <div className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                          <div
                            className={`p-1 rounded-lg bg-gray-50 ${member.iconColor} group-hover:bg-white group-hover:shadow-md transition-all duration-300 mt-1`}
                          >
                            {" "}
                            {/* Reduced padding */}
                            <Building size={16} /> {/* Reduced icon size */}
                          </div>
                          <div>
                            <div className="text-gray-700 font-medium leading-tight">
                              {member.institution}
                            </div>
                            <div className="text-gray-500 text-sm">
                              {member.specialization}
                            </div>
                          </div>
                        </div>
                        {/* Email */}
                        <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-150">
                          <div
                            className={`p-1 rounded-lg bg-gray-50 ${member.iconColor} group-hover:bg-white group-hover:shadow-md transition-all duration-300`}
                          >
                            {" "}
                            {/* Reduced padding */}
                            <Mail size={16} /> {/* Reduced icon size */}
                          </div>
                          <a
                            href={`mailto:${member.email}`}
                            className="text-gray-600 text-sm hover:text-blue-600 transition-colors duration-300 break-all"
                          >
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Default Layout: Image Top, Details Bottom
                  <>
                    {/* Profile image container (default) */}
                    <div className="relative mb-6">
                      <div className="w-full h-64 rounded-xl overflow-hidden bg-gray-100 group-hover:shadow-xl transition-shadow duration-500">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Floating Role Badge (default) */}
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                        <div
                          className={`bg-white px-4 py-2 rounded-full shadow-lg border-2 ${member.cardColor} group-hover:shadow-xl transition-all duration-500`}
                        >
                          <div className="flex items-center gap-2">
                            <Users className={member.iconColor} size={16} />
                            <span className="text-sm font-medium text-gray-700">
                              {member.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Name (default) */}
                    <div className="text-center mb-6 mt-4">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                        {member.name}
                      </h3>
                    </div>

                    {/* Details (Degree, Institution, Email - default) */}
                    <div className="space-y-4">
                      {/* Degree */}
                      <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                        <div
                          className={`p-2 rounded-lg bg-gray-50 ${member.iconColor} group-hover:bg-white group-hover:shadow-md transition-all duration-300`}
                        >
                          <GraduationCap size={18} />
                        </div>
                        <span className="text-gray-600 font-medium">
                          {member.degree}
                        </span>
                      </div>

                      {/* Institution */}
                      <div className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                        <div
                          className={`p-2 rounded-lg bg-gray-50 ${member.iconColor} group-hover:bg-white group-hover:shadow-md transition-all duration-300 mt-1`}
                        >
                          <Building size={18} />
                        </div>
                        <div>
                          <div className="text-gray-700 font-medium text-sm leading-tight">
                            {member.institution}
                          </div>
                          <div className="text-gray-500 text-sm">
                            {member.specialization}
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-150">
                        <div
                          className={`p-2 rounded-lg bg-gray-50 ${member.iconColor} group-hover:bg-white group-hover:shadow-md transition-all duration-300`}
                        >
                          <Mail size={18} />
                        </div>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-600 text-sm hover:text-blue-600 transition-colors duration-300 break-all"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </>
                )}

                {/* Animated Border */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 w-full`}
                ></div>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10`}
              ></div>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Bottom Decoration */}
    </div>
  );
};

export default OurTeam;