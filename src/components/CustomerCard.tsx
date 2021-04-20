import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import '../styles/customerCard.css';

const CustomerCard = (props: any) => {
  interface IData {
    fullName: string;
    preferences: {
      coachReputation: number;
    };
    satisfaction: string;
    trainer: {
      name: string;
      reputation: number;
    };
  }
  const [cardData, setCardData] = useState<IData>({
    fullName: '',
    preferences: {
      coachReputation: 0,
    },
    satisfaction: '',
    trainer: {
      name: '',
      reputation: 0,
    },
  });

  useEffect(() => {
    console.log(props.data);
    let data: any = props.data;
    setCardData(data);
  }, []);

  return (
    <Card className="customerCardWrap">
      <Card.Body>
        <div className="cardTittleContainer">
          <Card.Title>{cardData.fullName}</Card.Title>
        </div>
        <Card.Text>
          <Button variant={cardData.satisfaction === 'Poco satisfecho' ? 'danger' : 'success'}>{cardData.satisfaction}</Button>
          <div className="customerTrainerWrap">
            <span>Entrenador: {cardData.trainer.name}</span>
            <span>Reputación: {cardData.trainer.reputation}</span>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomerCard;
