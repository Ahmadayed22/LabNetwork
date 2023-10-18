import React from 'react'
import Strcture from './Strcture'
import { UserContext } from '../context/Context'
import name from '../LoopComponents/name';
const DrKhalid = () => {
    const url = "https://www.youtube.com/embed/9pFpvhoTX8g?si=34KyOVxrTduTOgBq"
    return (
        <UserContext.Provider value={url}>
            <Strcture name={name[10]} />
        </UserContext.Provider>

    )
}

export default DrKhalid
