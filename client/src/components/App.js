import React,{Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header'
import * as actions from '../actions';
import {connect} from 'react-redux';

//dummy components

class App extends Component {
  componentDidMount(){
    console.log('hello',this.props)
    this.props.fetchUser();
  }
  render(){
    return (
      <div className = 'container'>
        <BrowserRouter>
          {/* //expects to have atmost one child */}
          <div>
            <Header></Header>
            {/* <Route path = "/" component = {Landing} /> */}
            {/* <Route path = "/Header" component = {Header} /> */}
          
          </div>
        </BrowserRouter>
      </div>
    )
  }
};

//actions are assigned to the app component as props
export default connect(null, actions)(App);
