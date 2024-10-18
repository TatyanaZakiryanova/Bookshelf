import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h2>Bookshelf</h2>
      <p className={styles.bottom}>e-books search service</p>
      <a href="https://developers.google.com/books" target="_blank" rel="noreferrer">
        API
      </a>
      <p>2024</p>
    </div>
  );
};

export default Footer;
