import React from 'react'
import Strcture from './Strcture'
import { UserContext } from '../context/Context'
import name from '../LoopComponents/name';
const Cider = () => {
    const url = "https://www.youtube.com/embed/GKt9dAb5I40?si=RECkKYYeJI_Oeeth"
    return (
        <UserContext.Provider value={url}>
            <Strcture name={name[8]} />
        </UserContext.Provider>

    )
}

export default Cider
