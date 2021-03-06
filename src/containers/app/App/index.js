import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './styles.scss';

import { checkAuth } from '../../../redux/modules/app/app';

import Notifications from '../Notifications';

class Main extends Component {
  componentWillMount() {
    this.props.checkAuth();
  }

  render() {
    const { children } = this.props;

    return (
      <div className={s.app}>
        {children}
        <Notifications/>
      </div>
    );
  }
}

export default connect(null, { checkAuth })(Main);
