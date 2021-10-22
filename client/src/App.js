import Nav from "./components/Nav.jsx";
import HomePage from "./components/HomePage.jsx";
import ReviewPage from "./components/ReviewPage.jsx";

import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />

      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="">
        <ReviewPage />
      </Route>
    </div>
  );
}

export default App;
