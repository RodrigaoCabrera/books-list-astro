import books from "../data/books.json";
import {
  booksLibrary,
  filterForGenre,
  removeFilters,
} from "../context/BooksListContext";
import { useState } from "preact/hooks";
import { useStore } from "@nanostores/preact";
export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
}

export interface Author {
  name: string;
  otherBooks: string[];
}

const GenreFilter = () => {
  const [genreSelected, setGenreSelected] = useState<string>("");
  const $booksLibrary = useStore(booksLibrary);
  const genres = [
    ...new Set(books.library.map((book: { book: Book }) => book.book?.genre)),
  ];

  const selectGenre = (genre: string) => {
    setGenreSelected(genre);
    filterForGenre(genre);
  };
  const deleteFilters = () => {
    setGenreSelected("");
    removeFilters();
  };
  return (
    <div class="dropdown">
      <div className="flex items-center gap-x-2">
        <div tabIndex={0} role="button" class="btn m-1">
          Genres
        </div>
        {genreSelected && (
          <button class="btn" onClick={deleteFilters}>
            {genreSelected}
            <div class="badge badge-secondary">{$booksLibrary.length}</div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-4 h-4 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </span>
          </button>
        )}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 flex flex-col gap-y-3"
      >
        {genres.map((genre: string) => (
          <li>
            <button
              className={genreSelected === genre ? "active" : ""}
              onClick={() => selectGenre(genre)}
            >
              {genre}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreFilter;
