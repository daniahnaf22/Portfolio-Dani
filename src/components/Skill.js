import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Bahasa from "./Bahasa";
import SoftSkill from "./SoftSkill";
import Pelatihan from "./Pelatihan";

const Skill = () => {
  return (
    <div className="container">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="bahasa" title="Bahasa">
            <Bahasa />
        </Tab>
        <Tab eventKey="softskill" title="Soft Skill">
            <SoftSkill />
        </Tab>
        <Tab eventKey="pelatihan" title="Pelatihan">
            <Pelatihan />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Skill;