import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
