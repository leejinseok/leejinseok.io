import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';
import '../../static/css/posts.css';

const Posts = ({posts}) => {
  return posts.map((post, index) => {
    return (
      <article key={index}>
        <h2>{post.title}</h2>
        <p>
          {post.body}
        </p>
      </article>
    )
  })
}

class PostsPage extends Component {
  state = {
    posts: []
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({
          posts: response.data
        })
      })
  }

  render () {
    return (
      <div className="full-width">
          <Posts posts={this.state.posts} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      ui: state.ui
  };
};

const mapDispatchProps = (dispatch) => {
  return {
  };
};


export default connect(mapStateToProps, mapDispatchProps)(PostsPage);