import { Fragment, useState } from 'react';

import PageNumber from './PageNumber';
import styles from './styles/PaginationRow.module.css';

interface PaginationRowProps {
  pageCount: number;
  onClick: (pageNumber: number) => void;
}

const PaginationRow = ({ pageCount, onClick }: PaginationRowProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const allPageNumbers = Array.from([...Array(pageCount)].keys()).map(
    (num) => num + 1
  );

  const handlePageNumberClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    onClick(pageNumber);
  };

  const REPLACEABLE_BY_DOTS = [-1, -2];

  const getPageNumbersToDisplay = (): number[] => {
    let pageNumbersToDisplay: number[] = [];
    if (pageCount <= 3) {
      pageNumbersToDisplay = allPageNumbers;
    } else if (currentPage === 1) {
      // 1, 2, 3, ... 10
      pageNumbersToDisplay = [
        ...allPageNumbers.slice(0, 3),
        REPLACEABLE_BY_DOTS[0],
        allPageNumbers[pageCount - 1],
      ];
    } else if (currentPage === pageCount) {
      // 1 ... 8, 9, 10
      pageNumbersToDisplay = [
        1,
        REPLACEABLE_BY_DOTS[0],
        ...allPageNumbers.slice(pageCount - 3),
      ];
    } else if (currentPage >= 2 && currentPage <= 4) {
      // 1, 2, 3, 4, 5 ... 10 => currentPage = 3
      pageNumbersToDisplay = [
        ...allPageNumbers.slice(0, currentPage + 2),
        REPLACEABLE_BY_DOTS[0],
        pageCount,
      ];
    } else if (currentPage >= pageCount - 3 && currentPage < pageCount) {
      // 1 ... 5, 6, 7, 8, 9, 10 => currentPage = 7
      pageNumbersToDisplay = [
        1,
        REPLACEABLE_BY_DOTS[0],
        ...allPageNumbers.slice(currentPage - 3),
      ];
    } else {
      // 1 ... 3, 4, 5, 6, 7, ... 10 => currentPage = 5
      pageNumbersToDisplay = [
        1,
        REPLACEABLE_BY_DOTS[0],
        ...allPageNumbers.slice(currentPage - 3, currentPage + 2),
        REPLACEABLE_BY_DOTS[1],
        pageCount,
      ];
    }
    return pageNumbersToDisplay;
  };

  return (
    <div className={styles.paginationRow}>
      {getPageNumbersToDisplay().map((pageNumber: number) => {
        if (REPLACEABLE_BY_DOTS.includes(pageNumber))
          return <Fragment key={pageNumber}>...</Fragment>;
        return (
          <PageNumber
            key={pageNumber}
            pageNumber={pageNumber}
            handlePageNumberClick={handlePageNumberClick}
            isClicked={pageNumber === currentPage ? true : false}
          />
        );
      })}
    </div>
  );
};

export default PaginationRow;
