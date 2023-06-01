import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HistoryState {
    requests: Array<string>;
}

const initialState: HistoryState = {
    requests: [],
};

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addRequest: (state, action: PayloadAction<string>) => {
            if (state.requests.length >= 5) {
                state.requests.shift();
            }
            state.requests.push(action.payload);
        },
    },
});

export const { addRequest } = historySlice.actions;

export default historySlice.reducer;
