import React, { Component } from 'react';

import logo from './static/images/logo.svg';
import './static/css/App.css';


//要用单文件组件就需要引入


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


//  es5 引入模块的方式
// var Header=require('./components/Header.js')

import Home from './components/Home';

import News from './components/News';


class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>react</h2>

          <Router>
              <div>
                <ul>
                  <li><Link to="/home">首页</Link></li>                  
                  <li><Link to="/news">Topics</Link></li>
                </ul>
                <hr/>

                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/news" component={News}/>
              </div>
            </Router>



      </div>
    );
  }
}

export default App;
