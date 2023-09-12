import { useEffect, useState } from "react";
import { ToastAndroid } from "react-native";
import asyncStorageService from "../../services/async-storage-service";
import { updateLoggedIn } from "../../store/splices/auth-entity";
import { useDispatch } from "react-redux";

const USER_DETAILS = {
    userName: 'user@avive.life',
    password: 'AED$1NHOM3$'
}

const useLoginScreenViewController = () => {

  const [userName, onUserNameTextChanged]  = useState('')
  const [password, onPasswordChangeText] = useState('')
  const [enableUpdateButton, updateLoginBtnEnableStatus] = useState(false)
  const dispatch = useDispatch<AppDispatch>();

  // used to show login button in disable or enable satte
  useEffect(() => {
    if(password.length > 4 && userName.length > 3) {
      updateLoginBtnEnableStatus(true)
    } else {
      updateLoginBtnEnableStatus(false)
    }
  }, [userName, password])


  // on login button pressed
  const onLogin = async () => {
    console.log('password -> ', password, USER_DETAILS.password , USER_DETAILS.password === password)

    // if matches the input
    if(userName === USER_DETAILS.userName && password === USER_DETAILS.password) {
        ToastAndroid.show('Successful Login', ToastAndroid.SHORT)
        asyncStorageService.storeData('@authUser', { login: true})
        dispatch(updateLoggedIn());
    } else {
        ToastAndroid.show('Incorrect Password or username', ToastAndroid.SHORT)
    }
  }


  return {
    userName,
    password,
    enableUpdateButton,
    onUserNameTextChanged,
    onPasswordChangeText,
    onLogin,
  };
};

export default useLoginScreenViewController;
