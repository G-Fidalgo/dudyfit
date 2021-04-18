import { Tab, Tabs } from 'react-bootstrap';
import FirstTabSummary from '../../components/FirstTabSummary';

const SummaryScreen = () => {
  return (
    <Tabs defaultActiveKey="entrenadores" id="uncontrolled-tab-example">
      <Tab eventKey="entrenadores" title="Entrenadores">
        <FirstTabSummary></FirstTabSummary>
      </Tab>
      <Tab eventKey="valoracion" title="Valoración de conjunto">
        bbb
      </Tab>
    </Tabs>
  );
};

export default SummaryScreen;
