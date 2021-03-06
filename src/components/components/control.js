'use strict';

import PropTypes from 'prop-types';

import React from 'react';

export default class Control extends React.PureComponent {

  render() {
    return (
      <div
        style={{
          width: `${this.context.style.controlWidth}px`,
        }}
      >
        {this.props.children}
      </div>
    )
  }

}

Control.contextTypes = {
  style: PropTypes.object
}
