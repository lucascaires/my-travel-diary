import React from 'react'
import { bindActionCreators } from 'redux'
import * as postsActions from './actions/posts'
import { connect } from 'react-redux'

class PostInsert extends React.Component {

  savePost = (e) => {
  	e.preventDefault();
  	let post = {
  		'title' : this.refs.title.value,
  		'text' : this.refs.text.value
  	}
  	this.props.insertPost(post)
  	this.props.history.push('/')
  }

  render() {
   return (
      <div>
        <h1>Insert a new post</h1>
        <form className="Form">
          <input className="Form-field" type="text" ref="title" placeholder="Title here"/>
          <textarea className="Form-field" ref="text" placeholder="Your text here"></textarea>
          <button type="submit" onClick={this.savePost}>Salvar</button>
        </form>
      </div>
    )
  }
} 

const mapStateToProps = state => ({
	posts:  state.posts
})
const mapDispatchToProps = dispatch => bindActionCreators(postsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostInsert) 