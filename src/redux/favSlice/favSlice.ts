import { createSlice,PayloadAction } from '@reduxjs/toolkit';

import { calcTotal } from '../../utils/Sum';
import { FavItem, FavSlice } from './types';

const initialState: FavSlice = {
  items: [],
  total: 0,
};

const favSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<FavItem>) => {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.total = calcTotal(state.items);
    },

    removeItem: (state, action: PayloadAction<FavItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.total = calcTotal(state.items);
    },

    minusNumber: (state, action: PayloadAction<FavItem>) => {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count--;
      }
      state.total = calcTotal(state.items);
    },
    clearList: (state) => {
      (state.items = []), (state.total = 0);
    },
  },
});

export const { addItem, removeItem, minusNumber, clearList } = favSlice.actions;
export default favSlice.reducer;
