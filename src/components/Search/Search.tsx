import { ChangeEvent, useRef, KeyboardEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setSearchValue } from '../../redux/searchSlice/searchSlice';
import { fetchBooks } from '../../redux/booksSlice/asyncActions';
import { FaDeleteLeft } from 'react-icons/fa6';
import { GrSearch } from 'react-icons/gr';
import styles from './Search.module.scss';

const Search = () => {
  const dispatch = useAppDispatch();

  const { value } = useAppSelector((state) => state.searchReducer);

  const inputRef = useRef<HTMLInputElement>(null);

  const setValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  const clearInput = () => {
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  };

  const getBooks = async () => {
    dispatch(fetchBooks(value));
  };

  const searchKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      getBooks();
      inputRef.current?.blur();
    }
  };

  return (
    <>
      <div>
        <div className={styles.search}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter book name..."
            value={value}
            onChange={setValue}
            onKeyUp={searchKey}
          />
          {value && (
            <button onClick={clearInput} className={styles.clear}>
              <FaDeleteLeft className={styles.clearicon} />
            </button>
          )}
          <button onClick={getBooks}>
            <GrSearch className={styles.searchbutton} size={20} /> Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;