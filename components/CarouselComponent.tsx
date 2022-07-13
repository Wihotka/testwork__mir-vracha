import { NextPage } from 'next'
import { ScriptProps } from 'next/script'
import Image from 'next/image';
import styles from '../styles/CarouselComponent.module.scss'
import IconComponent from './IconComponent';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface IProps {
  children?: ScriptProps;
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  isAdult: boolean;
}
interface IDisease {
  id: number;
  title: string;
  img: string;
  position: string;
}

const CarouselComponent: NextPage<IProps> = ({ isClicked, setIsClicked, isAdult }) => {
  const [diseases, setDiseases] = useState<IDisease[]>([]); // Стейт данных для иконок

  // Массив данных иконок
  const diseaseArr: IDisease[] = [
    {
      id: 0,
      title: 'Сколиоз',
      img: 'dis-spine',
      position: 'top'
    },
    {
      id: 1,
      title: `Ограниченная способность поднимать руки и переносить предметы`,
      img: 'dis-arms',
      position: 'topRight'
    },
    {
      id: 2,
      title: 'Нарушения жевания и глотания',
      img: 'dis-throat',
      position: 'right'
    },
    {
      id: 3,
      title: 'Дыхательная недостаточность/ респираторная дисфункция',
      img: 'dis-lungs',
      position: 'bottomRight'
    },
    {
      id: 4,
      title: 'Неспособность бегать, изменение походки',
      img: 'dis-legs',
      position: 'bottom'
    },
    {
      id: 5,
      title: 'Контрактура суставов',
      img: 'dis-bones',
      position: 'bottomLeft'
    },
    {
      id: 6,
      title: 'Вывих бедра',
      img: 'dis-bottom',
      position: 'left'
    },
    {
      id: 7,
      title: 'Утомляемость',
      img: 'dis-mood',
      position: 'topLeft'
    }
  ];

  // Ссылка на карусель
  const displayRef = useRef<HTMLDivElement>(null);
  // Передача данных в стейт при первом рендере
  useEffect(() => {
    setDiseases(diseaseArr);
  }, []);
  // Прокрутка до карусели
  useEffect(() => {
    if (isClicked) {
      displayRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      setIsClicked(false);
    }
  }, [isClicked]);

  return (
    <div className={styles.carousel}>
      <p className={styles.carousel__text}>Сообщает ли один из ваших пациентов о следующих симптомах? <span className={styles.carousel__textExtra}>(нажмите на любую иконку и узнайте больше)</span></p>
      <div className={styles.carousel__content}>
        <div className={styles.carousel__display} ref={displayRef}>
          <Image
            src={isAdult ? '/img/adult-full.jpg' : '/img/child.jpg'}
            layout="fill"
            objectFit="contain"
            alt="Фото"
          />
          <span className={styles.carousel__title}>{isAdult ? 'Взрослый' : 'Ребенок'}</span>
        </div>
        {diseases.map(disease => (
          <IconComponent
            key={disease.id}
            title={disease.title}
            img={disease.img}
            position={disease.position}
            isClicked={isClicked}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselComponent;
