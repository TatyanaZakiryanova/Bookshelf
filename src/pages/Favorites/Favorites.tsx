import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ClearListModal from '../../components/ClearListModal/ClearListModal';
import FavBook from '../../components/FavBook/FavBook';
import NotFavorites from '../../components/NotFavorites/NotFavorites';
import { favItemsSelector, favTotalSelector } from '../../redux/favSlice/selectors';
import { FavItem } from '../../redux/favSlice/types';
import styles from './Favorites.module.scss';

const Favorites = () => {
  const items = useSelector(favItemsSelector);
  const total = useSelector(favTotalSelector);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModalClick = () => {
    setShowModal(true);
  };

  if (!items || items.length === 0) {
    return <NotFavorites />;
  }

  return (
    <>
      <div className={styles.title}>
        <div className={styles.icon}>Favorites</div>
        <p>Books in favorites list: {items.length}</p>
      </div>
      <div className={styles.items}>
        {items.map((item: FavItem) => (
          <FavBook key={item.id} {...item} />
        ))}
      </div>
      <div className={styles.total}>Added books worth: {total}</div>
      <div className={styles.bottom}>
        <button className={styles.back}>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Home
          </Link>
        </button>
        <button onClick={handleModalClick} className={styles.clear}>
          Clear list
        </button>
        {showModal && <ClearListModal onClose={() => setShowModal(false)} />}
      </div>
    </>
  );
};

export default Favorites;
