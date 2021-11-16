import { Link } from 'react-router-dom';

/**
 * Button that goes on the navbar
 * @param  {String} displayText What is displayed on the button
 * @param  {String} linkLocation The react-router-dom {Link} location
 * @return {JSX}     JSX for the link
 */
const NavLink = ({displayText, linkLocation}) => {
  return <>
  <Link to={linkLocation}>
    <div className='nav-link'>{displayText}</div>
  </Link>
  </>
}

export default NavLink;