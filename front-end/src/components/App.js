import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './pages/partials/Header';
import Sidebar from './pages/partials/Sidebar';
import PostsPage from './pages/PostsPage';
import ProjectPage from './pages/ProjectPage';
import MePage from './pages/MePage';

import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class App extends Component {

  componentDidMount () {
    this.props.fetchPosts();
  }
  render() {
    let isAdmin = window.location.pathname.split('/')[1] === 'admin';
    return (
      <div>
        <Header />
        <Sidebar />
        <Route exact path="/" component={PostsPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Route exact path="/project" component={ProjectPage} />
        <Route exact path="/me" component={MePage} />
      </div>
    );
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


export default connect(mapStateToProps, mapDispatchProps)(App);