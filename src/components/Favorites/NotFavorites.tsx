import { GiBookCover } from 'react-icons/gi';
import styles from './NotFavorites.module.scss';
import { Link } from 'react-router-dom';
import { SlArrowLeft } from 'react-icons/sl';

const NotFavorites = () => {
  return (
    <div>
      <div className={styles.notfav}>
        <GiBookCover className={styles.icon} />
        <br />
        You haven't added books to your favorites yet.
        <br />
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <button className={styles.back}>
            <SlArrowLeft size={17} />
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFavorites;
