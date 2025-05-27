import React from "react";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import Hero from "../components/Hero";
import Domain from "./Domain";
import Milestones from "./Milestones";
import Navbar from "../components/Navbar";
import { Milestone } from "lucide-react";
import OurTeam from "./OurTeam";
import Documents from "./Documents";
import Presentations from "./Presentation";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div id="Home" className="w-full overflow-x-hidden">
       <Navbar />
      <Hero
        title={
          "TeaGuardian: AI-Powered Tea Disease Protection | Next-Gen Cultivation Intelligence"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
       <Domain/>
       <Milestones/>
       <Documents />
       <Presentations />
       <OurTeam/>
      <Departments />
      <ContactUs/>
    </div>
  );
};

const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes flow {
    0% { transform: translateX(0); }
    100% { transform: translateX(20px); }
  }

  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out forwards;
  }

  .animate-flow {
    animation: flow 2s infinite linear;
  }

  .animation-delay-200 {
    animation-delay: 0.2s;
  }

  .animation-delay-400 {
    animation-delay: 0.4s;
  }

  html, body {
    overflow-x: hidden;
    inline-size: 100%;
  }

  .container {
    max-inline-size: 100%;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default Home;
