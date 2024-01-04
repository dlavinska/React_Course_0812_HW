import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-12">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to="/" className="btn btn-primary mt-4 mb-4 ml-3">
                Home Page
              </NavLink>                 
              <NavLink to="/users" className="btn btn-primary mt-4 mb-4 ml-3">
                UsersList Page
              </NavLink>          
            </li>                   
          </ul>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:userId' element={<UserDetails />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>      

    </div>
  );
}

export default App;
