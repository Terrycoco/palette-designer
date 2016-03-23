import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { authActions } from 'actions/auth';
import { Link } from 'react-router';

export class SignIn extends Component {
  static propTypes = {
    signInWithGithub: PropTypes.func.isRequired
    // signInWithGoogle: PropTypes.func.isRequired,
    // signInWithTwitter: PropTypes.func.isRequired,
    // signInWithEmail: PropTypes.func.isRequired
  };

  render() {
    const {
      signInWithGithub,
      // signInWithGoogle,
      // signInWithTwitter,
      // signInWithEmail
    } = this.props;

    return(
      <div>
        <div>
          <h1>Sign in</h1>
          <button onClick={signInWithGithub} type="button">GitHub</button>

        </div>
      </div>

    );

  }
}


export default connect(null, authActions)(SignIn);
