import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonial from './Testimonial';

function App() {
  const title = 'BOOST NOW';
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about.com">
            <Create />
          </Route>
          <Route path="/service.com">
            <Services />
          </Route>
          <Route path="/portfolio.com">
            <Portfolio />
          </Route>
          <Route path="/testimonial.com">
            <Testimonial />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
