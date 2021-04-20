import './App.css';
import FirstStepScreen from './screens/FirstStep';
import SummaryScreen from './screens/Summary';
import Context from './utils/context';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [context, setContext] = useState<any>([]);
  const value = { context, setContext };
  useEffect(() => {
    setContext([]);
  }, []);
  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <Switch>
          <Route path="/form">
            <FirstStepScreen />
          </Route>
          <Route path="/summary">
            <SummaryScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
