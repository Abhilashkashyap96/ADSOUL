import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './Components/Details/Detail'
import Homepage from './Components/Homepage/Homepage'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
 

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/details/:id' component={Detail}/>
        </Switch>
      </Router>

    )
  }
}

export default App

