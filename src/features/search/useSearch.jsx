import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { findProducts } from '../../services/searchProducts';
import { setLoading, setResults } from './searchSlice';

export default function useSearch(query, method, embedding, dispatch) {
  // React Query
  const {
    data: results,
    refetch,
    isRefetching,
    isLoading: isQueryLoading,
  } = useQuery({
    queryKey: ['search'],
    queryFn: () =>
      method === 'Vectors'
        ? findProducts('Vectors', { embedding })
        : findProducts('SQL', { query }),
    refetchOnWindowFocus: false,
    enabled: false,
  });

  useEffect(() => {
    //
    // Here we perform some action based on the returned data from React Query
    //
    // Store results in redux slice
    if (results) dispatch(setResults(results));
    if (results && !isRefetching) dispatch(setLoading(false));
  }, [results, isRefetching]);

  useEffect(() => {
    //
    // We have setup React Query to not run on load, so we need to manually trigger it when
    // there is a change in state
    //
    if (embedding.length > 0) refetch();
    if (embedding.length > 0) dispatch(setLoading(true));
  }, [embedding, method, setLoading]);

  return { results, isQueryLoading };
}
