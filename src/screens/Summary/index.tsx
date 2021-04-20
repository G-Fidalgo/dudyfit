import { Tab, Tabs, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FirstTabSummary from '../../components/FirstTabSummary';
import SecondTabSummary from '../../components/SecondTabSummary';
import '../../styles/summary.css';

const SummaryScreen = () => {
  return (
    <div>
      <Tabs defaultActiveKey="entrenadores" id="uncontrolled-tab-example">
        <Tab eventKey="entrenadores" title="Entrenadores">
          <FirstTabSummary></FirstTabSummary>
        </Tab>
        <Tab eventKey="satisfaction" title="Satisfacción">
          <SecondTabSummary></SecondTabSummary>
        </Tab>
      </Tabs>
      <Button variant="warning">
        <Link to="/form">Volver</Link>
      </Button>
    </div>
  );
};

export default SummaryScreen;
