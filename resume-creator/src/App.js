import React, { useEffect } from 'react';
import './App.css';
import { AppHeader } from './AppHeader';
import $ from 'jquery'; 
import { Profile } from './Profile/Profile';

function App() {

  useEffect(() => {
    var navbar = document.getElementById("navBar");
    var sticky = navbar.offsetTop; 
    window.onscroll = function() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    };

    var header = document.getElementById("collapsibleNavbar");
    var btns = header.getElementsByClassName("nav-item");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }
  });

 
  return (
    <div className="App">
      <AppHeader />
      {/* <div style={{ height: '100px' }}> section 0</div> */}
        <nav id="navBar" className="navbar navbar-expand-md bg-dark navbar-dark">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#profile">profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#link">Link</a>
            </li>
          </ul>
        </div>
        </nav>
        <div style={{ background: 'white'}}>
          <div id="profile" className="profile section">
            <Profile />
          </div>
          <div id="experience" className="experience">
            Experience
          </div>
          <div id="link" className="link">
            link
          </div>
        </div>
    </div>
  );
}

export default App;
