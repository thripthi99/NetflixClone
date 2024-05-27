import React from 'react'
import Leftside from './Leftside'
import Rightside from './Rightside'
import "./Section2.css"

const Section2 = () => {
    return (
        <section id="Section2">
            <article>
                <Leftside/>
                <Rightside/>
            </article>
        </section>
    )
}

export default Section2
