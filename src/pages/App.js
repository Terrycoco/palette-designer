import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWindowSize, toggleBorders } from 'actions/index';
import { startAuth, endAuth } from 'actions/auth';
import colors from 'styles/colors';
import {merge} from 'utils/shared';

const styles = {
  me: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
};


//put anything you want displayed on ALL pages here
class App extends Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
    this.handleBorders = this.handleBorders.bind(this);
  }
  handleResize(e) {
    this.props.setWindowSize(window.innerWidth);
  }
  componentWillMount() {
    this.props.startAuth();
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    this.props.endAuth();
  }
  handleBorders(){
    this.props.toggleBorders((this.props.borders == 'none') ? true : false);
  }

  render() {
    return  (
      <div style={merge(styles.me)} >
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    winSize: state.app.windowSize,
    borders: state.app.borders
  };
}

export default connect(mapStateToProps, { setWindowSize, toggleBorders, startAuth, endAuth })(App);
