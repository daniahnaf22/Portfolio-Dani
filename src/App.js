import "./App.css";
import Education from "./components/Education";
import Navi from "./components/Navbar";
import Head from "./components/Head";
import Biodata from "./components/Biodata";

const CV = () => {
  return (
    <div className="CV">
      <Navi />
      <Head />

      <h2>Tentang saya</h2>
      <Biodata />
      
      <h2>Pendidikan</h2>
      <Education />

      <h2>Pengalaman Magang</h2>

    </div>
  );
};

export default CV;
