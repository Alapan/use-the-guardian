'use client';

import { MouseEventHandler } from 'react';
import styles from './styles/PageNumber.module.css';

interface PageNumberProps {
  pageNumber: number;
  handlePageNumberClick: (pageNumber: number) => void;
  isClicked: boolean;
}

const PageNumber = ({
  pageNumber,
  handlePageNumberClick,
  isClicked,
}: PageNumberProps) => {

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    handlePageNumberClick(pageNumber);
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
