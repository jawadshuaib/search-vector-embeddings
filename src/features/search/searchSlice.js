import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sampleQuery: null,
  query: null,
  embedding: [],
  results: [],
};
const searchReducer = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action) {
      const { query, embedding } = action.payload;
      state.query = query;
      state.embedding = embedding;
    },
    setSampleQuery(state, action) {
      state.sampleQuery = action.payload;
    },
    setResults(state, action) {
      state.results = action.payload;
    },
  },
});
export default searchReducer.reducer;
export const { setSearch, setSampleQuery, setResults } = searchReducer.actions;
