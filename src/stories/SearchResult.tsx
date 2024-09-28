import Link from 'next/link';

import styles from './styles/searchresult.module.css';
import { Months } from '@/app/types';

interface SearchResultProps {
  title: string;
  date: string;
  url: string;
};

const SearchResult = ({ title, date, url }: SearchResultProps) => {
  const processTitle = () => {
    if (title.length > 80) {
      return `${title.substring(0, 79)} ...`;;
    }
    return title;
  }

  const renderDate = () => {
    const dateObj = new Date(date);
    return `${Months[dateObj.getMonth()]} ${dateObj.getDate()} ${dateObj.getFullYear()}`;
  }

  return (
    <div className={styles.searchResultCls} title={title}>
      <Link
        href={url}
        className={styles.searchLinkCls}
      >
        <div className={styles.titleCls}>{processTitle()}</div>
        <div className={styles.dateCls}>{renderDate()}</div>
      </Link>
    </div>
  );
};

export default SearchResult;
