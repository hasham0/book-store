function getImgURL(bookVal: string): URL {
  return new URL(`../assets/books/${bookVal}`, import.meta.url);
}

export default getImgURL;
