'use client';

import { FormEvent, useState } from 'react';
import InputForm from './components/InputForm';
import SearchResult from './components/SearchResult';
import { getArticlesBySearchTerm } from './actions';
import { Article } from './types';
import PaginationRow from './components/PaginationRow';
import ErrorMessage from './components/ErrorMessage';
import styles from './page.module.css';

interface ResultState {
  results: Article[];
  pages: number;
  status: string;
  message: string;
}

export default function Home() {
  const [searchString, setSearchString] = useState('');
  const [resultState, setResultState] = useState<ResultState>({
    results: [],
    pages: 0,
    status: '',
    message: '',
  });

  const updateSearchString = (event: FormEvent<HTMLInputElement>) => {
    setSearchString(event.currentTarget.value);
  };

  const handleApiCall = async (pageNumber: number = 1) => {
    if (searchString) {
      const { results, status, pages, message } = await getArticlesBySearchTerm(
        searchString,
        pageNumber
      );
      setResultState({
        results,
        status,
        pages,
        message,
      });
    }
  };

  const renderResults = () => {
    if (resultState.results.length) {
      return (
        <section className={styles.results}>
          <PaginationRow
            pageCount={resultState.pages}
            onClick={async (pageNumber: number) =>
              await handleApiCall(pageNumber)
            }
          />
          {resultState.results.map(
            ({ id, webTitle, webPublicationDate, webUrl }) => (
              <SearchResult
                key={id}
                title={webTitle}
                date={webPublicationDate}
                url={webUrl}
              />
            )
          )}
        </section>
      );
    } else {
      return (
        <ErrorMessage message="No results found! Try a different search value." />
      );
    }
  };

  const renderError = () => {
    if (resultState.status === 'error') {
      return <ErrorMessage message={resultState.message} />;
    }
    return null;
  };

  return (
    <main>
      <section className={styles.formContainer}>
        <InputForm
          handleApiCall={handleApiCall}
          value={searchString}
          onChange={updateSearchString}
        />
      </section>
      {resultState.status === 'ok' ? renderResults() : renderError()}
    </main>
  );
}
