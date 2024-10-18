import { MdFavorite } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import BooksContainer from '../../components/BooksContainer/BooksContainer';
import BooksNF from '../../components/BooksNF/BooksNF';
import Filter from '../../components/Filter/Filter';
import Language from '../../components/Language/Language';
import Order from '../../components/Order/Order';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';
import { itemsSelector, statusSelector } from '../../redux/booksSlice/selectors';
import { Status } from '../../redux/booksSlice/types';
import { favItemsSelector } from '../../redux/favSlice/selectors';
import styles from './Main.module.scss';
import Skeleton from './Skeleton';

const Main = (): JSX.Element => {
  const items = useSelector(itemsSelector);
  const status = useSelector(statusSelector);
  const addedItems = useSelector(favItemsSelector);
  const itemsLength = addedItems ? addedItems.length : 0;

  const skeleton = Array.from({ length: 10 }, (_, index) => <Skeleton key={index} />);

  return (
    <>
      <Search />
      <Link to="favorites" className={styles.favorites}>
        <MdFavorite className={styles.icon} />
        {itemsLength}
      </Link>
      {status === Status.IDLE ? null : status === Status.ERROR ? (
        <BooksNF />
      ) : (
        <>
          <div className={styles.top}>
            <Language />
            <Order />
            <Filter />
          </div>
          <div className={styles.container}>
            {status === Status.LOADING ? skeleton : <BooksContainer books={items} />}
          </div>
          <div>
            <Pagination />
          </div>
        </>
      )}
    </>
  );
};

export default Main;
