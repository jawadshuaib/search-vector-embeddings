import React, { useEffect, useState } from 'react';
import getVector from '../../services/getVector';
import { findSimilarProducts } from '../../services/searchProducts';
import Input from '../../ui/Input';
// import { useQuery } from '@tanstack/react-query';

export default function Search() {
  const [embedding, setEmbedding] = useState([]);
  const [timer, setTimer] = useState(null);

  // We can perform search once we have the embedding for the query
  useEffect(() => {
    if (embedding.length > 0) {
      (async () => {
        try {
          const resp = await findSimilarProducts(embedding);
          console.log(resp);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    }
  }, [embedding]);

  // function handleSearch() {
  //   const x = useQuery({
  //     queryKey: ['search'],
  //     queryFn: () => findSimilarProducts(embedding),
  //   });
  //   console.log(x);
  // }

  const handleChange = (query) => {
    if (query.length < 3) return;

    // Clear the previous timer (if any)
    if (timer) clearTimeout(timer);

    // Debouncer:
    // Set a new timer to delay the API call by 500 milliseconds
    const newTimer = setTimeout(() => {
      (async () => {
        try {
          const resp = await getVector(query);
          setEmbedding(resp.embedding);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    }, 500);

    setTimer(newTimer);
  };
  return (
    <Input type="text" placeholder="Start Typing..." onChange={handleChange} />
  );
}
