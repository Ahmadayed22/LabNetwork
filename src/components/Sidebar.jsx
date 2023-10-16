import React from 'react';
import { useLocation } from 'react-router-dom';
import List from '../components/List';
import name from '../LoopComponents/name';
import route from '../LoopComponents/route';
import '../componentssass/sidebar.css';

const Sidebar = () => {
    const location = useLocation(); // Get the current route location
    return (
        <div className='sidebar'>
            <h3>Experiments</h3>
            <ul>
                {
                    name.map((Name, i) => {
                        const Route = route[i].charAt(0).toUpperCase() + route[i].slice(1);
                        const linkTo = `/${Route}`;
                        const isActive = location.pathname === linkTo;

                        return (
                            <List key={i} Name={Name} route={Route} isActive={isActive} />
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Sidebar;
