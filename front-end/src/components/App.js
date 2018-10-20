import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import Header from './pages/partials/Header';
import Sidebar from './pages/partials/Sidebar';
import PostsPage from './pages/PostsPage';
import ProjectPage from './pages/ProjectPage';
import MePage from './pages/MePage';


class App extends Component {

  componentDidMount () {
    this.props.fetchPosts();
  }

  render() {
    const meta = this.props.meta;
    return (
      <DocumentMeta { ...meta }>
        <Header />
        <Sidebar />
        <Route exact path="/" component={PostsPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Route exact path="/project" component={ProjectPage} />
        <Route exact path="/me" component={MePage} />
      </DocumentMeta>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  loading: state.posts.loading,
  error: state.posts.error,
  meta: state.meta
});

const mapDispatchProps = dispatch => ({
  fetchPosts: () => { dispatch(fetchPosts()) },
});

export default connect(mapStateToProps, mapDispatchProps)(App);