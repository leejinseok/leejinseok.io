import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMeta } from '../../actions/metaActions';

class MePage extends Component {
  
  componentDidMount () {
    const meta = {
      title: 'leejinseok.io - 프로필',
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
  render() {
    return (
      <div className="full-width">
        <h2>나</h2>
      </div>
    )
  }
}

const mapDispatchProps = dispatch => ({
  changeMeta: (meta) => { dispatch(changeMeta(meta)) },
});

export default connect(null, mapDispatchProps)(MePage);