import React, { useEffect, useState } from 'react';
import getVector from '../../services/getVector';
import { findProductsUsingVectors } from '../../services/searchProducts';
import Input from '../../ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { setResults, setSampleQuery, setSearch } from './searchSlice';
import { useQuery } from '@tanstack/react-query';

export default function Search() {
  const [embedding, setEmbedding] = useState([]);
  const [timer, setTimer] = useState(null);
  const { sampleQuery } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  // React Query
  const {
    data: results,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ['search'],
    queryFn: () => findProductsUsingVectors(embedding),
    refetchOnWindowFocus: false,
    enabled: false, //disable the query:
    //this is how we keep it from running on component mount.
  });

  useEffect(() => {
    //
    // Here we perform some action based on the returned data from React Query
    //
    // Store results in redux slice
    dispatch(setResults(results));
  }, [results, isRefetching]);

  useEffect(() => {
    //
    // React Query does not run on load, so we need to manually trigger it when
    // there is a change in state
    //
    refetch();
  }, [embedding]);

  useEffect(() => {
    //
    // Execute the search when the sample query is clicked
    //
    if (sampleQuery === null) return;

    handleChange(sampleQuery, 0);
  }, [sampleQuery]);

  const handleChange = (query, debouncer = 300) => {
    // Clear the previous timer (if any)
    if (timer) clearTimeout(timer);

    // Reset sample query if user is typing
    if (query !== sampleQuery) dispatch(setSampleQuery(null));

    if (query.length < 3) {
      dispatch(setResults([]));
      dispatch(setSearch({ query, embedding: [] }));
      return;
    }

    // Debouncer:
    // Set a new timer to delay the API call by 500 milliseconds
    const newTimer = setTimeout(() => {
      (async () => {
        try {
          const resp = await getVector(query);

          // Store query and embeddings in redux slice
          dispatch(setSearch({ query, embedding: resp.embedding }));

          // Set this embedding in the local state to trigger the search
          setEmbedding(resp.embedding);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    }, debouncer);

    setTimer(newTimer);
  };
  return (
    <Input
      type="text"
      value={sampleQuery || ''}
      placeholder="Start Typing..."
      onChange={handleChange}
    />
  );
}
