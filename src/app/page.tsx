'use client';

import { useState } from 'react';
import InputForm from '@/stories/InputForm';
import SearchResult from '@/stories/SearchResult';
import { getArticlesBySearchTerm } from './actions';
import { Article } from './types';
import styles from './page.module.css';

export default function Home() {
  const [ results, setResults ] = useState<Article[]>([]);

  const onSubmit = async (formData: FormData) => {
    const searchTerm = formData.get('searchTerm');
    if (searchTerm) {
      const articles = await getArticlesBySearchTerm(searchTerm);
      setResults(
        [...articles].sort(
          (a1, a2) => new Date(a2.webPublicationDate).valueOf() - new Date(a1.webPublicationDate).valueOf()
        )
      );
    }
  };

  return (
    <main>
      <section className={styles.formContainer}>
        <InputForm
          onSubmit={onSubmit}
        />
      </section>
      <section className={styles.results}>
        {results.length > 1 && results.map(({ id, webTitle, webPublicationDate, webUrl }) => (
          <SearchResult
            key={id}
            title={webTitle}
            date={webPublicationDate}
            url={webUrl}
          />
        ))}
      </section>
    </main>
  );
}
