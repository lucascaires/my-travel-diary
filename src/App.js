import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import PostList from './PostList'
import PostInsert from './PostInsert'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <Link to={`/`}><h1 className="App-title">My Travel Diary</h1></Link>
            </header>
            <div className="App-container">
              <Route exact={true} path="/" component={PostList}/>
              <Route path="/post/:id" component={ReadPost}/>
              <Route path="/create" component={PostInsert}/>
              <Link className="Post-insert-button" to={`/create`}>New</Link>
            </div>            
          </div>
        </Router>
      </Provider>
    )
  }
}

class ReadPost extends React.Component {

  render() {
   return (  
      <h1>Single post {this.props.id}</h1>
    )
  }
} 



export default App
