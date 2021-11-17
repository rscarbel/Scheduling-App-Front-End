import './App.css';
import BottomNavbar from './components/Nav/BottomNavbar';
import TopNavbar from './components/Nav/TopNavbar';
import ScheduleDay from "./pages/ScheduleDay";
import Employees from "./pages/Employees";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import CreateAccount from "./pages/CreateAccount";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNavbar />
        <div className='page-content'>
          <Switch>
            <Route path='/' exact component={ScheduleDay}/>
            <Route path='/create-account' exact component={CreateAccount} />
            <Route path='/schedule-day' exact component={ScheduleDay}/>
            <Route path='/employees' exact component={Employees}/>
            <Route path='/account' exact component={Account}/>
            <Route path='/logout' exact component={Logout}/>
            <Route path='/login' exact component={Login}/>
          </Switch>
        </div>
        <BottomNavbar />
      </Router>
    </div>
  );
}

export default App;