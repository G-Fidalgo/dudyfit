import { Card } from 'react-bootstrap';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

const renderTooltip = (props: any) => (
  <Tooltip id="button-tooltip" {...props}>
    Valoración: {props.data.reputation}, Max clientes: {props.data.customersLimit}
  </Tooltip>
);
const TrainerCard = (props: any) => {
  return (
    <Card>
      {/* <Card.Img variant="top" src="/public/logo192.png" /> */}
      <Card.Body>
        <div className="cardTittleContainer">
          <Card.Title>{props.data.name}</Card.Title>
          <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltip(props)}>
            <Button variant="warning">i</Button>
          </OverlayTrigger>
        </div>
        <Card.Text>Clientes asignados:</Card.Text>
        {props.data.customers.map((e: any, i: number) => (
          <Card.Text key={i}>{e.fullName}</Card.Text>
        ))}
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{props.data.customers.length} Clientes asignados</small>
      </Card.Footer>
    </Card>
  );
};

export default TrainerCard;
