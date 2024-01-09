import BookItem from "./BookItem.tsx";
import { booksLibrary } from "../context/BooksListContext";
import { useStore } from "@nanostores/preact";
export interface Books {
  title: string;
  pages?: number;
  genre?: string;
  cover: string;
  ISBN: string;
}

const BooksContainer = () => {
  const $booksLibrary = useStore(booksLibrary);
  return (
    <ul class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-20">
      {$booksLibrary.map(({ book: { title, cover, ISBN } }) => {
        return (
          <li class="relative">
            <BookItem title={title} cover={cover} ISBN={ISBN} />
          </li>
        );
      })}
    </ul>
  );
};

export default BooksContainer;
