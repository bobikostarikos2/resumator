import { useDispatch, useSelector } from 'react-redux'
import { showMessageSaga, dismissMessageSaga } from '@shared/store/modules/overlay'
import OverlayItem from '../OverlayItem/OverlayItem'

import styles from './OverlayList.module.scss';

function OverlayList(){
  const dispatch = useDispatch()
  const messages = useSelector(state => state.overlay.messages)
  
  const handleClose = (id) => { dispatch(dismissMessageSaga(id)) }

  return(
    <ul className={styles.overlayList}>
      {messages.map(message => (
        <OverlayItem 
          key={message.id} 
          text={message.text} 
          type={message.type} 
          onClose={() => handleClose(message.id)} 
        />
      ))}
    </ul>
  )
}

export default OverlayList