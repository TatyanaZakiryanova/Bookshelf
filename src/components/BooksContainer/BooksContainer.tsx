import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import useFavorites from '../../hooks/useFavorites';
import { Book } from '../../pages/Main/types';
import { statusSelector } from '../../redux/booksSlice/selectors';
import { Status } from '../../redux/booksSlice/types';
import { favItemsSelector } from '../../redux/favSlice/selectors';
import BookCard from '../BookCard/BookCard';
import BookModal from '../BookModal/BookModal';
import BooksNM from '../BooksNM/BooksNM';

interface BooksContainer {
  books: Book[];
}

const BooksContainer: React.FC<BooksContainer> = ({ books }) => {
  const [show, setShow] = useState<boolean>(false);
  const [bookItem, setBookItem] = useState<Book | null>(null);
  const { addToFavorites, removeFromFavorites } = useFavorites();
  const status = useSelector(statusSelector);
  const favorites = useSelector(favItemsSelector);

  const memoizedThumbnails = useMemo(() => {
    return books.map((item) => item.volumeInfo.imageLinks?.smallThumbnail);
  }, [books]);

  const handleBookClick = (book: Book) => {
    setShow(true);
    setBookItem(book);
  };

  return (
    <>
      {status === Status.NO_MORE_BOOKS ? (
        <BooksNM />
      ) : books && books.length > 0 ? (
        books.map((item: Book, index: number) => {
          const thumbnail = memoizedThumbnails[index];
          const amount = item.saleInfo?.listPrice?.amount || 'Free';
          const author = item.volumeInfo?.authors?.slice(0, 5).join(', ') || 'Unknown author';
          const added = !!favorites.find((favitem) => favitem.id === item.id);

          if (thumbnail) {
            return (
              <BookCard
                key={item.id}
                item={item}
                thumbnail={thumbnail}
                author={author}
                amount={amount}
                added={added}
                onBookClick={handleBookClick}
                onFavoriteClick={
                  added ? () => removeFromFavorites(item.id) : () => addToFavorites(item)
                }
              />
            );
          }
        })
      ) : null}
      {bookItem && show && <BookModal item={bookItem} onClose={() => setShow(false)} />}
    </>
  );
};

export default BooksContainer;
