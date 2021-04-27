import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import test from "./components/test";
import Results from "./pages/Results/Results";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/results" component={Results} />
        <Route path="/test" component={test} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
