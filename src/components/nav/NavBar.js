import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav navbar-pills">
                    <li className="nav-item active">
                        <Link className = "nav-link" to="/">Stores</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className = "nav-link" to="/candy">Candy</Link>
                    </li>
                    <li className="nac-Item active">
                        <Link className = "nav-link" to="/employees">Employees</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar

