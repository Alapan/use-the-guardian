'use server';

export const getArticlesBySearchTerm= async (searchTerm: FormDataEntryValue) => {
  const url = `${process.env.GUARDIAN_BASE_URL}q=${searchTerm}&api-key=${process.env.API_KEY}`;
  const response = await fetch(url);
  const { results } = (await response.json()).response;
  return results;
};
