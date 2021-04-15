import isoFetch from 'isomorphic-fetch';

export interface Headers {
  [key: string]: string,
}

export interface RequestOptions {
  method?: "POST" | "GET" | "DELETE" | "PUT",
  headers?: Headers,
  body?: string,
}

const defaultOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}

const dataFetch = async ({ endpoint = '', options = {} }) => {

  const reqOptions = {
    ...defaultOptions,
    ...options,
  }

  const data = await isoFetch(endpoint, reqOptions);
  return data.json();
}

export default dataFetch;
export {dataFetch};
