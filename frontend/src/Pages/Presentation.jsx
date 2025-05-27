import React from 'react';
import { FileText, Award, Presentation, CheckSquare, BookOpen, Trophy, Image, Download, Sparkles } from 'lucide-react';

const Presentations = () => {
    const presentation = [
        {
            title: "Project Proposal",
            color: "blue",
            date: "August 2024",
            status: "Group",
            driveLink: "#",
            id: "1lr5R6tmQU2wM3qNQr18BDfmeb5U2ttzt",
            icon: Presentation
        },
        {
            title: "Progress Presentation I",
            color: "purple",
            date: "Mar 10, 2024",
            status: "Group",
            driveLink: "#",
            id: "1OWA2Ho8z33HEvZ4ygtP07FLat-xDreWk",
            icon: FileText
        },
        {
            title: "Progress Presentation II",
            color: "green",
            date: "Apr 22, 2024",
            status: "Group",
            driveLink: "#",
            id: "145_c4cZOZedg6RRlGt-aUYAWkigdUnDx",
            icon: CheckSquare
        },
        {
            title: "Final Presentation",
            color: "orange",
            date: "Jun 18, 2024",
            status: "Group",
            driveLink: "#",
            icon: Trophy
        },
    ];

    const greenColorSchemes = [
        {
            primary: "from-emerald-400 via-emerald-500 to-emerald-600",
            secondary: "from-emerald-300 to-emerald-400",
            bg: "bg-emerald-50/80",
            border: "border-emerald-200/50",
            shadow: "shadow-emerald-500/20",
            hoverShadow: "hover:shadow-emerald-500/40",
            text: "text-emerald-800",
            accent: "bg-emerald-100 text-emerald-700 border-emerald-300",
            glow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]"
        },
        {
            primary: "from-green-400 via-green-500 to-green-600",
            secondary: "from-green-300 to-green-400",
            bg: "bg-green-50/80",
            border: "border-green-200/50",
            shadow: "shadow-green-500/20",
            hoverShadow: "hover:shadow-green-500/40",
            text: "text-green-800",
            accent: "bg-green-100 text-green-700 border-green-300",
            glow: "shadow-[0_0_30px_rgba(34,197,94,0.3)]"
        },
        {
            primary: "from-lime-400 via-lime-500 to-lime-600",
            secondary: "from-lime-300 to-lime-400",
            bg: "bg-lime-50/80",
            border: "border-lime-200/50",
            shadow: "shadow-lime-500/20",
            hoverShadow: "hover:shadow-lime-500/40",
            text: "text-lime-800",
            accent: "bg-lime-100 text-lime-700 border-lime-300",
            glow: "shadow-[0_0_30px_rgba(132,204,22,0.3)]"
        },
        {
            primary: "from-teal-400 via-teal-500 to-teal-600",
            secondary: "from-teal-300 to-teal-400",
            bg: "bg-teal-50/80",
            border: "border-teal-200/50",
            shadow: "shadow-teal-500/20",
            hoverShadow: "hover:shadow-teal-500/40",
            text: "text-teal-800",
            accent: "bg-teal-100 text-teal-700 border-teal-300",
            glow: "shadow-[0_0_30px_rgba(20,184,166,0.3)]"
        }
    ];

    const getColorScheme = (index) => {
        return greenColorSchemes[index % greenColorSchemes.length];
    };

    const handleDownload = (driveLink) => {
        window.open(driveLink, '_blank');
    };

    return (
        <div id='Presentation' className="min-h-screen bg-white via-emerald-50 to-teal-50">
            <div className="text-center pt-12 pb-0">
                <div className="flex items-center justify-center gap-6">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-300 to-green-400"></div>
                    <div className="relative">
                        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-green-500 to-teal-600 drop-shadow-sm whitespace-nowrap">
                            Project Presentations
                        </h1>
                        <div className="absolute -top-2 -right-2">
                            <Sparkles className="w-8 h-8 text-emerald-400 animate-pulse" />
                        </div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-green-400 via-emerald-300 to-transparent"></div>
                </div>
                <p className="text-lg text-gray-600 mt-4 font-medium">
                    Access all project presentations with style ✨
                </p>
            </div>

            <div className="max-w-7xl mx-auto p-6">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 px-4 md:px-8">
                    {presentation.map((doc, index) => {
                        const Icon = doc.icon || Presentation;
                        const colors = getColorScheme(index);

                        return (
                            <div
                                key={index}
                                className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl ${colors.shadow} border-2 ${colors.border} transition-all duration-700 ease-out transform hover:-translate-y-6 hover:scale-105 ${colors.hoverShadow} hover:shadow-2xl overflow-hidden cursor-pointer`}
                                style={{
                                    animation: `float ${3 + (index * 0.5)}s ease-in-out infinite alternate`
                                }}
                            >
                                {/* Animated Background Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${colors.primary} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}></div>
                                
                                {/* Floating Particles Effect */}
                                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-ping transition-all duration-500"></div>
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-pulse transition-all duration-700 delay-200"></div>
                                    <div className="absolute bottom-4 left-6 w-3 h-3 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-bounce transition-all duration-600 delay-100"></div>
                                </div>

                                {/* Card Header with Enhanced Animation */}
                                <div className={`bg-gradient-to-br ${colors.primary} p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                                    {/* Animated Background Pattern */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-white/30 rounded-full group-hover:rotate-180 transition-transform duration-1000"></div>
                                        <div className="absolute top-0 left-0 w-16 h-16 border-2 border-white/20 rounded-full group-hover:scale-150 transition-transform duration-700 delay-200"></div>
                                        <div className="absolute bottom-0 right-0 w-12 h-12 bg-white/10 rounded-full group-hover:scale-125 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500"></div>
                                    </div>

                                    <div className="relative z-10 text-center">
                                        {/* Icon with Enhanced Animation */}
                                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                                            <Icon size={36} className="text-white group-hover:scale-125 transition-transform duration-300" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                                            {doc.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Card Body with Enhanced Styling */}
                                <div className="p-6 text-center group-hover:bg-gradient-to-br group-hover:from-white/95 group-hover:to-green-50/90 transition-all duration-500">
                                    <div className="flex items-center justify-between mb-6">
                                        {/* Date Container */}
                                        <div className="flex flex-col items-start space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full group-hover:animate-pulse"></div>
                                                <p className="text-gray-600 text-sm font-semibold group-hover:text-green-700 transition-colors duration-300">
                                                    {doc.date}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Status Badge with Animation */}
                                        <div className="group-hover:scale-110 transition-transform duration-300">
                                            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold border-2 ${colors.accent} group-hover:shadow-lg transition-all duration-300`}>
                                                <span className="mr-2 text-base">
                                                    {doc.status === "Individual" ? "👤" : "👥"}
                                                </span>
                                                {doc.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Enhanced Download Button */}
                                    <a
                                        href={doc.id ? `https://drive.google.com/uc?export=download&id=${doc.id}` : doc.driveLink}
                                        download
                                        className={`w-full bg-gradient-to-r ${colors.secondary} hover:from-green-500 hover:to-emerald-500 text-white py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-500 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group-hover:scale-105 hover:shadow-green-500/30 relative overflow-hidden`}
                                    >
                                        {/* Button Background Animation */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                        
                                        <Download size={16} className="group-hover:animate-bounce" />
                                        <span className="relative z-10">Download</span>
                                    </a>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 ${colors.glow} transition-all duration-700 pointer-events-none`}></div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    from {
                        transform: translateY(0px);
                    }
                    to {
                        transform: translateY(-10px);
                    }
                }
            `}</style>
        </div>
    );
};

export default Presentations;