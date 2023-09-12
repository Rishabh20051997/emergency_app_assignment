import useHomeScreenViewController from './home-screen-view-controller';
import HomeScreenView from './home-screen-view';

const HomeScreen = () => {
  const data = useHomeScreenViewController()

  return <HomeScreenView {...data as any} /> 
  
};

export default HomeScreen;
