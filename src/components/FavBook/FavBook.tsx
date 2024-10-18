import React from 'react';

import { addItem, minusNumber, removeItem } from '../../redux/favSlice/favSlice';
import { FavItem } from '../../redux/favSlice/types';
import { useAppDispatch } from '../../redux/store';
import styles from './FavBook.module.scss';

interface FavBookProps {
  id: string;
  title: string;
  authors: string[];
  thumbnail: string;
  publisher: string;
  publishedDate: string;
  previewLink: string;
  amount: string;
  count: number;
}

const FavBook: React.FC<FavBookProps> = ({
  id,
  thumbnail,
  title,
  authors,
  amount,
  publisher,
  publishedDate,
  count,
}) => {
  const dispatch = useAppDispatch();

  const plusItem = () => {
    dispatch(addItem({ id } as FavItem));
  };

  const minusItem = () => {
    dispatch(minusNumber({ id } as FavItem));
  };

  const deleteItem = () => {
    dispatch(removeItem({ id } as FavItem));
  };

  return (
    <div className={styles.item}>
      <div>
        <button onClick={deleteItem}>X</button>
      </div>
      <img src={thumbnail} />
      <p className={styles.title}>{title}</p>
      <div className={styles.inform}>
        <p>Authors: {authors}</p>
        <p className={styles.amount}>Price: {amount}</p>
        <p>Publisher: {publisher}</p>
        <p>{publishedDate}</p>
        <p className={styles.previewLink}></p>
        <p>Number: {count}</p>
        <div>
          <button onClick={plusItem}>+</button>
          <button onClick={minusItem} disabled={count === 1}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};
export default FavBook;
