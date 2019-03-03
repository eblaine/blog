import React, { Component } from 'react';
import logo from './logo.svg';
import me from './me.jpeg';
import './App.css';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import Post from "./components/Post"
import Posts from "./components/Posts"


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          {/*<header className="App-header">*/}
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*</header>*/}
          <header className={"App-header"}>
            <img src={me} alt={"photo of me"}/>
            <h3>Ellen Blaine</h3>
            <p>Front-end dev and conversational AI designer</p>
          </header>

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
