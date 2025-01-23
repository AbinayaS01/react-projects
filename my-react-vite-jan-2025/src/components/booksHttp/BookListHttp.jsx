import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function BookListHttp() {
  let navigate = useNavigate();

  let [allBooks, setAllBooks] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/books")
    .then((response)=>response.json())
    .then((data)=>setAllBooks(data));
  },[]);

  //no second argument means - this useEffect hook will execute for every render of the component
  //second argument empty array - this useeffect hook will execute for the first time of render of the component
  // third argument is an array of dependencies/state variables - this effect hook will execute whenever the dependencies change

  let mappedAllBooks = allBooks.map((book) => {
    return (
      <tr key={book.id}>
        <td>{book.id}</td>
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
            onClick={() => editBook(book.id)}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => removeBook(book.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  let isBooksEmpty = allBooks.length == 0;

  function removeBook(bookId) {
    fetch("http://localhost:3000/books/"+bookId,{
      method:'DELETE',
    })
    .then((response)=>response.json())
    .then((data)=>setAllBooks(allBooks.filter((book)=>book.id!=bookId)));
    
  }
  function editBook(bookId){
    navigate(`/book-home-http/book-edit-http/${bookId}`);
   
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
