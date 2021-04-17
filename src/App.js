import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddService from "./components/Admin/AddService/AddService";
import Booking from "./components/Admin/Booking/Booking"
import AddAdmin from "./components/Admin/AddAdmin/AddAdmin"
import Admin from "./components/Admin/Admin/Admin";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import Review from "./components/Admin/Review/Review";
import ManageService from "./components/Admin/ManageService/ManageService";
import ViewOrder from "./components/Admin/ViewOrder/ViewOrder";
import UserOrder from "./components/Admin/UserOrder/UserOrder";
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

          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>

          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>

          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>

          <PrivateRoute path="/manageService">
            <ManageService></ManageService>
          </PrivateRoute>

          <PrivateRoute path="/viewOrder">
            <ViewOrder></ViewOrder>
          </PrivateRoute>

          <PrivateRoute path="/myOrder">
            <UserOrder></UserOrder>
          </PrivateRoute>

          <PrivateRoute path="/booking/:_id">
            <Booking></Booking>
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
