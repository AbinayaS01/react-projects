import { Link } from "react-router-dom";
export function BookHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-info navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="book-list">
                Book List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="book-add">
                Book Add
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
