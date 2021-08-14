import React from 'react';
import './App.css';
import Navbar from './components/';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Drum from './pages/drum-machine';
import Markdown from './pages/MarkdowntoHTML';
import Timer from './pages/timer';
import Quote from './pages/qGenerator';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Drum} />
        <Route path='/drum' component={Drum} />
        <Route path='/quote' component={Quote} />
        <Route path='/calc' component={Calculator} />
        <Route path='/markdown' component={Markdown} />
        <Route path='/timer' component={Timer} />
      </Switch>
    </Router>
  );
}

export default App;