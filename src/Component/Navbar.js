import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAuth } from '../Context/ContextApi';
import { toast } from 'react-toastify';
export default function Navbar() {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#0077b3', paddingLeft: 30 }}>
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">PECNOTE</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/sellnote">SellNotes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/buynotes">BuyNotes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/order">Order</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="#"><FiShoppingCart /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/chat"><FaFacebookMessenger /></Link>
              </li>
              {
                !auth.token ? (<>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/signup">SignUp</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/login">Login</Link>
                  </li>
                </>) : (
                  <>
                  <li className="nav-item">
                    <Link onClick={handleLogout} className="nav-link text-white" to="/login">Logout</Link>
                  </li>
                </>)
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
