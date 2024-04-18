import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import Card from '../Card/Card';
import axios from 'axios';
import { FaBook } from 'react-icons/fa';
import { GrSearch } from 'react-icons/gr';
import styles from './Main.module.scss';
import { Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import { useAppSelector } from '../../redux/store';
import { Book } from './types';

const Main = () => {
  const [search, setSearch] = useState<string>('');

  const [bookData, setBookData] = useState<Book[]>([]);

  const { items } = useAppSelector((state) => state.favReducer);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('favorites', json);
    }
    isMounted.current = true;
  }, [items]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        'https://www.googleapis.com/books/v1/volumes?q=' +
          search +
          '&key=AIzaSyCeC6XVMuZOAY3TjODjgT7R5Joc4qHcjEE' +
          '&maxResults=40',
      );
      setBookData(response.data.items);
    } catch (error) {
      alert('Books not found');
    }
  };

  const searchKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const addedItems = useAppSelector((state) => state.favReducer.items.length);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.icon}>
          <FaBook className={styles.logo} size={60} />
        </div>
        <div className={styles.title}>
          <h1>BOOKSHELF</h1>
          <h4>book search service on google books</h4>
        </div>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Enter book name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={searchKey}
          />
          <button onClick={handleSearch}>
            <GrSearch className={styles.searchbutton} size={20} /> Search
          </button>
        </div>
        <Link to="favorites" className={styles.favorites}>
          <MdFavorite className={styles.icon} />
          {addedItems}
        </Link>
      </div>
      <div className={styles.container}>
        <Card book={bookData} />
      </div>
    </>
  );
};

export default Main;
