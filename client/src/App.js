import Nav from "./components/Nav.jsx";
import HomePage from "./components/HomePage.jsx";
import ReviewPage from "./components/ReviewPage.jsx";

import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />

      <hr />

      <Route path="/" exact>
        <HomePage />
      </Route>

      <hr />

      <Route path="/review/:id">
        <ReviewPage />
      </Route>
      <hr />
    </div>
  );
}

export default App;
