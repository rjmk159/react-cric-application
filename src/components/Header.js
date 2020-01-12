import React from 'react';
import HeaderComponent from '../assets/css/HeaderComponent.style'

class Header extends React.Component {
  render(){
    return (
      <HeaderComponent className="header">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand" href="#">CricInfo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
    </HeaderComponent>
    )
  }
 
}
export default Header;