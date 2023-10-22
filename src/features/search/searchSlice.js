import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    setResults(state, action) {
      state.results = action.payload;
    },
  },
});
export default searchReducer.reducer;
export const { setSearch, setResults } = searchReducer.actions;
