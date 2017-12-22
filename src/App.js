import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Root/>
      </Router>
    )
  }
}

const Root = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">My Travel Diary</h1>
    </header>
    <nav>
      <Link to={`/`}>All Posts</Link>
      <Link to={`/create`}>Create a post</Link>
    </nav>
    <div className="App-intro">
      <Route exact={true} path="/" component={ListPosts}/>
      <Route path="/post/:id" component={ReadPost}/>
      <Route path="/create" component={InsertPost}/>
    </div>
  </div>
)

const ListPosts = () => (
  <h1>List the diary</h1>
)

const ReadPost = (props) => {
  let id = props.match.params.id
  return (  
    <h1>Single post {id}</h1>
  )
}
  

const InsertPost = () => (
  <h1>Insert a new post</h1>
)

export default App
