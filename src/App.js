import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Form from './Form/Form';
import Convo from './Convo';

function App() {
  return (
    // <div style={{backgroundColor:"#f2d3d0"}}>
    //   <Form/>
    // </div>
      <div>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/convo">
                <Convo />
              </Route>
              <Route path="/">
                <Form />
              </Route>
            </Switch>  
      </div>
  );
}

export default App;
