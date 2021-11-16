import BottomNavLink from "./BottomNavLink";
import ScheduleDay from "../../pages/ScheduleDay";
import Employees from "../../pages/Employees";
import Account from "../../pages/Account";
import Login from "../../pages/Login";
import Logout from "../../pages/Logout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const BottomNavbar = () => {
  return <>
    <Router>
      <div className='page-content'>
    <Switch>
        <Route path='/' exact component={ScheduleDay}/>
        <Route path='/schedule-day' exact component={ScheduleDay}/>
        <Route path='/employees' exact component={Employees}/>
        <Route path='/account' exact component={Account}/>
        <Route path='/logout' exact component={Logout}/>
        <Route path='/login' exact component={Login}/>
      </Switch>
      </div>
      <nav className='bottom-nav'>
      <BottomNavLink displayText='Schedule' iconImage='assets/home_icon.png' linkLocation='/schedule-day' />
      <BottomNavLink displayText='Employees' iconImage='assets/employees_icon.png' linkLocation='/employees' />
      </nav>
    </Router>
  </>
};

export default BottomNavbar;