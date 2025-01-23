let allBooks = [
  {
    bookId: 201,
    bookTitle: "Harry Potter and the Prisoner of Azkaban",
    bookAuthor: "JK Rowling",
    bookPrice: 300,
    bookImageUrl:
      "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcnJ5JTIwcG90dGVyJTIwYm9va3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    bookId: 202,
    bookTitle: "Harry Potter and the Order of Phoenix",
    bookAuthor: "JK Rowling",
    bookPrice: 350,
    bookImageUrl:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFycnklMjBwb3R0ZXIlMjBib29rc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    bookId: 203,
    bookTitle: "Harry Potter and the Sorcerers Stone",
    bookAuthor: "JK Rowling",
    bookPrice: 250,
    bookImageUrl:
      "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhhcnJ5JTIwcG90dGVyJTIwYm9va3N8ZW58MHx8MHx8fDA%3D",
  },
];

export function getAllBooks() {
  return allBooks;
}

export function getBookById(bookId) {
  return allBooks.find((book) => book.bookId == bookId);
}

export function addBook(newBook) {
  newBook.bookId =allBooks.length == 0 ? 201 : allBooks[allBooks.length - 1].bookId + 1;
  allBooks.push(newBook);
  
}

export function updateBook(updatedBook) {
  let index = allBooks.findIndex((book) => book.bookId == updatedBook.bookId);
  allBooks[index] = updatedBook;
}
export function deleteBook(bookId) {
  allBooks = allBooks.filter((book) => book.bookId != bookId);
}
