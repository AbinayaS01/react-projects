import { Link } from "react-router-dom"
export function PropertyHeader(){
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-info navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="property-list">
                Property List
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
        </>
    )
}