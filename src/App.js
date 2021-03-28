import Layout from "./Layout";
import { BrowserRouter as Router, Switch , Route} from "react-router-dom";



import Modal from "./Modal/Modal";
import "./MainContent.css";
import "./App.css";


const App = () => {

  return (
    <Router>
      <Switch>
        <Layout>
            <Route exact path = "/" component = {Modal} />
            <Route exact path = "/documents" component = {Modal} />
            <Route exact path = "/team" component = {Modal} />
            <Route exact path = "/projects" component = {Modal} />
            <Route exact path = "/calendar" component = {Modal} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;