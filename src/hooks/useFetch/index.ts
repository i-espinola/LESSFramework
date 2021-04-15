import useSWR from "swr";
import { dataFetch } from '@services';

export interface useFetchProps {
  url: string;
}

const useFetch = (url: string) => {
  const { data, error } = useSWR(url, async (url: string) => {
    const data = await dataFetch({url});
    return data;
  });

  return { data, error };
}

export default useFetch;
export { useFetch };
