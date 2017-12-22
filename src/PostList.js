import React from 'react'
import { bindActionCreators } from 'redux'
import * as postsActions from './actions/posts'
import { connect } from 'react-redux'
/*
import { bindActionCreators } from 'redux'
import * as postsActions from './actions/posts'
*/
class PostList extends React.Component {
    
  render() {
   return (
      <div className="Post-list">        
        <h2>Lista de Posts</h2>
        { this.props.posts.sort((a, b) => a.id < b.id).map(post => {
          return (
            <div className="Post-item" key={Math.random()}>
              <h2>{ post.title }</h2>
              <p>{ post.text }</p>
            </div>            
          )
        }) }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts:  state.posts
})
const mapDispatchToProps = dispatch => bindActionCreators(postsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostList) 