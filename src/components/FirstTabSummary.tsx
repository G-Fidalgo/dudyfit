import { useContext, useEffect, useState } from 'react';
import Context from '../utils/context';
import { CardDeck } from 'react-bootstrap';
import trainerAssingment from '../services/trainerAssingment.service';
import TrainerCard from './TrainerCard';
import '../styles/firstTabSummary.css';

const FirstTabSummary = (props: any) => {
  const { context } = useContext<any>(Context);

  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    let list: any = trainerAssingment(context).map((e: any, i: number) => <TrainerCard key={i} data={e}></TrainerCard>);
    setCardList(list);
  }, []);

  return <CardDeck className="deckContainer">{cardList}</CardDeck>;
};

export default FirstTabSummary;
