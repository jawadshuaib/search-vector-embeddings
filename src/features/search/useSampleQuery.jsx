import { useEffect } from 'react';

export default function useSampleQuery(sampleQuery, dispatch, handleChange) {
  useEffect(() => {
    //
    // Execute the search when the sample query is clicked
    //
    if (sampleQuery === null) return;
    handleChange(sampleQuery, 0);
  }, [sampleQuery]);
}
