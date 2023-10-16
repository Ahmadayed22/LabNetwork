import React from 'react'
import Strcture from './Strcture'
import { UserContext } from '../context/Context'
import name from '../LoopComponents/name';
const DrKhalid = () => {
    const url = "https://www.youtube.com/embed/itzk1UxWowY?si=xLTaS7mWAQ7JbalK"
    return (
        <UserContext.Provider value={url}>
            <Strcture name={name[10]} />
        </UserContext.Provider>

    )
}

export default DrKhalid
