import useSWR from "swr";
import { dataFetch } from '@services';

export function useFetch( url: string ) {
  const { data, error } = useSWR(url, async (url: string) => {
    const data = await dataFetch(url);
    return data;
  });

  return { data, error };
}
