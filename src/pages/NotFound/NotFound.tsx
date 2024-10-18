import { SlArrowLeft } from 'react-icons/sl';
import { VscError } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.error}>
      <VscError size={40} />
      Data not found
      <Link to="">
        <button className={styles.back}>
          <SlArrowLeft size={16} /> Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
