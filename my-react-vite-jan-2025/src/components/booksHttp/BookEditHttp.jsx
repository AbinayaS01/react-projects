import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function BookEditHttp() {
  let baseUrl="http://localhost:3000/books"
  let navigate=useNavigate();
  let {bid}=useParams();

let [editBook, setEditBook] = useState({
  id:0,
  bookTitle:"",
  bookAuthor:"",
  bookPrice:0,
  bookImageUrl:""
});


  let [validationErrors,setValidationErrors]=useState({});
  useEffect(()=>{
    fetch(`${baseUrl}/${bid}`)
    .then(response=>response.json())
    .then(data=>setEditBook(data));
  },[]);
  function handleEditFormSubmit(event) {
    event.preventDefault();
    fetch(`${baseUrl}/${editBook.id}`,{
      method:'PUT',
      headers:{
        "Content-Type":'application/json',
      },
      body:JSON.stringify(editBook),
    })
    .then(response=>response.json())
    .then((data)=>navigate("/book-home-http/book-list-http"));
    
  }
  function handleChangeInput(event){
    setEditBook({
      ...editBook,
      [event.target.name]:event.target.value
  });
  if(event.target.name!="bookImageUrl"){
  if(event.target.value==""){
      setValidationErrors({
          ...validationErrors,
          [event.target.name]:`${event.target.name} is required` 
      });
  }
  else{
      let newErrors={...validationErrors};
      delete  newErrors[event.target.name];
      setValidationErrors(newErrors);
      
  }
}

  }
  return (
    <>
      <div className="row my-5">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="container my-5">
            <form onSubmit={(event) => handleEditFormSubmit(event)}>
              <div className="card">
                <div className="card-header bg-success text-light">
                  <h4>EDIT BOOK</h4>
                </div>
                <div className="card-body">
                  <div className="form-control-group mb-2">
                    <label htmlFor="bTitle" className="form-label">
                      Book Title:
                    </label>
                    <input
                      type="text"
                      id="bTitle"
                      className="form-control"
                      placeholder="Enter Book Title"
                      name="bookTitle"
                      value={editBook.bookTitle}
                      onChange={(event) => handleChangeInput(event)}
                    ></input>
                    <div className="text-danger text-small">
                        {validationErrors.bookTitle}
                    </div>
                  </div>

                  <div className="form-control-group mb-2">
                    <label htmlFor="bAuthor" className="form-label">
                      Book Author:
                    </label>
                    <input
                      type="text"
                      id="bAuthor"
                      className="form-control"
                      placeholder="Enter Book Author"
                      name="bookAuthor"
                      value={editBook.bookAuthor}
                      onChange={(event) => handleChangeInput(event)}
                    ></input>
                    <div className="text-danger text-small">
                        {validationErrors.bookAuthor}
                    </div>
                  </div>

                  <div className="form-control-group mb-2">
                    <label htmlFor="bPrice" className="form-label">
                      Book Price:
                    </label>
                    <input
                      type="text"
                      id="bPrice"
                      className="form-control"
                      placeholder="Enter Book Price"
                      name="bookPrice"
                      value={editBook.bookPrice}
                      onChange={(event) => handleChangeInput(event)}
                    ></input>
                    <div className="text-danger text-small">
                        {validationErrors.bookPrice}
                    </div>
                  </div>

                  <div className="form-control-group mb-2">
                    <label htmlFor="bImage" className="form-label">
                      Book Image Url:
                    </label>
                    <input
                      type="text"
                      id="bImage"
                      className="form-control"
                      placeholder="Enter Book Image Url"
                      name="bookImageUrl"
                      value={editBook.bookImageUrl}
                      onChange={(event) => handleChangeInput(event)}
                    ></input>
                    <div className="text-danger text-small">
                        {validationErrors.bookImageUrl}
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-success text-light">
                    {Object.keys(validationErrors).length==0?(
                        <button type="submit" className="btn btn-light text-success">
                        UPDATE
                      </button>
                        
                    ):(
                        <button type="submit" className="btn btn-light text-success" disabled>
                    ADD
                  </button>
                    )}
                  
                  <button
                    type="reset"
                    className="btn btn-light text-success mx-5"
                  >
                    CLEAR
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
}
