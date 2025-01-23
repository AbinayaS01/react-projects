import { Link } from "react-router-dom";

export function AppHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/display">
                Display Component
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">
                Counter Component
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="list-city">
                List City Component
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/toggle-name">
                Toggle Name Component
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo-lists">
                Todo Component
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo">
                ToDo Component
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fetch-demo">
                Fetch Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Fruits List Component
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book-home">
                Book Component
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book-home-http">
                Book HTTP Component
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/property-home">
                Property Component
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
