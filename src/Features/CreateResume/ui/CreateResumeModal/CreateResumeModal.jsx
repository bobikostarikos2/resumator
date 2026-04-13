import ModalDefault from '@ui/Modals/ModalDefault/ModalDefault'

import styles from './CreateResumeModal.module.scss'

function CreateResumeModal({ zIndex, onClose }){
  return(
    <ModalDefault zIndex={zIndex} onClose={onClose}>
      <p>Hello World</p>
    </ModalDefault>
  )
}

export default CreateResumeModal