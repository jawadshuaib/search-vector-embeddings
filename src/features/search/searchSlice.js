import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sampleQuery: null,
  query: null,
  embedding: [],
  results: [],
  method: 'vectors',
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
    setMethod(state, action) {
      state.method = action.payload;
    },
  },
});
export default searchReducer.reducer;
export const { setSearch, setSampleQuery, setResults, setMethod } =
  searchReducer.actions;
