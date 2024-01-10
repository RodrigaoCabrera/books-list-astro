import { atom, map } from "nanostores";
import books from "../data/books.json";
export const booksLibrary = atom(books.library);

export const filterForGenre = (genre) => {
  booksLibrary.set(books.library);
  const allBooks = booksLibrary.get();
  const booksSelected = allBooks.filter(({ book }) => book.genre === genre);

  booksLibrary.set(booksSelected);
};

export const removeFilters = () => booksLibrary.set(books.library);
