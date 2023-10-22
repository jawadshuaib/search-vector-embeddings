import React, { useEffect, useState } from 'react';
import getVector from '../../services/getVector';
import { findProductsUsingVectors } from '../../services/searchProducts';
import Input from '../../ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { setResults, setSampleQuery, setSearch } from './searchSlice';
// import { useQuery } from '@tanstack/react-query';

export default function Search() {
  const [embedding, setEmbedding] = useState([]);
  const [timer, setTimer] = useState(null);
  const { sampleQuery } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  // We can perform search once we have the embedding for the query
  useEffect(() => {
    if (embedding.length > 0) {
      (async () => {
        try {
          const resp = await findProductsUsingVectors(embedding);
          // Store results in redux slice
          dispatch(setResults(resp));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    }
  }, [embedding]);

  useEffect(() => {
    if (sampleQuery === null) return;

    handleChange(sampleQuery, 0);
  }, [sampleQuery]);
  // function handleSearch() {
  //   const x = useQuery({
  //     queryKey: ['search'],
  //     queryFn: () => findSimilarProducts(embedding),
  //   });
  //   console.log(x);
  // }

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
