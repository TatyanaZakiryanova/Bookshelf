import { createSlice,PayloadAction } from '@reduxjs/toolkit';

import { Book } from '../../pages/Main/types';
import { fetchBooks } from './asyncActions';
import { BooksState, Status } from './types';

const initialState: BooksState = {
  items: [],
  status: Status.IDLE,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Book[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const uniqueBooks: Book[] = action.payload.reduce(
          (accumulator: Book[], currentBook: Book) => {
            if (!accumulator.some((book) => book.id === currentBook.id)) {
              accumulator.push(currentBook);
            }
            return accumulator;
          },
          [],
        );
        state.status = Status.SUCCESS;
        state.items = uniqueBooks;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        if (action.payload === 'NO_MORE_BOOKS') {
          state.status = Status.NO_MORE_BOOKS;
        } else {
          state.status = Status.ERROR;
        }
      });
  },
});

export const { setItems } = booksSlice.actions;

export default booksSlice.reducer;
