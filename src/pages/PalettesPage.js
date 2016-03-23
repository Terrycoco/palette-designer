import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPalettes } from 'actions/palette';
import Palette from 'components/Palette';
import {Link} from 'react-router';

const styles = {
  page: {
    padding: '1em'
  }
}




class Palettes extends Component {
  constructor(props) {
    super(props);
    this.renderPalettes = this.renderPalettes.bind(this);
  }
  componentWillMount() {
    this.props.fetchPalettes();
  }

 renderPalettes() {
   return this.props.savedPalettes.map((item, idx) => {
     return <li><Palette key={idx} palette={item} /></li>
   });
 }

  render() {
    return (
      <div style={styles.page}>
        <h2>Select A Palette</h2>
        <ul>
        {this.renderPalettes()}
        </ul>
        <Link to="/"><button>Back to Designer</button></Link>
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log('savedPalettes:', state.db.savedPalettes);
  return {
    savedPalettes: state.db.savedPalettes
  };
}

export default connect(mapStateToProps, { fetchPalettes })(Palettes);
