import React, { Component } from 'react'
import Maindiv from './Components/MainDiv/Maindiv';
import Section2 from './Components/MainDiv2/Section2/Section2';
import Section3 from './Components/MainDiv3/Section3';
import Section4 from './Components/MainDiv4/Section4';
import Section5 from './Components/MainDiv5/Section5';

export default class App extends Component {
    render() {
        return (
            <div>
                <Maindiv/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
            </div>
        )
    }
}
