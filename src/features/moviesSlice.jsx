import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../api";

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async ({ endpoint, page }) => {
    const response = await axios.get(
      `${BASE_URL}/${endpoint}?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return response.data.results;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.status = "success";
      })
      .addCase(getMovies.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default moviesSlice.reducer;
