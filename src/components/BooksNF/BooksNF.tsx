import styles from './BooksNF.module.scss';

const BooksNotFound = () => {
  return (
    <div className={styles.error}>
      <h2>Books not found</h2>
      <p>Please try again later</p>
    </div>
  );
};

export default BooksNotFound;
