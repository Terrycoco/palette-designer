import React, {Component} from 'react';
import {merge} from 'utils/shared';
import colors from 'styles/colors';

const styles = {
  me: {
    alignSelf: 'flex-start',
    flex: '0',
    width: '100%',
    order: '0'
  }
};


class Header extends Component {
  render() {
    return (
      <header style={merge(colors.header, styles.me)}>
        {this.props.children}
      </header>
    );
  }

}

export default Header;
