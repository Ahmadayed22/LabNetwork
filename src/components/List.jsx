import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegCircle } from 'react-icons/fa6';
import '../componentssass/list.css';

const List = ({ Name, route, isActive }) => {
    return (
        <li className='list' >
            <Link to={`/${route}`} className={isActive ? 'active' : ''}  >
                <FaRegCircle style={{ marginRight: '10px' }} />
                {Name}
            </Link>
        </li>

    );
}

export default List;
