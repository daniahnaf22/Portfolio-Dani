import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const Organization = () => {
  return (
    <div className="container">
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Cybertech</div>
            Padang,Sumatera Barat Jun 2019 - Jan 2022
          </div>
        </ListGroup.Item>

        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">MPK(Majelis Perwakilan Siswa) SMA</div>
            Padang,Sumatera Barat Apr 2016 - May 2018
          </div>
        </ListGroup.Item>

        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Robotik SMA Kartika I-5</div>
            Padang,Sumatera Barat Apr 2016 - May 2018
          </div>
        </ListGroup.Item>

      </ListGroup>
    </div>
  );
};

export default Organization;
