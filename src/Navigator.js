import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

function Navigator() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler navbar-toggler-righ" type="button"
                    data-toggle="collapse" data-target="#navbarSupportedcontent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/customerlist">Customer List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/traininglist">Training List</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigator;