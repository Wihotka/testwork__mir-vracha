import { NextPage } from 'next'
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from '../styles/BlockComponent.module.scss'

interface IProps {
  isAdultList: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  setIsAdult: Dispatch<SetStateAction<boolean>>;
}
interface IList {
  id: number;
  data: string
}

const BlockComponent: NextPage<IProps> = ({ isAdultList, setIsClicked, setIsAdult }) => {
  const [list, setList] = useState<IList[]>([]); // Стейт для формирования списка

  // Исходные списки взрослого / ребенка
  const adultArr: IList[] = [
    {
      id: 0,
      data: 'Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.'
    },
    {
      id: 1,
      data: 'По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.'
    },
    {
      id: 2,
      data: 'По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.'
    }
  ];
  const childArr: IList[] = [
    {
      id: 0,
      data: 'Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность в отношении наличия СМА.'
    },
    {
      id: 1,
      data: 'Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются дегенерации при прогрессировании заболевания'
    }
  ];

  // Задание определенного списка компоненту при 1ом рендере
  useEffect(() => {
    if (isAdultList) {
      setList(adultArr);
    } else {
      setList(childArr);
    }
  }, []);

  // Хэндлер для задания прокрутки и передачи соответствующих данных карусели
  const handleClick = () => {
    setIsClicked(true);
    if (isAdultList) {
      setIsAdult(true);
    } else {
      setIsAdult(false);
    }
  }

  return (
    <div className={styles.block}>
      <h4 className={isAdultList ? styles.block__title : styles.block__title + ' ' + styles.block__title_child}>{isAdultList ? 'Взрослый': 'Ребенок'}</h4>
      <button className={isAdultList ? styles.block__imgContainer : styles.block__imgContainer + ' ' + styles.block__imgContainer_child} onClick={handleClick}>
        <Image
          src={isAdultList ? '/img/adult.jpg' : '/img/child.jpg'}
          layout="fill"
          objectFit="contain"
          alt="Фото"
          priority
        />
      </button>
      <ul className={styles.block__list}>
        {list.map(item => (
          <li key={item.id} className={styles.block__item}>{item.data}</li>
        ))}
      </ul>
    </div>
  );
}

export default BlockComponent;
