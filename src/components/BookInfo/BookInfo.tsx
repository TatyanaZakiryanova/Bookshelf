import React from 'react';

import { Book } from '../../pages/Main/types';
import styles from './BookInfo.module.scss';

interface BookInfoProps {
  title: string;
  authors: string;
  publisher: string;
  publishedDate: string;
  description: string;
  thumbnail: string;
  item: Book;
  addedValue: string;
  addToFavorites: (item: Book) => void;
  showPreview: () => void;
}

const BookInfo: React.FC<BookInfoProps> = ({
  title,
  authors,
  publisher,
  publishedDate,
  description,
  thumbnail,
  item,
  addedValue,
  addToFavorites,
  showPreview,
}) => {
  return (
    <>
      <div className={styles.inform}>
        <img src={thumbnail} alt={title} />
        <div className={styles.info}>
          <h1>{title}</h1>
          <h3>{authors}</h3>
          <h4>
            {publisher} <span>{publishedDate}</span>
          </h4>
          <div className={styles.buttons}>
            <button onClick={showPreview} className={styles.page}>
              Preview
            </button>
            <a href={item.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
              <button className={styles.page}>Book page</button>
            </a>
          </div>
          <button
            onClick={() => addToFavorites(item)}
            className={addedValue.includes('In favorites') ? styles.added : styles.add}
          >
            {addedValue}
          </button>
        </div>
      </div>
      <h4>{description}</h4>
    </>
  );
};

export default BookInfo;
