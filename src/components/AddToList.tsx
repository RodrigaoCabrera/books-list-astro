import { useState, useEffect } from "preact/hooks";
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
        class="btn bg-blue-500 rounded border-sky-100 py-1 px-3 text-lg font-semibold text-white m-2"
      >
        {isBookAdded ? "Agregado" : "Agregar"}
      </button>
    </div>
  );
};

export default AddToList;
