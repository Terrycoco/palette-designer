import React, { Component } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '5em',
    marginBottom: '2px'
  },
  colors: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '1px'
  },
  title: {
    marginBottom: '1px'
  },
  creator: {
    lineHeight: '0'
  }

};




class Palette extends Component {
  constructor(props) {
    super(props);
    this.renderColors = this.renderColors.bind(this);
  }
  renderColors() {
    //colors is an array
    return this.props.palette.colors.map((color, idx) => {
      return <li key={idx+color}><div style={{display: 'inline-block', width: '2em', height: '2em', background: color}}></div></li>
    });
  }
  render() {

    return (
      <div style={styles.container}>
        <h4 style={styles.title}>{this.props.palette.title}</h4>
        <ul style={styles.colors}>
          {this.renderColors()}
        </ul>
        <div style={styles.creator}><small>{this.props.palette.creator}</small></div>
      </div>
    )
  }
}

export default Palette;
