import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/Context";
import Landing from "./layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/create-profile/CreateProfile";
import ProtectedRoutes from "./utility/ProtectedRoutes";
import Confirmation from "./components/common/Confirmation";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Route exact path="/" component={Landing} />

          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/confirm-email" component={Confirmation} />
            <Switch>
              <ProtectedRoutes exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <ProtectedRoutes
                exact
                path="/create-profile"
                component={CreateProfile}
              />
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
