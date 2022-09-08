import { Link, withRouter } from "react-router-dom";

const NavBar = () => {
  const linkStyles = {
    color: 'white',
    textDecoration: 'none',
    paddingLeft: '20px',
    paddingRight: '20px'
  }
  return ( 
    <div className="nav-bar">
      <ul>
        <Link to={'/'} style={linkStyles}>Home</Link>
        <Link to={'/booklist'} style={linkStyles}>Book List</Link>
        <Link style={linkStyles}>Add A Book</Link>
      </ul>
    </div>
   );
}
 
export default NavBar;