import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

interface SearchState {
    status: 'idle' | 'loading' | 'failed';
    results: Array<any>;
}

const initialState: SearchState = {
    status: 'idle',
    results: [],
};

export const searchGithub = createAsyncThunk(
    'search/github',
    async (term: string) => {
        const response = await axiosInstance.get(`/search/repositories?q=${term}`);
        return response.data.items;
    }
);

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchGithub.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchGithub.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'idle';
                state.results = action.payload;
            })
            .addCase(searchGithub.rejected, (state) => {
                state.status = 'failed';
                state.results = [];
            });
    },
});

export default searchSlice.reducer;
