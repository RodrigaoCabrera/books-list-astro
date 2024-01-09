import books from "../data/books.json";

import { favouritesBooks } from "../context/BooksListContext";
import { useStore } from "@nanostores/preact";
const AmountBooksAvailable = () => {
  const $favouritesBooks = useStore(favouritesBooks);

  return (
    <div className="mt-20">
      <span className="text-2xl text-white font-semibold">
        {books.library.length - $favouritesBooks.length} Books available
      </span>
    </div>
  );
};

export default AmountBooksAvailable;
