import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

function login() {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
}

export default login;
