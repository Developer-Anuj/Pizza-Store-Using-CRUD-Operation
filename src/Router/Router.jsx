import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../Components/Home.jsx';
import About from '../Components/About.jsx';
import AddNewItems from '../Components/AddNewItems.jsx';
import Contact from '../Components/Contact.jsx';
import DeleteItems from '../Components/DeleteItems.jsx';
import DisplayAllItems from '../Components/DisplayAllItems.jsx';
import UpdateItems from '../Components/UpdateItems.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Router() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">&#60;PizzaStore /&#62;</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/AddNewItems">Add New Items</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/DisplayAllItems">Display All Items</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/UpdateItems">Update Items</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/DeleteItems">Delete Items</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AddNewItems' element={<AddNewItems />} />
        <Route path='/DisplayAllItems' element={<DisplayAllItems />} />
        <Route path='/UpdateItems' element={<UpdateItems />} />
        <Route path='/About' element={<About />} />
        <Route path='/DeleteItems' element={<DeleteItems />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
