import ModalDefault from '@ui/Modals/ModalDefault/ModalDefault'
import CreateResumeForm from '../CreateResumeForm/CreateResumeForm'

import styles from './CreateResumeModal.module.scss'

function CreateResumeModal({ zIndex, onClose }){
  return(
    <ModalDefault zIndex={zIndex} onClose={onClose}>
      <CreateResumeForm />
    </ModalDefault>
  )
}

export default CreateResumeModal