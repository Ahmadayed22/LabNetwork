import React from 'react'
import '../componentssass/card.css'
import { Link } from 'react-router-dom'

const Card = ({ image, p, route }) => {
    return (

        <Link to={route} class="card" style={{ width: "18rem" }}>
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">{p}</p>
            </div>
        </Link>

    )
}

export default Card