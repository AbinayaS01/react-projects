import { Link } from "react-router-dom";
export function BookHeaderHttp() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-success navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="book-list-http">
                Book List Http
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="book-add-http">
                Book Add Http
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
