import React, { Component } from 'react'
import Cards from '../Cards/Cards';

import './style.css';

class Main extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
           <>
                <section id='mainBody'>
                    <div id='mainTop'>
                    <h1>Apps</h1>
                    </div>
                    <div id='appcards'>
                        <Cards data = {this.props.data}/>
                    </div>
                </section>
           </>
        )
    }
}

export default Main
