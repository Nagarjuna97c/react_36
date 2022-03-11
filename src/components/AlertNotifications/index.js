import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="main-container">
    <h1 className="heading">Alert Notifications</h1>
    <ul className="notifications-list">
      <Notification>
        <AiFillCheckCircle className="icon green-item" />
        <div className="text-container">
          <h1 className="item-heading green-item">Success</h1>
          <p className="para">You can access all the files in the folder</p>
        </div>
      </Notification>
      <Notification>
        <RiErrorWarningFill className="icon red-item" />
        <div className="text-container">
          <h1 className="item-heading red-item">Error</h1>
          <p className="para">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </Notification>
      <Notification>
        <MdWarning className="icon yellow-item" />
        <div className="text-container">
          <h1 className="item-heading yellow-item">Warning</h1>
          <p className="para">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </Notification>
      <Notification>
        <MdInfo className="icon blue-item" />
        <div className="text-container">
          <h1 className="item-heading blue-item">Info</h1>
          <p className="para">Anyone on the internet can view these files</p>
        </div>
      </Notification>
    </ul>
  </div>
)

export default AlertNotifications
