// External Imports
// JavaScript
import React, { useContext } from 'react'

// Internal Imports
import AlertContext from '../../context/alert/AlertContext'

const Alerts = () => {
  const alertContext = useContext(AlertContext)

  return (
    alertContext.alerts.length > 0 && alertContext.alerts.map(current =>
      <div key={current.id} className={`alert alert-${current.type}`}>
        <i className='fas fa-info-circle' /> {current.message}
      </div>
    )
  )
}

export default Alerts
