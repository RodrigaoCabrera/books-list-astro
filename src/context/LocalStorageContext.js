import { map } from "nanostores";

const localStorageData = window.localStorage.getItem("favBooks");
export const favouritesBooks = localStorageData
  ? map(JSON.parse(localStorageData))
  : map([]);

export function handlerFavouritesBooks(book) {
  const items = favouritesBooks.get();
  const isAdded = items?.some((favBook) => favBook.id === book.id);
  if (isAdded) {
    const newFavBooks = items.filter((favBook) => favBook.id !== book.id);
    favouritesBooks.set(newFavBooks);
    localStorage.setItem("favBooks", JSON.stringify(newFavBooks));
  } else {
    favouritesBooks.set([...items, book]);

    localStorage.setItem("favBooks", JSON.stringify([...items, book]));
  }
}

window.addEventListener(
  "storage",
  (event) => {
    if (event.key === "favBooks") {
      const localStorageData = window.localStorage.getItem("favBooks");
      favouritesBooks.set(JSON.parse(localStorageData));
    }
  },
  []
);
