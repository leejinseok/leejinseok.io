import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';
import { changeMeta } from '../../actions/metaActions';
import '../../static/css/posts.css';

const Posts = ({posts}) => {
  return posts.map((post, index) => {
    return (
      <article key={index}>
        <h2>{post.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: post.body }}>
        </p>
      </article>
    )
  })
}

class PostsPage extends Component {
  componentDidMount () {
    const meta = {
      title: 'leejinseok.io',
      description: 'leejinseok.io',
      canonical: 'http://www.leejinseok.io',
      meta: {
          charset: 'utf-8',
          name: {
              keywords: 'react,meta,document,html,tags'
          }
      }
    }

    this.props.changeMeta(meta);
  }

  render () {
    const { error, loading, posts } = this.props;
    if (error) {
      return <div className="full-width">Error! {error.message}</div>;
    }

    if (loading) {
      return <div className="full-width">Loading...</div>;
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
  changeMeta: (meta) => { dispatch(changeMeta(meta)) }
});

export default connect(mapStateToProps, mapDispatchProps)(PostsPage);