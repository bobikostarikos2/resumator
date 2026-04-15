import styles from './CreateResumeForm.module.scss'
import InputText from '@ui/Fields/InputText/InputText'
import InputAvatar from '@ui/Fields/InputAvatar/InputAvatar'
import ButtonMain from '@ui/Buttons/ButtonMain/ButtonMain'

function CreateResumeForm(){
  return(
    <div className={styles.createResumeForm}>
      <section className={styles.createResumeForm__section}>
        <h2 className={styles.createResumeForm__ttl}>Создать резюме</h2>
      </section>
      <section className={styles.createResumeForm__section}>
        <h2 className={styles.createResumeForm__sectionTtl}>Персональная информация</h2>
        <div className={styles.createResumeForm__personalGrid}>
          <InputAvatar className={styles.createResumeForm__gridAvatar} />
          <InputText className={styles.createResumeForm__gridSurname} placeholder={'Фамилия'} />
          <InputText className={styles.createResumeForm__gridName} placeholder={'Имя'} />
          <InputText className={styles.createResumeForm__gridPatronymic} placeholder={'Отчество'} />
        </div>
      </section>
      <section className={styles.createResumeForm__section}>
        <ButtonMain text={'Опубликовать'} fullWidth={true} />
      </section>
    </div>
  )
}

export default CreateResumeForm