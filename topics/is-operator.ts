type Book = { pages: number }
type Video = { duration: number }
type Content = Video | Book;

const isBook = (content: Content): content is Book => (content as Book).pages !== undefined;
const isVideo = (content: Content): content is Video => (content as Video).duration !== undefined;

const getSize = (content: Content) => {
  if (isBook(content)) return `${content.pages} pages`;
  if (isVideo(content)) return  `${content.duration} seconds`
}

console.log(getSize({duration: 3}));
