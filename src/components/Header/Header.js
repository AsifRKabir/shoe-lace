import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {

    const [loggedInUser] = useContext(UserContext);

    return (
        <div className="d-flex justify-content-center bg-dark">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 container">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <img src={logo} alt="" /> <span>SHOE LACE</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="ms-auto navbar-nav">
                        <Link className="nav-link" to='/'>Home</Link>
                        <Link className="nav-link" to='/'>Orders</Link>
                        <Link className="nav-link" to='/'>Admin</Link>
                        <Link className="nav-link" to='/'>Deals</Link>
                        {
                            loggedInUser.email ? <Link className="nav-link orange-btn" to='/'>{loggedInUser.email.substr(0, loggedInUser.email.indexOf('@'))}</Link>
                            : <Link className="nav-link btn btn-light text-dark" to='/login'>Login</Link> 
                        }
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Header;