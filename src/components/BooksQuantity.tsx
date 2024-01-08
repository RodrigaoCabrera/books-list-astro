import { useStore } from "@nanostores/preact";
import { favouritesBooks } from "../context/BooksListContext";

const BooksQuantity = () => {
  const $favouritesBooks = useStore(favouritesBooks);

  return (
    <div class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
      <span
        id="book-count"
        class="inline-flex items-center justify-center w-auto h-auto min-w-5 p-0.5 mr-1 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
      >
        {$favouritesBooks.length}
      </span>
      Reading list
    </div>
  );
};

export default BooksQuantity;
