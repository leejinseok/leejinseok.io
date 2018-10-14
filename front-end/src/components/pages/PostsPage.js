import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';
import '../../static/css/posts.css';
const instance = axios.create({
  baseURL: 'http://localhost:8000/app',
  timeout: 1000,
});

const Posts = ({posts}) => {
  return posts.map((post, index) => {
    return (
      <article key={index}>
        <h2>{post.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: post.content }}>
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
    instance.get('/api/posts')
      .then(response => {
        this.setState({
          posts: response.data
        })
      }).catch(err => {
        console.error(err);
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