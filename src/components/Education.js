import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Education = () => {
  return (
    <div className="container-card">
      <Card>
        <Card.Img variant="top" src="images/unnamed (2).jpg"  height={'300px'} />
        <Card.Body>
          <Card.Title>SMA</Card.Title>
          <Card.Text>SMA Kartika I-5 Padang</Card.Text>
          <Card.Text>IPA</Card.Text>
          <Button variant="primary" href="https://sma1-5kartikajaya.sch.id/" target="_blank">Read More...</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="images/poli.jpg" height={'300px'}/>
        <Card.Body>
          <Card.Title>D3</Card.Title>
          <Card.Text>Politeknik Negeri Padang</Card.Text>
          <Card.Text>Teknik Komputer</Card.Text>
          <Card.Text>IPK : 3,46</Card.Text>
          <Button variant="primary" href="https://www.pnp.ac.id/" target="_blank" >Read More...</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="images/poli.jpg" height={'300px'}/>
        <Card.Body>
          <Card.Title>D4</Card.Title>
          <Card.Text>Politeknik Negeri Padang</Card.Text>
          <Card.Text>Teknologi Rekayasa Perangkat Lunak</Card.Text>
          <Card.Text>On going</Card.Text>
          <Button variant="primary" href="https://www.pnp.ac.id/" target="_blank" >Read More...</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Education;
