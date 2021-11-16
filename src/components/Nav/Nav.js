import NavLink from "./NavLink";
import ScheduleDay from "../../pages/ScheduleDay";
import Employees from "../../pages/Employees";
import Account from "../../pages/Account";
import Login from "../../pages/Login";
import Logout from "../../pages/Logout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Nav = () => {
  return <>
    <Router>
      <nav className='bottom-nav'>
      <NavLink displayText='Schedule' iconImage='assets/home_icon.png' linkLocation='/schedule-day' />
      <NavLink displayText='Employees' iconImage='assets/employees_icon.png' linkLocation='/employees' />
      <NavLink displayText='Account' iconImage='assets/account_icon.png' linkLocation='/account' />
      <NavLink displayText='Logout' iconImage='assets/logout_icon.png' linkLocation='/logout' />
      </nav>
      <Switch>
        <Route path='/schedule-day' exact component={ScheduleDay}/>
        <Route path='/employees' exact component={Employees}/>
        <Route path='/account' exact component={Account}/>
        <Route path='/logout' exact component={Logout}/>
        <Route path='/login' exact component={Login}/>
      </Switch>

    </Router>

  </>
};

export default Nav;