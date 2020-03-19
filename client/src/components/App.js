import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import Auth from "../hoc/auth";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";

function App() {
  return (
    <Router>
      <Suspense fallback={(<div>Loading...</div>)}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <NavBar />
        <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
          </Switch>
        </div>
        <Footer />
      </Suspense>
    </Router >
  );
}

export default App;
