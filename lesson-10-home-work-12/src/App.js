import './App.css';
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <div className="row">
        <div className="col-12">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink
                to="/"
                className="btn btn-primary mt-4 mb-4 mr-3 ml-3"
              >
                Home-page
              </NavLink>
              <NavLink
                to="/users"
                className="btn btn-primary mt-4 mb-4 mr-3 ml-3"
              >
                Users Page
              </NavLink>
              <NavLink to="/todos" className="btn btn-primary mt-4 mb-4 mr-3">
                Todos Page
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
