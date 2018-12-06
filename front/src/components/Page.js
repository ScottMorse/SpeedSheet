import React, { Component } from 'react'

import Header from './Header'

export default class Page extends Component {

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return <div id="page-wrap">
            <Header/>
            <p>Main</p>
        </div>
    }
}