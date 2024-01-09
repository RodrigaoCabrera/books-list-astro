import MarkerFill from "./icons/MarkerFill.tsx";
import MarkerOutline from "./icons/MarkerOutline.tsx";

import {
  handlerFavouritesBooks,
  favouritesBooks,
} from "../context/LocalStorageContext.js";
import { useStore } from "@nanostores/preact";
interface Props {
  ISBN: string;
  title: string;
  cover: string;
  isFav?: Boolean;
}

const AddToList = (book: Props) => {
  const $favouritesBooks = useStore(favouritesBooks);

  const isFavBook = () => {
    const isAdded = $favouritesBooks.some(
      (favBook: Props) => favBook.ISBN === book.ISBN
    );
    return isAdded;
  };

  return (
    <div class="absolute bottom-0 right-0">
      <button
        onClick={() =>
          handlerFavouritesBooks({ ...book, id: book.ISBN, isFav: true })
        }
        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {isFavBook() ? <MarkerFill /> : <MarkerOutline />}
        </span>
      </button>
    </div>
  );
};

export default AddToList;
