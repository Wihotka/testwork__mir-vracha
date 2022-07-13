import { NextPage } from 'next'
import styles from '../styles/HeaderComponent.module.scss'

const HeaderComponent: NextPage = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.visuallyHidden}>Мир Врача</h1>
      <h2 className={styles.header__heading}>А вдруг СМА?</h2>
    </header>
  );
}

export default HeaderComponent;
