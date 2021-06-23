import React, { useReducer } from 'react';
import { SET_ALERT } from '../types';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';

const AlertState = props => {
  const initialState = {
    alert: '',
  };
  const [state, dispatch] = useReducer(alertReducer, initialState);
  //setAlert function
  const setAlert = msg => {
    dispatch({
      type: SET_ALERT,
      payload: msg,
    });

    setTimeout(() => {
      dispatch({
        type: SET_ALERT,
        payload: '',
      });
    }, 5000);
  };
  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
