// Global Imports
import React, { Component } from "react"
import { Link } from "react-router-dom"
import {FaGithub} from "react-icons/fa"
// Local Imports

// Styles
import "./sass/navbar.sass"

class Navbar extends Component {
    render() {
        return (
            <header className="navbar">
                <div className="navbar__brand">
                    <Link className="navbar__brand_text" to="/">
                        FQAlmeida
                    </Link>
                </div>
                <div className="navbar__links">
                    <a className="navbar__links_anchor" target="blank" href="https://github.com/FQAlmeida">
                        <FaGithub />
                    </a>
                    <Link className="navbar__links_anchor" to="repositories">
                        Repositórios
                    </Link>
                </div>
            </header>
        )
    }
}

export default Navbar;
