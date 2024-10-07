'use server';

export const getArticlesBySearchTerm = async (
  searchStr: string,
  page: number,
) => {
  console.log('SEARCH STR: ', searchStr)
  const url = `${process.env.GUARDIAN_BASE_URL}page=${page}&q=${searchStr}&api-key=${process.env.API_KEY}`;
  console.log('URL: ', url)
  const response = await fetch(url);
  const json = await response.json();
  console.log('JSON: ', json)
  return json.response;
};
