import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  if (alert !== '')
    return (
      <div className='alert-container'>
        <p className='alert'>{alert}</p>
      </div>
    );
  else return <div></div>;
};

export default Alert;
