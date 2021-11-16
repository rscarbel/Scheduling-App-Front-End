import NavLink from "./NavLink";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Nav = () => {
  return <nav>
    <Router>
      <NavLink displayText='Example1' linkLocation='/' />
      <NavLink displayText='Example2' linkLocation='/' />
      <NavLink displayText='Example3' linkLocation='/' />
      <NavLink displayText='Example4' linkLocation='/' />
    </Router>
  </nav>
};

export default Nav;