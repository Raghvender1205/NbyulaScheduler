import React, { useEffect, useState } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import TerraformLogin from "./Pages/TerraformLogin";
import TerraformDashboard from "./Pages/TerraformDashboard";
import PaitentDashboard from "./Pages/TerraformUserDashboard";
import Error from "./Pages/Error";
import { AuthContext } from "./Auth/AuthContext";
import PhoneNumber from "./components/PhoneNumber";
import PersonalDetails from "./Terraform/PersonalDetails";
import SearchTerraform from "./TerraformUser/SearchTerraform";
import PerviousAppointments from "./TerraformUser/PreviousAppointments";
import Spinner from "react-bootstrap/Spinner";
import Selectdate from "./TerraformUser/Selectdate";
import BookingSlots from "./Terraform/BookingSlots";
import Payment from "./TerraformUser/Payment";
import TerraformAppointments from "./Terraform/PaymentHistory";
import AppointmentStatus from "./TerraformUser/AppointmentStatus";
import Pfeedback from './TerraformUser/Feedback';
import FeedbackDetails from './Terraform/FeedbackDetails';

function App() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [googleId, setGoogleId] = useState(
    window.localStorage.getItem("googleId")
  );

  const [apiLoaded, setApiLoaded] = useState(false);

  // To load only when gapi is loaded
  useEffect(() => {
    if (window.gapi !== undefined) {
      setApiLoaded(false);
      window.gapi.load("client:auth2", initClient);
      function initClient() {
        window.gapi.client
          .init({
            apiKey: process.env.REACT_APP_API_KEY,
            clientId: process.env.REACT_APP_CLIENT_ID,
            discoveryDocs: [process.env.REACT_APP_DISCOVERY_DOCS],
            scope: process.env.REACT_APP_SCOPE,
          })
          .then(
            function () {
              if (window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
                console.log(
                  `Is signed in? ${window.gapi.auth2
                    .getAuthInstance()
                    .isSignedIn.get()}`
                );
              } else {
                console.log("Currently Logged Out!!");
              }
              setApiLoaded(true);
            },
            function (error) {
              console.log(`error ${JSON.stringify(error)}`);
              setApiLoaded(true);
            }
          );
      }
      setApiLoaded(true);
    } else {
      console.log("[Google] inside the else block line 54 App.js");
      setApiLoaded(false);
    }

  }, []);

  return apiLoaded ? (
    <Router>
      <AuthContext.Provider value={{ token, setToken, googleId, setGoogleId }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/terraformlogin" component={TerraformLogin} />
          <Route exact path="/terraform" component={TerraformDashboard} />
          <Route exact path="/terraformUser/searchterraform" component={SearchTerraform} />
          <Route exact path="/terraformUser" component={PaitentDashboard} />
          <Route exact path="/terraformUser/update-phone" component={PhoneNumber} />
          <Route
            exact
            path="/terraformUser/previousappointments"
            component={PerviousAppointments}
          />
          <Route
            exact
            path="/terraform/perosnaldetails"
            component={PersonalDetails}
          />
          <Route
            exact
            path="/terraform/payment-history"
            component={TerraformAppointments}
          />
          <Route exact path="/terraform/feedback/:id" component={FeedbackDetails} />

          <Route exact path="/terraformUser/selectdate" component={Selectdate} />
          <Route exact path="/terraformUser/book-slot" component={BookingSlots} />
          <Route exact path="/terraformUser/payment" component={Payment} />
          <Route exact path="/terraformUser/appointment-status" component={AppointmentStatus} />
          <Route exact path="/terraformUser/feedback/:id" component={Pfeedback} />

          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </AuthContext.Provider>
    </Router>
  ) : (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Spinner animation="border" variant="danger" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default App;