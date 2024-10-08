'use server';

import { Article } from './types';

export const getArticlesBySearchTerm = async (
  searchString: string,
  pageNumber: number = 1
) => {
  const url = `${process.env.GUARDIAN_BASE_URL}page=${pageNumber}&q=${searchString}&api-key=${process.env.API_KEY}`;
  const responsePromise = await fetch(url);
  const { results, pages, status, message } = (await responsePromise.json())
    .response;
  (results || []).sort(
    (a1: Article, a2: Article) =>
      new Date(a2.webPublicationDate).valueOf() -
      new Date(a1.webPublicationDate).valueOf()
  );
  return {
    results,
    pages,
    status,
    message,
  };
};
