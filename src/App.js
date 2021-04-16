import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddService from "./components/Admin/AddService/AddService";
import Admin from "./components/Admin/Admin/Admin";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route path="/admin">
            <Admin></Admin>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/addService">
           <AddService></AddService>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
