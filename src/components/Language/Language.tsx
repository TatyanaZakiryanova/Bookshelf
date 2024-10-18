import { MdLanguage } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { setLanguageValue } from '../../redux/searchSlice/searchSlice';
import { langRestrictSelector } from '../../redux/searchSlice/selectors';
import { LangEnum, LangParams } from '../../redux/searchSlice/types';
import { useAppDispatch } from '../../redux/store';
import styles from './Language.module.scss';

const language: LangParams[] = [
  {
    name: 'All',
    value: LangEnum.ALL,
  },
  {
    name: 'English',
    value: LangEnum.EN,
  },
  {
    name: 'Deutsch',
    value: LangEnum.DE,
  },
  {
    name: 'Español',
    value: LangEnum.ES,
  },
  {
    name: 'Français',
    value: LangEnum.FR,
  },
  {
    name: 'Indonesia',
    value: LangEnum.ID,
  },
  {
    name: 'Italiano',
    value: LangEnum.IT,
  },
  {
    name: 'Polski',
    value: LangEnum.PL,
  },
  {
    name: 'Português',
    value: LangEnum.PT,
  },
  {
    name: 'Русский',
    value: LangEnum.RU,
  },
  {
    name: '한국어',
    value: LangEnum.KO,
  },
  {
    name: '日本語',
    value: LangEnum.JA,
  },
];

const Language = () => {
  const dispatch = useAppDispatch();
  const langRestrict = useSelector(langRestrictSelector);

  const onClickLanguage = (obj: LangParams) => {
    dispatch(setLanguageValue(obj));
  };
  return (
    <div className={styles.language}>
      <span className={styles.title}>
        <MdLanguage size={18} />
        {langRestrict.name}
      </span>
      <div className={styles.list}>
        <ul>
          {language.map((obj) => (
            <li
              key={obj.value}
              onClick={() => onClickLanguage(obj)}
              className={langRestrict.value === obj.value ? styles.active : ''}
            >
              {obj.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Language;
