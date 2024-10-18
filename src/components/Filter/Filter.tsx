import { MdKeyboardArrowDown } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { setFilterParameter } from '../../redux/searchSlice/searchSlice';
import { filterSelector } from '../../redux/searchSlice/selectors';
import { FilterEnum, FilterParams } from '../../redux/searchSlice/types';
import { useAppDispatch } from '../../redux/store';
import styles from './Filter.module.scss';

const filterBy: FilterParams[] = [
  {
    name: 'All books',
    value: FilterEnum.EBOOKS,
  },
  {
    name: 'Paid books',
    value: FilterEnum.PAIDBOOKS,
  },
  {
    name: 'Free books',
    value: FilterEnum.FREEBOOKS,
  },
  {
    name: 'Partial text',
    value: FilterEnum.PARTIALTEXT,
  },
  {
    name: 'Full text',
    value: FilterEnum.FULLTEXT,
  },
];

const Filter = () => {
  const dispatch = useAppDispatch();
  const filter = useSelector(filterSelector);

  const onClickFilter = (obj: FilterParams) => {
    dispatch(setFilterParameter(obj));
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.order}>
        {filter.name} <MdKeyboardArrowDown size={15} />
      </div>
      <div className={styles.list}>
        <ul>
          {filterBy.map((obj) => (
            <li
              key={obj.value}
              onClick={() => onClickFilter(obj)}
              className={filter.value === obj.value ? styles.active : ''}
            >
              {obj.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
