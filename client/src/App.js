import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import Results from "./pages/Results/Results";
import Nominations from "./pages/Nominations/Nominations";
import MoviePage from "./pages/MoviePage/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/results" component={Results} />
        <Route path="/nominations" component={Nominations} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
