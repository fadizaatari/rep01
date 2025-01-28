import { Accordion } from "react-bootstrap";

function BootStrapAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>MES BONJOURS</Accordion.Header>
        <Accordion.Body>Bonjour. Je suis Fadi</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>DETAILS PAGE UNE</Accordion.Header>
        <Accordion.Body>je Fais de l'informatique. OK</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BootStrapAccordion;
