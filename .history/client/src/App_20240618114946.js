import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/login">
          <Home />
        </Route>

        <Route path="/register">
          <Home />
        </Route>

        <Route path="/profile">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
