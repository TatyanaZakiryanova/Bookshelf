import { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { fetchBooks } from '../../redux/booksSlice/asyncActions';
import { setOrderParameter } from '../../redux/searchSlice/searchSlice';
import {
  filterValueSelector,
  langRestrictValueSelector,
  orderByNameSelector,
  orderByParameterSelector,
  searchSelector,
  startIndexSelector,
} from '../../redux/searchSlice/selectors';
import { OrderEnum, OrderParams } from '../../redux/searchSlice/types';
import { useAppDispatch } from '../../redux/store';
import styles from './Order.module.scss';

const order: OrderParams[] = [
  {
    name: 'Relevance',
    parameter: OrderEnum.RELEVANCE,
  },
  {
    name: 'Newest',
    parameter: OrderEnum.NEWEST,
  },
];

const Order = () => {
  const dispatch = useAppDispatch();
  const [initialQueryDone, setInitialQueryDone] = useState(false);

  const search = useSelector(searchSelector);
  const startIndex = useSelector(startIndexSelector);
  const filter = useSelector(filterValueSelector);
  const langRestrict = useSelector(langRestrictValueSelector);
  const orderBy = useSelector(orderByParameterSelector);
  const orderName = useSelector(orderByNameSelector);

  useEffect(() => {
    const fetchData = async () => {
      if (initialQueryDone) {
        try {
          await dispatch(fetchBooks({ search, orderBy, filter, startIndex, langRestrict }));
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      }
      setInitialQueryDone(true);
    };

    const fetchAsync = async () => {
      await fetchData();
    };

    fetchAsync();
  }, [dispatch, orderBy, filter, startIndex, langRestrict]);

  const onClickOrder = (obj: OrderParams) => {
    dispatch(setOrderParameter(obj));
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.order}>
        {orderName} <MdKeyboardArrowDown size={15} />
      </div>
      <div className={styles.list}>
        <ul>
          {order.map((obj) => (
            <li
              key={obj.parameter}
              onClick={() => onClickOrder(obj)}
              className={orderBy === obj.parameter ? styles.active : ''}
            >
              {obj.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Order;
