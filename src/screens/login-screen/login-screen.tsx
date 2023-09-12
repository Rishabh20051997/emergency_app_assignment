

import React from 'react';

import useLoginScreenViewController from './login-screen-view-controller';
import LoginScreenView from './login-screen-view';

const LoginScreen = () => {

  const data =  useLoginScreenViewController()

  return <LoginScreenView {...data as any}/>
};

export default LoginScreen;
