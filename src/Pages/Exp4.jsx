import React from 'react'
import Strcture from './Strcture'
import { UserContext, listContext } from '../context/Context';
import name from '../LoopComponents/name';
const materialPaths = [
    require('../assets/ComputerNetworkslab/exp4/Materials/Handout - Static Routing.pdf'),
    require('../assets/ComputerNetworkslab/exp4/Materials/Exp 4_Problem Sheet.pdf'),
    require('../assets/ComputerNetworkslab/exp4/Materials/Exp_4_Problem_1_IPv4.pka'),
    require('../assets/ComputerNetworkslab/exp4/Materials/Exp_4_Problem_2_IPv6.pka')
];

const solutionPaths = [
    require('../assets/ComputerNetworkslab/exp4/Solution/Exp_4_Problem_1_IPv4 .pka'), // Note the space in the file name
    require('../assets/ComputerNetworkslab/exp4/Solution/Exp_4_Problem_2_IPv6.pka')
];

const listValue = {
    materialPaths: [...materialPaths],
    solutionPaths: [...solutionPaths],
};
const Exp4 = () => {
    const url = "https://www.youtube.com/embed/A5wHklocNFw?si=8iqE3upKZsEiEJ_Y"
    return (
        <UserContext.Provider value={url}>
            <listContext.Provider value={listValue}>
                <Strcture name={name[3]} />
            </listContext.Provider>
        </UserContext.Provider>
    )
}

export default Exp4
