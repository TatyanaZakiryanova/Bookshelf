import { BiLoaderAlt } from 'react-icons/bi';

import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.loader}>
      <BiLoaderAlt className={styles.spinner} />
      <p>Loading...</p>
    </div>
  );
};

export default Spinner;
