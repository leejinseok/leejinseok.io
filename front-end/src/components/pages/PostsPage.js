import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';
import '../../static/css/posts.css';

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
  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {
    const { error, loading, posts } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="full-width">
        <Posts posts={posts} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  loading: state.posts.loading,
  error: state.posts.error
});

const mapDispatchProps = dispatch => ({
  fetchPosts: () => { dispatch(fetchPosts()) },
})

export default connect(mapStateToProps, mapDispatchProps)(PostsPage);