import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import * as globalActions from '../../../actions/globalActions';

class Sidebar extends Component {

  render () {
    return (
      <div className={classnames('sidebar', {active: this.props.sidebar})}>
        <div className="sidebar__inner">
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      sidebar: state.ui.sidebar,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
      toggleSidebar: () => { dispatch(globalActions.toggleSidebar())},
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Sidebar);