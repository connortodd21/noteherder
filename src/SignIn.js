import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider } from './base'

const SignIn = () => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }

  return (
    <div className="doc">
      <h3 className="noteHerder">Noteherder</h3>
      <button
        className="SignIn"
        id="githubSignIn"
        onClick={() => authenticate(githubProvider)}
      >
      Click to Sign In With Github

      </button>
      <button
        className="SignIn"
        id="googleSignIn"
        onClick={() => authenticate(googleProvider)}
      >
        {/*<img src="http://careinfo.in/wp-content/uploads/2015/05/unnamed1.jpg"/>*/}
        <span className="blue">Click </span>
        <span className="red">to </span>
        <span className="yellow">Sign </span>
        <span className="blue">In </span>
        <span className="green">With </span>
        <span className="red">Google </span>
      </button>
    </div>
  )
}

export default SignIn