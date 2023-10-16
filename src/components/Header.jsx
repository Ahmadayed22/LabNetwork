import React from 'react'
import { SiCisco } from 'react-icons/si'
import '../componentssass/header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <nav class="navbar ">
            <div class="container">
                <Link to='/' className='logo' >
                    <SiCisco />
                </Link>

                <h3>
                    Network Lab
                </h3>
            </div>
        </nav>
    )
}

export default Header