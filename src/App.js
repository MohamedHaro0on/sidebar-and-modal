import Layout from "./Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import Modal from "./Modal/Modal";
import "./MainContent.css";
import "./App.css";


const App = () => {

  return (
    <Router>
      <Switch>
        <Layout>
          <Modal />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;