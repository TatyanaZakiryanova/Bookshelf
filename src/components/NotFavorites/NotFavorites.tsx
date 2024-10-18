import { GiBookCover } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import styles from './NotFavorites.module.scss';

const NotFavorites = () => {
  return (
    <div className={styles.notfav}>
      <GiBookCover className={styles.icon} />
      <p>You haven&apos;t added books to your favorites yet.</p>
      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <button className={styles.back}>Home</button>
      </Link>
    </div>
  );
};

export default NotFavorites;
