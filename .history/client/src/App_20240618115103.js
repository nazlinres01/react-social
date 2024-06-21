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
          <Login />
        </Route>

        <Route path="/register">
          <Home />
        </Register>

        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
