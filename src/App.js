import Nav from "./components/Nav.jsx";
import HomePage from "./components/home/HomePage";
import ReviewPage from "./components/review/ReviewPage.jsx";

import { Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Nav />

      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/review/:id">
        <ReviewPage />
      </Route>
    </div>
  );
}

export default App;
