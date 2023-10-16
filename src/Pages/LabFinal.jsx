import React from 'react'
import Strcture from './Strcture'
import { UserContext } from '../context/Context'
import name from '../LoopComponents/name';
const LabFinal = () => {
    const url = "https://www.youtube.com/embed/aMBcKvDNNyQ?si=NiZkyWkuyyDiMgk7"
    return (
        <UserContext.Provider value={url}>
            <Strcture name={name[9]} />
        </UserContext.Provider>

    )
}

export default LabFinal
