import { Box } from 'reflexbox';
import getConfig from 'next/config';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useRouter } from 'next/router';

const { publicRuntimeConfig } = getConfig();

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className='container'>
        <RegisterStyled>
          <Box variant='container'>
            <Box as='h2' my={40}>
              Register here
            </Box>

            <form>
              <input
                type='text'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder='Username'
              />
              <br />
              <input
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder='Email'
              />
              <br />
              <input
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder='Password'
              />
              <br />
              <button type='button' onClick={() => handleRegister()}>
                Register
              </button>
            </form>
          </Box>
        </RegisterStyled>
      </div>
    </>
  );
};

const RegisterStyled = styled.div`
  input {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }
`;

export default Register;
