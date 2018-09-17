import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './pages/partials/Header';
import Sidebar from './pages/partials/Sidebar';
import PostsPage from './pages/PostsPage';
import ProjectPage from './pages/ProjectPage';
import MePage from './pages/MePage';

export default class App extends Component {

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