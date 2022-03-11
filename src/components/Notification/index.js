import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <li className="notification">
      {children}
      <GrFormClose className="icon close" />
    </li>
  )
}

export default Notification
