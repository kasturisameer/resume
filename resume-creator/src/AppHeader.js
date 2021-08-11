import React from 'react';
import './App.css';
import BgImage from './assets/images/kohli.jpg';
export function AppHeader() {
    return (
        <>
            {/* <img src={BgImage} class="bg-image" /> */}
            <div className="jumbotron">
                <div className="container">
                    <h1><span>K</span>asturi Sameer</h1>
                    <div>Interactive Resume</div>
                    <a href="#profile" className="scroll-down">
                        <i className="fas fa-angle-down icon-50" style={{ marginLeft: '-1.5%' }} ></i>
                    </a>
                </div>
                <div className="overlay"></div>
            </div>
        </>
    )
}