import './App.css';
import NavBar from './Navbar';
import Home from './Home';
import Bball from './Bball';
import Badmin from './Badminton';
import Feedback from './Feedback';
import Footer from './Footer';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const [language, setLanguage] = useState("English");

  return (
    <Router>
      <div className="">
        <NavBar language={language}/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/basketball">
              <Bball />
            </Route>
            <Route exact path="/badminton">
              <Badmin />
            </Route>
            <Route exact path="/feedback">
              <Feedback language={language}/>
            </Route>
          </Switch>
        </div>
        <Footer language={language} setLanguage={setLanguage}/>
      
      </div>
    </Router>
  );
}

export default App;


/*
Navbar - https://react-bootstrap.github.io/components/navbar/
Bootstrap and toast - https://codesandbox.io/s/github/react-bootstrap/code-sandbox-examples/tree/master/basic-cdn?file=/src/App.js:666-802
Cards - https://react-bootstrap.github.io/components/cards/
Accordion - https://thewebdev.info/2020/08/01/react-bootstrap%E2%80%8A-%E2%80%8Aaccordion/
*/