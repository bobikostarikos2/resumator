import MODAL_KEYS from '@consts/modalKeys'
import { useDispatch } from 'react-redux'
import ButtonMain from '@ui/Buttons/ButtonMain/ButtonMain'
import { add } from '@shared/store/modules/popups'

function CreateResumeButton(){
  const dispatch = useDispatch();

  return(
    <ButtonMain text='Создать' onClick={() => dispatch(add(MODAL_KEYS.RESUME_CREATE))}/>
  )
}

export default CreateResumeButton