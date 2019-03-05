import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import Post from "./components/Post"
import Posts from "./components/Posts"
import Header from "./components/Header"
import Border from "./components/Border"

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Border/>
          <Header/>

          <div className={'App-content'}>
            <Switch>
              <Route path={'/posts/:md'} component={Post}/>
              <Route exact path="/posts" component={Posts}/>
              <Route render={() => <Redirect to="/posts"/>}/>
            </Switch>
          </div>

        </div>
      </HashRouter>
    );
  }
}

export default App;
