import NavLink from "./NavLink";
import ScheduleDay from "../../pages/ScheduleDay";
import Employees from "../../pages/Employees";
import Account from "../../pages/Account";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Nav = () => {
  return <nav>
    <Router>
      <NavLink displayText='Example1' linkLocation='/schedule-day' />
      <NavLink displayText='Example2' linkLocation='/employees' />
      <NavLink displayText='Example3' linkLocation='/account' />
      <Switch>
        <Route path='/schedule-day' exact component={ScheduleDay}/>
        <Route path='/employees' exact component={Employees}/>
        <Route path='/account' exact component={Account}/>
      </Switch>
    </Router>
  </nav>
};

export default Nav;