import { MODALS_REGISTRY } from '../../constants/componentsMap'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '@shared/store'
import { remove, removeLast } from '@shared/store/modules/popups'
import { useEffect } from 'react'

function PopupModalsControl(){
  const dispatch = useDispatch();
  const popups = useSelector(state => state.popups.popups)

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key !== 'Escape') return
      const { popups } = store.getState().popups
      if (popups.length === 0) return
      store.dispatch(removeLast())
    }
    window.addEventListener('keydown', handleEsc)

    return () => window.removeEventListener('keydown', handleEsc)
  }, [])
  
  return popups.map((key, index) => {
    const ModalComponent = MODALS_REGISTRY[key];

    return(
      <ModalComponent 
        zIndex={index}
        onClose={() => dispatch(remove(key))}
        key={key}
      />
    )
  })
}

export default PopupModalsControl