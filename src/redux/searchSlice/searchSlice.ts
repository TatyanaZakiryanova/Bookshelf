import { createSlice,PayloadAction } from '@reduxjs/toolkit';

import {
  FilterEnum,
  FilterParams,
  LangEnum,
  LangParams,
  OrderEnum,
  OrderParams,
  ResultsParams,
} from './types';

const initialState: ResultsParams = {
  search: '',
  orderBy: {
    name: 'Relevance',
    parameter: OrderEnum.RELEVANCE,
  },
  filter: {
    name: 'All books',
    value: FilterEnum.EBOOKS,
  },
  startIndex: 0,
  langRestrict: {
    name: 'All',
    value: LangEnum.ALL,
  },
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.search = action.payload;
      state.startIndex = 0;
    },
    setOrderParameter: (state, action: PayloadAction<OrderParams>) => {
      state.orderBy = action.payload;
      state.startIndex = 0;
    },
    setFilterParameter: (state, action: PayloadAction<FilterParams>) => {
      state.filter = action.payload;
      state.startIndex = 0;
    },
    setStartIndex: (state, action: PayloadAction<number>) => {
      state.startIndex = action.payload;
    },
    setLanguageValue: (state, action: PayloadAction<LangParams>) => {
      state.langRestrict = action.payload;
      state.startIndex = 0;
    },
  },
});

export const {
  setSearchValue,
  setOrderParameter,
  setFilterParameter,
  setStartIndex,
  setLanguageValue,
} = searchSlice.actions;

export default searchSlice.reducer;
