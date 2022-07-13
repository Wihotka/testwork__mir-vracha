import { NextPage } from 'next'
import { ScriptProps } from 'next/script'
import styles from '../styles/MainComponent.module.scss'

const MainComponent: NextPage<ScriptProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      <h3 className={styles.main__title}>Выберите, кто Ваш пациент:</h3>
      <div className={styles.main__blocks}>
        {children}
      </div>
    </div>
  );
}

export default MainComponent;
