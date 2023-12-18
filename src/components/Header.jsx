import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark fixed-top ">
            <div className="container-fluid">
                <Link className="navbar-brand text-primary fw-bold" to="/">NewsApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-light"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-primary link" to="/">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary link" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary link" to="/Entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary link" to="/Business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary link" to="/Science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary link" to="/Health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary link" to="/Technology">Technology</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header