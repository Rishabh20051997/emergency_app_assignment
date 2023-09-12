import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import asyncStorageService from '../../services/async-storage-service';
import { getUserLoggedInStatus, updateLoggedIn, updateLoggedOut } from '../../store/splices/auth-entity';


const useMainScreenViewController = () => {

  const dispatch = useDispatch<AppDispatch>();

  const isLoggedIn = useSelector(getUserLoggedInStatus)


  // extract data from async storage to determine if user is logined
  useEffect(() => {
    asyncStorageService
    .getData('@authUser')
      .then(async value => {

        if (value != null) {
          dispatch(updateLoggedIn());
        } else {
          dispatch(updateLoggedOut());
        }
      })
      .catch(() => {
        dispatch(updateLoggedOut());
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {isLoggedIn:  isLoggedIn || false };
};

export default useMainScreenViewController;

