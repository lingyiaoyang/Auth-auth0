import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Auth0Provider
        domain={domain}
        cliendtId={clientId}
        redirectUri={window.location.origin}
      >
        <Login />
        <Logout />
        <Component {...pageProps} />;
      </Auth0Provider>
    </div>
  );
}

export default MyApp;
