import { NextPage } from 'next'
import Image from 'next/image';
import { KeyboardEventHandler, useEffect, useState } from 'react';
import styles from '../styles/IconComponent.module.scss'

interface IIcon {
  title: string;
  img: string;
  position: string;
  isClicked: boolean;
}

const IconComponent: NextPage<IIcon> = ({ title, img, position, isClicked }) => {
  const [isActive, setIsActive] = useState<boolean>(isClicked); // Стейт изменения состояния иконок

  const handleClick = () => {
    setIsActive(!isActive);
  }
  // Хендлер для изменения состояния иконок с клавиатуры
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      setIsActive(!isActive);
    }
  }
  // Обнуление состояния иконок при клике в основном блоке
  useEffect(() => {
    setIsActive(false);
  }, [isClicked]);

  return (
    <div className={styles.icon + ' ' + styles[position]}>
      <div className={(isActive ? styles.icon__content + ' ' + styles.active : styles.icon__content)} tabIndex={0} onClick={handleClick} onKeyDown={handleKeyDown}>
        <div className={styles.icon__img + ' ' + styles[position]}>
          <Image
            src={`/img/svg/${img}.svg`}
            layout="fill"
            objectFit="contain"
            alt="Иконка"
          />
        </div>
        <div className={(isActive ? styles.icon__plus + ' ' + styles.hidden : styles.icon__plus) + ' ' + styles[position]}>
          <Image
            src={'/img/svg/plus.svg'}
            layout="fill"
            objectFit="contain"
            alt="Иконка"
          />
        </div>
      </div>
      <p className={(isActive ? styles.icon__text + ' ' + styles.active : styles.icon__text) + ' ' + styles[position]}>{title}</p>
    </div>
  );
}

export default IconComponent;
