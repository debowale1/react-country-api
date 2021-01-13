const Navbar = () => {
  return (
    <nav className="nav">
    <div className="nav__logo nav--left">Where in the world?</div>
    <div className="nav--right">
      <ul className="darkmode">
        {/* <li className="darkmode__icon">moon</li> */}
        <li className="darkmode__text"><a className="toggle-darkmode" href="#"> <i className="fas fa-moon"></i> Dark Mode</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar;