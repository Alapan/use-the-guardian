'use client';

import { useState } from 'react';
import InputForm from '@/stories/InputForm';
import SearchResult from '@/stories/SearchResult';
import { getArticlesBySearchTerm } from './actions';
import { Article } from './types';
import PaginationRow from '@/stories/PaginationRow';
import ErrorMessage from '@/stories/ErrorMessage';
import styles from './page.module.css';

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [searchStr, setSearchStr] = useState<string>('');
  const [errorString, setErrorString] = useState<string>('');

  const sortSearchResultsByDate = (results: Article[]) => {
    return (results ?? []).sort((r1, r2) => new Date(r2.webPublicationDate).valueOf() - new Date(r1.webPublicationDate).valueOf())
  }

  const handleApiCall = async (searchTerm: string, page: number) => {
    const { results, pages, status } = await getArticlesBySearchTerm(searchTerm.toString(), page);
    if (status === 'ok') {
      setErrorString('');
      setNumberOfPages(pages);
      setArticles(sortSearchResultsByDate(results));
    } else {
      setErrorString('Error fetching page this deep. Please consider filtering using a date range to reduce results.')
    }
  }

  const onSubmit = async (formData: FormData) => {
    const searchTerm = formData.get('searchTerm');

    if (searchTerm) {
      setSearchStr(searchTerm.toString());
      await handleApiCall(searchTerm.toString(), 1);
    }
  };

  const fetchArticlesByPageNumber = async (page: number) => {
    await handleApiCall(searchStr, page);
  };

  return (
    <main>
      <section className={styles.formContainer}>
        <InputForm onSubmit={onSubmit} />
      </section>
      {
        errorString ? <ErrorMessage message={errorString} /> : 
        (
          <section className={styles.results}>
            {numberOfPages > 0 && <PaginationRow numberOfPages={numberOfPages} fetchArticles={fetchArticlesByPageNumber}/>}
            {articles.length > 0 &&
              articles.map(({ id, webTitle, webPublicationDate, webUrl }) => (
                <SearchResult
                  key={id}
                  title={webTitle}
                  date={webPublicationDate}
                  url={webUrl}
                />
              ))}
          </section>
        )
      }
    </main>
  );
}
