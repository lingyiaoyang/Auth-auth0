import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from '../component/login';
import Logout from '../component/logout';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

export default function Home() {
  return (
    <div redirectUri='https://myapp.org/login' className='container'>
      nothing
    </div>
  );
}
