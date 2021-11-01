import NavLink from "./NavLink";

const Nav = () => {
  return <nav>
    <div className='nav-home'>Home</div>
    <div className='nav-link-container'>
      <NavLink text="Example1" />
      <NavLink text="Example2" />
      <NavLink text="Example3" />
      <NavLink text="Example4" />
    </div>
  </nav>
};

export default Nav;