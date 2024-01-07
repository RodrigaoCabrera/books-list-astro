import { useState, useEffect } from "preact/hooks";
import MarkerFill from "./icons/MarkerFill.tsx";
import MarkerOutline from "./icons/MarkerOutline.tsx";
interface Props {
  ISBN: string;
  title: string;
  cover: string;
}

const AddToList = (book: Props) => {
  const [isBookAdded, setisBookAdded] = useState(false);

  useEffect(() => {
    isFavBook();
  }, []);

  const getFavBooks = () => {
    const booksAdded = localStorage.getItem("favBook");
    if (booksAdded) {
      return JSON.parse(booksAdded);
    }
    return [];
  };

  const isFavBook = () => {
    const booksAdded = getFavBooks();
    const isAdded = booksAdded.some(
      (favBook: Props) => favBook.ISBN === book.ISBN
    );
    setisBookAdded(isAdded);
  };

  const removeFromFav = () => {
    const booksAdded = getFavBooks() as [];
    const newFavBooks = booksAdded.filter(
      (favBook: Props) => favBook.ISBN !== book.ISBN
    );
    localStorage.setItem("favBook", JSON.stringify(newFavBooks));
    setisBookAdded(false);
  };

  const addToFav = () => {
    const booksAdded = getFavBooks() as [];
    localStorage.setItem("favBook", JSON.stringify([...booksAdded, book]));
    setisBookAdded(true);
  };

  const handleAddToList = () => {
    if (isBookAdded) {
      removeFromFav();
    } else {
      addToFav();
    }
  };

  return (
    <div class="absolute bottom-0 right-0">
      <button
        onClick={handleAddToList}
        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {isBookAdded ? <MarkerFill /> : <MarkerOutline />}
        </span>
      </button>
    </div>
  );
};

export default AddToList;
