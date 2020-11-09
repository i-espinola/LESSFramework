import fetchSSR from 'node-fetch';
import fetchCSR from 'isomorphic-fetch';

export interface Headers {
  [key: string]: string,
}

export interface RequestOptions {
  method?: string | "POST" | "GET" | "DELETE" | "PUT",
  headers?: Headers,
  body?: string,
}

const defaultOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}

const dataFetch = async ( endpoint: string, options: RequestOptions = {} ) => {
  const isCSR = typeof window !== 'undefined';
  const reqOptions = {
    ...defaultOptions,
    ...options
  }

  const data = isCSR ? await fetchCSR( endpoint, reqOptions ) : await fetchSSR( endpoint, reqOptions );
  const json = isCSR ? await data.json() : data.text();

  return json;
}

export default dataFetch;
export {dataFetch};
