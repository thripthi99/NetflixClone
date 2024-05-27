import React, { Component } from 'react';
import "./Maindiv.css" 
import Header from './../Header/Header';

class Maindiv extends Component {
    render() {
        return (
            <div id="mainDiv">
                <Header/>
                <section id="section1">
                    {/* <img src="background.jpg" alt=""  width="100%" height="735px"/> */}
                <h1>Unlimited movies,Tv</h1>
                <h1>shows and more.</h1>
                <h2>watch anywhere. Cancel anytime.</h2><br />
                <h4>Ready to watch? Enter your email to create 
                    or restart your membership.</h4><br />
                    <div id="search1">
                    <span><input type="email" placeholder="Email address" /></span>
                    <span><button>Get started </button></span>
                    </div>
                    

                </section>
            </div>
        );
    }
}

export default Maindiv;
