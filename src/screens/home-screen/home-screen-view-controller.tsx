import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewTaskToEmergencyList, getAllEmergencyTaskList } from "../../store/splices/emergency-list-entity";
import { updateLoggedOut } from "../../store/splices/auth-entity";
import asyncStorageService from "../../services/async-storage-service";

const useHomeScreenViewController = () => {
  const modalShowTime = useRef('')

  const [isModalVisible, updateModalVisibility] = useState(false)
  
  const emergencyList = useSelector(getAllEmergencyTaskList())
  const dispatch = useDispatch<Dispatch>()

  // used to show emergency pop up after 5 sec
  useEffect(() => {
    setTimeout(() => {
      modalShowTime.current = new Date().toISOString()
      updateModalVisibility(true)
    }, 5000);
  }, [isModalVisible, updateModalVisibility])


  // on confirm pressed on pop up -> store data in redux
  const onConfirm = () => {
    const now = new Date().toISOString()
    updateModalVisibility(false)
    dispatch(addNewTaskToEmergencyList(modalShowTime.current, now))
  }

  // logout from app
  const onLogoutPressed = () => {
    dispatch(updateLoggedOut())
    asyncStorageService.storeData('@authUser', null)
  }

  return {
    isModalVisible,
    updateModalVisibility,
    onConfirm,
    onLogoutPressed,
    emergencyList,
  };
};

export default useHomeScreenViewController;
