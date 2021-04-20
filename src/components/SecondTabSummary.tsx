import { useEffect, useContext, useState } from 'react';
import { CardDeck } from 'react-bootstrap';
import Context from '../utils/context';
import customerSatisfaction from '../services/customerSatisfaction.service';
import CustomerCard from './CustomerCard';
import '../styles/secondSummaryTab.css';

const SecondTabSummary = () => {
  const { context } = useContext<any>(Context);

  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    let list: any = customerSatisfaction(context).map((e: any, i: number) => <CustomerCard key={i} data={e}></CustomerCard>);
    setCardList(list);
  }, []);

  return <CardDeck className="secondSummaryTab">{cardList}</CardDeck>;
};
export default SecondTabSummary;
