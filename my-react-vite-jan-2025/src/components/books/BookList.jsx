import { useState } from "react";
import { getAllBooks, deleteBook } from "./book-data";
import { useNavigate } from "react-router-dom";

export function BookList() {
  let navigate = useNavigate();
  //let {state}=useLocation();
  //   let allBooks = [
  //     {
  //       bookId: 201,
  //       bookTitle: "Harry Potter and the Prisoner of Azkaban",
  //       bookAuthor: "JK Rowling",
  //       bookPrice: 300,
  //       bookImageUrl:
  //         "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcnJ5JTIwcG90dGVyJTIwYm9va3N8ZW58MHx8MHx8fDA%3D",
  //     },
  //     {
  //       bookId: 202,
  //       bookTitle: "Harry Potter and the Order of Phoenix",
  //       bookAuthor: "JK Rowling",
  //       bookPrice: 350,
  //       bookImageUrl:
  //         "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFycnklMjBwb3R0ZXIlMjBib29rc3xlbnwwfHwwfHx8MA%3D%3D",
  //     },
  //     {
  //       bookId: 203,
  //       bookTitle: "Harry Potter and the Sorcerers Stone",
  //       bookAuthor: "JK Rowling",
  //       bookPrice: 250,
  //       bookImageUrl:
  //         "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhhcnJ5JTIwcG90dGVyJTIwYm9va3N8ZW58MHx8MHx8fDA%3D",
  //     },
  //   ]; ===> normal objects
  let [allBooks, setAllBooks] = useState(getAllBooks());

  let mappedAllBooks = allBooks.map((book) => {
    return (
      <tr key={book.bookId}>
        <td>{book.bookId}</td>
        <td>
          <img src={book.bookImageUrl} width="50" height="50" />
        </td>
        <td>{book.bookTitle}</td>
        <td>{book.bookAuthor}</td>
        <td>{book.bookPrice}</td>
        <td>
          <button className="btn btn-dark">View</button>
        </td>
        <td>
          <button
            className="btn btn-info"
            onClick={() => editBook(book.bookId)}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => removeBook(book.bookId)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  let isBooksEmpty = allBooks.length == 0;

  function removeBook(bookId) {
    console.log("Book deleted with id:" + bookId);
    //allBooks=allBooks.filter((book)=>book.bookId!=bookId);
    //setAllBooks(allBooks.filter((book)=>book.bookId!=bookId));
    deleteBook(bookId);

    setAllBooks(getAllBooks());
  }
  function editBook(bookId){
    navigate(`/book-home/book-edit/${bookId}`);

  }
  return (
    <>
      <div className="container m-3">
        <h2>LIST OF BOOKS</h2>
        {isBooksEmpty ? (
          <div className="alert alert-danger"> No Book to Display!</div>
        ) : (
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{mappedAllBooks}</tbody>
          </table>
        )}
      </div>
    </>
  );
}
