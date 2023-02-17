import "./App.css";
import Education from "./components/Education";
import Navi from "./components/Navbar";
import Head from "./components/Head";
import Biodata from "./components/Biodata";
import Organization from "./components/Organzation";
import Skill from "./components/Skill";


const CV = () => {
  return (
    <div className="CV">
      <Navi />
      <Head />

      <h2>Tentang saya</h2>
      <Biodata />
      
      <h2>Pendidikan</h2>
      <Education />

      <h2>Organisasi</h2>
      <Organization />

      <h2>Skills, Achievements & Other Experience</h2>
      <Skill />


    </div>
  );
};

export default CV;
