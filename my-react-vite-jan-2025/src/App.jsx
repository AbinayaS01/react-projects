import { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Display from "./components/Display";
import { ToggleName } from "./components/ToggleName";
import { Counter } from "./components/Counter";
import { Cities } from "./components/Cities";
import ListCity from "./components/ListCity";
import ArrayDestructure from "./components/ArrayDestructure";
import ObjectDestructure from "./components/ObjectDestructure";
import { BookList } from "./components/books/BookList";
import { FruitList } from "./components/fruits/FruitList";
import { ActorsList } from "./components/actors/ActorsList";
import { CaptureTextData } from "./components/CaptureTextData";
// import { TodoList } from "./components/todo/TodoList";
import { BookAdd } from "./components/books/BookAdd";
import { ToDoList } from "./components/todolist/ToDoList";
import { TodoList } from "./components/todo/TodoList";
import { ComponentNotFound } from "./components/ComponentNotFound";
import { AppHeader } from "./components/AppHeader";
import { BookHome } from "./components/books/BookHome";
import { BookEdit } from "./components/books/BookEdit";
import { PropertyList } from "./components/properties/PropertyList";
import { PropertyEdit } from "./components/properties/PropertyEdit";
import { PropertyHome } from "./components/properties/PropertyHome";
import { FetchDemo } from "./components/FetchDemo";
import { BookHomeHttp } from "./components/booksHttp/BookHomeHttp";
import { BookListHttp } from "./components/booksHttp/BookListHttp";
import { BookAddHttp } from "./components/booksHttp/BookAddHttp";
import { BookEditHttp } from "./components/booksHttp/BookEditHttp";


function App() {
  return (
    // <div>
    <>
      {/* <h2>App Component</h2>
       <Display></Display>
    <ToggleName></ToggleName>
    <Counter></Counter>
    <Cities></Cities>
    <ListCity></ListCity> */}
      {/* <ArrayDestructure></ArrayDestructure>
    <ObjectDestructure></ObjectDestructure> */}
      {/* <BookList></BookList> 
      <BookAdd></BookAdd>
      <FruitList></FruitList>
    <ActorsList></ActorsList>
    <CaptureTextData></CaptureTextData>
    

    <TodoList></TodoList>
    */}

      <BrowserRouter>
        <AppHeader></AppHeader>
        <Routes>
          <Route path="/display" element={<Display />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/list-city" element={<ListCity />}></Route>
          <Route path="/toggle-name" element={<ToggleName />}></Route>
          <Route path="/todo" element={<ToDoList />}></Route> 
         <Route path="/todo-lists" element={<TodoList />}></Route>
         <Route path="/fetch-demo" element={<FetchDemo />}></Route>
          <Route path="/book-home" element={<BookHome />}>
            <Route path="book-list" element={<BookList />}></Route>
            <Route path="book-add" element={<BookAdd />}></Route>
            <Route path="book-edit/:bid" element={<BookEdit />}></Route>
          </Route>
          <Route path="/book-home-http" element={<BookHomeHttp />}>
            <Route path="book-list-http" element={<BookListHttp />}></Route>
            <Route path="book-add-http" element={<BookAddHttp />}></Route>
            <Route path="book-edit-http/:bid" element={<BookEditHttp />}></Route>
          </Route>
          <Route path="/" element={<FruitList />}></Route>
          <Route path="*" element={<ComponentNotFound />}></Route>
          <Route path="/property-home" element={<PropertyHome />}>
            <Route path="property-list" element={<PropertyList />}></Route>
            <Route
              path="property-edit/:pid"
              element={<PropertyEdit />}
            ></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>

    // </div>
  );
}

export default App;
