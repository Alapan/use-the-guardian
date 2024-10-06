import { Fragment, useState } from 'react';

import PageNumber from './PageNumber';
import styles from './styles/PaginationRow.module.css';

interface PaginationRowProps {
  numberOfPages: number;
  fetchArticles: (pageNumber: number) => void;
};

const PaginationRow = ({ numberOfPages, fetchArticles }: PaginationRowProps) => {
  const [ currentPage, setCurrentPage ] = useState<number>(1);
  const allPageNumbers = Array.from([...Array(numberOfPages)].keys()).map((num) => num + 1);

  const handlePageNumberClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    fetchArticles(pageNumber);
  };

  const getPageNumbersToDisplay = () : number[] => {
    let pageNumbersToDisplay: number[] = [];
    if (numberOfPages <= 3) {
      pageNumbersToDisplay = allPageNumbers;
    } else if (currentPage === 1) {
      // 1, 2, 3, ... 10
      pageNumbersToDisplay = [...allPageNumbers.slice(0, 3), -1, allPageNumbers[numberOfPages - 1]];
    } else if (currentPage === numberOfPages) {
      // 1 ... 8, 9, 10
      pageNumbersToDisplay = [1, -1, ...allPageNumbers.slice(numberOfPages - 3)]
    } else if (currentPage >= 2 && currentPage <= 4) {
      // 1, 2, 3, 4, 5 ... 10 => currentPage = 3
      pageNumbersToDisplay = [...allPageNumbers.slice(0, currentPage + 2), -1, numberOfPages];
    } else if (currentPage >= numberOfPages - 3 && currentPage < numberOfPages) {
      // 1 ... 5, 6, 7, 8, 9, 10 => currentPage = 7
      pageNumbersToDisplay = [1, -1, ...allPageNumbers.slice(currentPage - 3)];
    } else {
      // 1 ... 3, 4, 5, 6, 7, ... 10 => currentPage = 5
      pageNumbersToDisplay = [1, -1, ...allPageNumbers.slice(currentPage - 3, currentPage + 2), -2, numberOfPages];
    }
    return pageNumbersToDisplay;
  }

  return (
    <div className={styles.paginationRow}>
      {getPageNumbersToDisplay().map((pageNumber: number) => {
        if (pageNumber < 0) return <Fragment key={pageNumber}>...</Fragment>
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
