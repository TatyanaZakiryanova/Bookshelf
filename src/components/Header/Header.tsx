import { FaBook } from 'react-icons/fa';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { favItemsSelector } from '../../redux/favSlice/selectors';

const Header = () => {
  const items = useSelector(favItemsSelector);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('favorites', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <>
      <div className={styles.header}>
        <Link to="/">
          <div className={styles.icon}>
            <FaBook className={styles.logo} size={60} />
          </div>
        </Link>
        <div className={styles.title}>
          <h1>BOOKSHELF</h1>
          <h4>e-books search service</h4>
        </div>
      </div>
    </>
  );
};

export default Header;
