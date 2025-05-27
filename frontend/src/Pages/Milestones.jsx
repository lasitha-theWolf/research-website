import React from "react";
import {
  Award,
  BookOpen,
  FileText,
  Globe,
  MessageSquare,
  Monitor,
  Users
} from "lucide-react";

const ProjectMilestones = () => {
  const milestones = [
    {
      id: 1,
      icon: FileText,
      date: "August 2024",
      title: "Project Proposal",
      description:
        "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
      weight: 6,
      contribution: 6,
    },
    {
      id: 2,
      icon: MessageSquare,
      date: "December 2024",
      title: "Progress Presentation I",
      description:
        "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
      weight: 6,
      contribution: 6,
    },
    {
      id: 3,
      icon: BookOpen,
      date: "April 2025",
      title: "Research Paper",
      description:
        "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge",
      weight: 10,
      contribution: 10,
    },
    {
      id: 4,
      icon: Monitor,
      date: "March 2025",
      title: "Progress Presentation II",
      description:
        "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.",
      weight: 18,
      contribution: 18,
    },
    {
      id: 5,
      icon: Award,
      date: "April 2025",
      title: "Final Report",
      description:
        "Final Report evaluates the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.",
      weight: 19,
      contribution: 19,
    },
    {
      id: 6,
      icon: Globe,
      date: "May 2025",
      title: "Website Assessment",
      description:
        "The Website helps to promote our research project and reveals all details related to the project.",
      weight: 2,
      contribution: 2,
    },
    {
      id: 7,
      icon: Users,
      date: "May 2025",
      title: "Final Presentation & Viva",
      description:
        "Viva is held individually to assess each member's contribution to the project.",
      weight: 20,
      contribution: 20,
    },
  ];

  const getProgressWidth = (contribution) => {
    return `${(contribution / 20) * 100}%`;
  };

  return (
    <div
      id="Milestones"
      className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-green-50 min-h-screen"
    >
      {/* Header */}
      <div className="text-center pt-12 pb-6">
        <div className="flex items-center justify-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-300 to-green-400"></div>
          <div className="relative">
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-green-500 to-teal-600 drop-shadow-sm whitespace-nowrap">
              Project Milestones
            </h1>
            <div className="absolute -top-2 -right-2">
              <div className="w-8 h-8 text-emerald-400">✨</div>
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-green-400 via-emerald-300 to-transparent"></div>
        </div>
        <p className="text-lg text-gray-600 mt-4 font-medium">
          Track our project progress and achievements ✨
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-emerald-700"></div>

        {/* Milestones */}
        <div className="space-y-8">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div key={milestone.id} className="relative flex items-start">
                {/* Timeline Icon */}
                <div
                  className={`relative z-10 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg`}
                >
                  <Icon size={24} />
                </div>

                {/* Content Card */}
                <div className="ml-8 flex-1">
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    {/* Header with Date and Weight */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-gray-100 px-4 py-2 rounded-full">
                        <span className="text-sm font-medium text-gray-600">
                          {milestone.date}
                        </span>
                      </div>
                      {/* Weight/Contribution Card */}
                      <div className="bg-emerald-100 px-4 py-2 rounded-xl">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-800">
                            {milestone.weight}
                          </div>
                          <div className="text-xs text-emerald-700 font-medium">
                            {milestone.weight}% Weight
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      {milestone.description}
                    </p>

                    {/* Progress Bar Section */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-700">
                          Contribution to Final Grade
                        </span>
                        <span className="text-sm font-bold text-gray-800">
                          {milestone.contribution}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-3 rounded-full transition-all duration-500 ease-out"
                          style={{
                            width: getProgressWidth(milestone.contribution),
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectMilestones;