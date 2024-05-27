import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <div className="Header">
            <img src="netflixlogo.svg" alt="logo"/>
            
            <ul>
                <li><a href="#" className="english"><i class="fas fa-globe"></i>English<i class="fas fa-caret-down"></i></a></li>
                <li><a href="#" className="signin">Sign In</a></li>
            </ul>
            
        </div>
        );
    }
}

export default Logo;
