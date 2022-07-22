import logo from 'assets/images/logo.png'
function MainHeader(props) {
  return (
    <header className="main-header">
      <div className="main-header-logo">
        <img src={logo} alt="" />
        <span className="main-header-logo-text">Andres CRM</span>
      </div>
    </header>
  )
}

MainHeader.propTypes = {}

export default MainHeader
