import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import useSearch from './useSearch';
import useSampleQuery from './useSampleQuery';
import getVector from '../../services/getVector';
import Input from '../../ui/Input';
import { setResults, setSampleQuery, setSearch } from './searchSlice';

export default function Search() {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(null);
  const [embedding, setEmbedding] = useState([]);
  const { query, sampleQuery, method, isLoading } = useSelector(
    (state) => state.search,
  );
  // Custom hook to fetch products from the API
  const { isQueryLoading } = useSearch(query, method, embedding, dispatch);

  const handleChange = (query, debouncer = 300) => {
    // Clear the previous timer (if any)
    if (timer) clearTimeout(timer);

    // Reset sample query if user is typing
    if (query !== sampleQuery) dispatch(setSampleQuery(null));

    if (query.length < 3) {
      dispatch(setResults([]));
      dispatch(setSearch({ query: null, embedding: [] }));
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
          toast.error('Error fetching data:', error);
        }
      })();
    }, debouncer);

    setTimer(newTimer);
  };

  // Custom hook to execute search whenever sampleQuery is added to state slice
  // This happens when the user clicks on the samle provided in the UI
  useSampleQuery(sampleQuery, dispatch, handleChange);

  return (
    <Input
      type="text"
      value={sampleQuery || ''}
      placeholder="Start Typing..."
      onChange={handleChange}
      isLoading={isLoading || isQueryLoading}
    />
  );
}

// @@@ The following code is for reference only @@@ //
// @@@ It has been replaced by custom hooks @@@ //

// React Query
// const {
//   data: results,
//   refetch,
//   isRefetching,
//   isLoading: isQueryLoading,
// } = useQuery({
//   queryKey: ['search'],
//   queryFn: () =>
//     method === 'Vectors'
//       ? findProducts('Vectors', { embedding })
//       : findProducts('SQL', { query }),
//   refetchOnWindowFocus: false,
//   enabled: false, //disable the query:
//   //this is how we keep it from running on component mount.
// });

// useEffect(() => {
//   //
//   // Here we perform some action based on the returned data from React Query
//   //
//   // Store results in redux slice
//   if (results) dispatch(setResults(results));
//   if (results && !isRefetching) dispatch(setLoading(false));
// }, [results, isRefetching]);

// useEffect(() => {
//   //
//   // React Query does not run on load, so we need to manually trigger it when
//   // there is a change in state
//   //
//   if (embedding.length > 0) refetch();
//   if (embedding.length > 0) dispatch(setLoading(true));
// }, [embedding, method, setLoading]);

// useEffect(() => {
//   //
//   // Execute the search when the sample query is clicked
//   //
//   if (sampleQuery === null) return;

//   // Debounce delay not necessary for sampleQuery
//   handleChange(sampleQuery, 0);
// }, [sampleQuery]);
