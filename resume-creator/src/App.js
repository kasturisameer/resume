import React, { useEffect } from 'react';
import './App.css';
import { AppHeader } from './AppHeader';
import $ from 'jquery'; 
import { Profile } from './Profile/Profile';
import { MyProjects } from './Projects/Projects';
import { Education } from './Education/Education';
import { Abilities } from './Abilities/Abilities';
import { Contact } from './Contact/Contact';

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

    $("#nav ul li a[href^='#']").on('click', function(e) {

      e.preventDefault();
   
      var hash = this.hash;
   
      $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
   
          window.location.hash = hash;
        });
      
      });

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
        <nav id="navBar" className="navbar navbar-expand-md bg-dark navbar-dark">
          <div class="container-fluid">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse"  data-toggle="collapse"  data-target=".navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#profile">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#education">Education</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#abilities">Abilities</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div style={{ background: 'white'}}>
          <div id="profile" className=" profile section container-fluid">
            <Profile />
          </div>
          <div id="projects" className="projects section container-fluid ">
            <MyProjects />
          </div>
          <div id="abilities" className="abilities section container-fluid ">
            <Abilities />
          </div>
          <div id="education" className="education section container-fluid">
            <Education />
          </div>
          <div id="contact" className="contact section container-fluid ">
            <Contact />
          </div>
        </div>
    </div>
  );
}

export default App;
