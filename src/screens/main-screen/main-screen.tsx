import React from 'react';
import useMainScreenViewController from './main-screen-view-controller';
import MainScreenView from './main-screen-view';


const MainScreen = () => {
  const data = useMainScreenViewController();
  return (
      <MainScreenView {...data}/>
  );
};

export default MainScreen;
