import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import * as actions from '../../../actions';
import profileImg from '../../../static/images/profile_2.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';

class Header extends Component {
  handleSidebarOnWindowResize () {
    var self = this;
    window.addEventListener('resize', exec);
    function exec () {
      var winWidth = window.innerWidth;
      if (winWidth > 1024) {
        self.props.hideSidebar();
      }
    };
  }

  componentDidMount () {
    this.handleSidebarOnWindowResize();
  }
  
  render () {
    return (
      <header className="header">
        <div className="header__inner full-width">
          <div className="profile">
            <Link to="/">
              <div className="profile__inner">
                <img src={profileImg}></img>
              </div>
              <span>
                leejinseok.io
              </span>
            </Link>
          </div>
  
          <div className="header__menus">
            <NavLink exact to="/posts" activeClassName="active">포스트</NavLink>
            <NavLink exact to="/project" activeClassName="active">프로젝트</NavLink>
            <NavLink exact to="/me" activeClassName="active">나</NavLink>
          </div>

          <FaBars className={classnames('hamburger', {active: !this.props.sidebar})} onClick={this.props.toggleSidebar}/>
          <FaTimes className={classnames('hamburger', {active: this.props.sidebar})} onClick={this.props.toggleSidebar}/>
        </div>
      </header>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    sidebar: state.ui.sidebar
  };
};

const mapDispatchProps = (dispatch) => {
  return {
      toggleSidebar: () => { dispatch(actions.toggleSidebar())},
      hideSidebar: () => { dispatch(actions.hideSidebar())},
  };
};


export default connect(mapStateToProps, mapDispatchProps)(Header);