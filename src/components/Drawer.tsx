// Drawer.js
import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { favouritesBooks } from "../context/LocalStorageContext.js";
import BookItem from "./BookItem.tsx";
import BooksQuantity from "./BooksQuantity";

const Drawer = () => {
  const $favouritesBooks = useStore(favouritesBooks);
  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <label for="my-drawer-4">
          <BooksQuantity />
        </label>
      </div>
      <div class="drawer-side overflow-hidden z-10">
        <label
          for="my-drawer-4"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <section className="h-full bg-base-200 overflow-auto">
          <h3 className="text-2xl ml-8 py-2">Favourite list</h3>
          <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {$favouritesBooks.map(({ title, cover, ISBN }: any) => {
              return (
                <li>
                  <BookItem title={title} cover={cover} ISBN={ISBN} />
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Drawer;
