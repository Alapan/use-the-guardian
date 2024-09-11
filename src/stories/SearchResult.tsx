import Link from 'next/link';

import styles from './styles/searchresult.module.css';

interface SearchResultProps {
  title: string;
  date: string;
  url: string;
};

const SearchResult = ({ title, date, url }: SearchResultProps) => {
  const processTitle = () => {
    if (title.length > 60) {
      return `${title.substring(0, 59)} ...`;;
    }
    return title;
  }

  return (
    <div className={styles.searchResultCls} title={title}>
      <Link
        href={url}
        className={styles.searchLinkCls}
      >
        <div className={styles.titleCls}>{processTitle()}</div>
        <div className={styles.dateCls}>{date}</div>
      </Link>
    </div>
  );
};

export default SearchResult;
