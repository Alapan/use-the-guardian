import Link from 'next/link';

import './styles/searchresult.css';

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
    <div className='search-result' title={title}>
      <Link
        href={url}
        className='search-link'
      >
        <div className='title'>{processTitle()}</div>
        <div className='date'>{date}</div>
      </Link>
    </div>
  );
};

export default SearchResult;
