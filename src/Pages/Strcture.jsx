import React from 'react'
import '../PagesCass/strcture.css'

import Video from '../components/Video'
import Sidebar from '../components/Sidebar'
import Collapse from '../components/Collapse'

const Strcture = ({ name }) => {
    return (
        <div className='Strcture ' >
            <div className='content container'>
                <br />
                <h2 style={{ color: '1e3f66' }} className='text-capitalize text-center mb-3 ' >  {name}</h2>
                <Video />
                <Collapse />
            </div>
            <Sidebar />


        </div>
    )
}

export default Strcture