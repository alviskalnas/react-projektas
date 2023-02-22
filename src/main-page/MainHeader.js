import React from "react";
import './App.css'
function MainHeader() {
     return (
<header className="main-header">
  <div className="container-upper">
    <div className="wrap">
      <div className="image-wrapper">
        <img src="./images/codeacademy-black.svg" alt="CodeAcademy logo" className="logo" />
      </div>
      <nav className="main-navigation">
        <ul className="main-menu">
          <li className="menu-item"><a>Studentams</a></li>
          <li className="menu-item"><a>Verslui</a></li>
          <li className="menu-item"><a>Programos</a></li>
          <li className="menu-item"><a>Apie mus</a></li>
          <li className="menu-item"><a>Naujienos</a></li>
          <li className="menu-item"><a>IT testas</a></li>
          <li className="menu-item"><a>Kontaktai</a></li>
          <li className="menu-item"><a>EN</a></li>
        </ul>
      </nav>
      <div className="additional-button">
        <a className="button" href="tel:+37045646444">Skambinti</a>
      </div>
    </div>
  </div>
</header>


       
     )
}
export default MainHeader;