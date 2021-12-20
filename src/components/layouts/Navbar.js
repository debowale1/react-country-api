import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="nav">
    <div className="nav__logo nav--left">Where in the world?</div>
    <div className="nav--right">
      <ul className="darkmode">
        {/* <li className="darkmode__icon">moon</li> */}
        <li className="darkmode__text"><Link className="toggle-darkmode" to="/"> <i className="fas fa-moon"></i> Dark Mode</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar;