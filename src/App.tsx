import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FirstStepScreen from './screens/FirstStep';
import SummaryScreen from './screens/Summary';
import Context from './utils/context';
import { useEffect, useState } from 'react';

function App() {
  const [context, setContext] = useState<any>([]);
  const value = { context, setContext };
  useEffect(() => {
    setContext([]);
  }, []);
  return (
    <Context.Provider value={value}>
      <Router>
        <Switch>
          <Route path="/a">
            <FirstStepScreen />
          </Route>
          <Route path="/b">
            <SummaryScreen />
          </Route>
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
