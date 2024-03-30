import React from 'react'
import Strcture from './Strcture'
import { UserContext, listContext } from '../context/Context'
import name from '../LoopComponents/name';
const materialPaths = [
    require('../assets/ComputerNetworkslab/Final/Networks Lab.pdf')
];
const solutionPaths = [
    require('../assets/ComputerNetworkslab/Final/Networks Lab.pdf'),
];
const listValue = {
    materialPaths: [...materialPaths],
    solutionPaths: [...solutionPaths],
}
const LabFinal = () => {
    const url = "https://www.youtube.com/embed/aMBcKvDNNyQ?si=NiZkyWkuyyDiMgk7"
    return (
        <UserContext.Provider value={url}>
            <listContext.Provider value={listValue}>

                <Strcture name={name[9]} />
            </listContext.Provider>
        </UserContext.Provider>

    )
}

export default LabFinal
