import React from 'react'
// import { SiCisco } from 'react-icons/si'
import '../componentssass/header.css'
import logo from '../assets/AboAyed.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to='/' className='logo'>
                    <img src={logo} alt="AboAyed" />
                </Link>

                <h3>
                    Network Lab
                </h3>
            </div>
        </nav>
    )
}

export default Header
