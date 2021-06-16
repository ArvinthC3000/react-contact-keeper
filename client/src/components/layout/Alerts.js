import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  if (alertContext.alerts.length > 0)
    return (
      alertContext.alerts.length > 0 &&
      alertContext.alerts.map(alert => (
        <div key={alert.id} className={`alert alert-${alert.type}`}>
          <i className='fas fa-info-circle' /> {alert.message}
        </div>
      ))
    );
  else return <div></div>;
};

export default Alerts;
