import AddToList from "./AddToList";
export interface Props {
  title: string;
  cover: string;
  ISBN: string;
  id?: string;
  isFav?: boolean;
}

const BookItem = ({ title, cover, ISBN }: Props) => {
  return (
    <>
      <a
        href="#"
        class="hover:bg-inherit h-full w-full hover:scale-105 inline-block transition-[transform] hover:contrast-125 hover:shadow-2xl"
      >
        <img
          class="aspect-[150/200] h-full objet-cover w-full max-w-full rounded"
          src={cover}
          alt="clena code"
        />
      </a>

      <AddToList cover={cover} title={title} ISBN={ISBN} />
    </>
  );
};

export default BookItem;
