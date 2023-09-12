import React from 'react';
import LoginScreen from '../login-screen';
import HomeScreen from '../home-screen';

const MainScreenView = ({
    isLoggedIn  = false
}) => {
  return (
      isLoggedIn ? <HomeScreen/> : <LoginScreen/> 
  );
};

export default MainScreenView;
