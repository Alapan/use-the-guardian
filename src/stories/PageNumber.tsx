'use client';

import { MouseEventHandler, useState } from 'react';
import styles from './styles/PageNumber.module.css';

interface PageNumberProps {
  pageNumber: number;
  fetchArticles: (pageNumber: number) => void;
}

const PageNumber = ({
  pageNumber,
  fetchArticles,
}: PageNumberProps) => {
  const [ isClicked, setIsClicked ] = useState<boolean>(false);

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    setIsClicked(true);
    fetchArticles(pageNumber);
  };

  const cls = isClicked ? `${styles.pageNumber} ${styles.selected}` : `${styles.pageNumber}`;
  return (
    <button
      className={cls}
      onClick={onClick}
      aria-label={`Get results for page ${pageNumber}`}
    >
      {pageNumber}
    </button>
  );
};

export default PageNumber;
