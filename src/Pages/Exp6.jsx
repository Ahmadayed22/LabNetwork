import React from 'react'
import Strcture from './Strcture'
import { UserContext, listContext } from '../context/Context';
import name from '../LoopComponents/name';
const materialPaths = [
    require('../assets/ComputerNetworkslab/exp6/Materials/Exp 6_DVRPs_EIGRP.pdf'),
    require('../assets/ComputerNetworkslab/exp6/Materials/Exp 6_Problem_1_EIGRP_IPv4.pka'),
    require('../assets/ComputerNetworkslab/exp6/Materials/Exp 6_Problem_2_EIGRP_IPv6.pka')
];

const solutionPaths = [
    require('../assets/ComputerNetworkslab/exp6/Solution/Eigrp.jpg'),
    require('../assets/ComputerNetworkslab/exp6/Solution/Exp 6_Problem_1_EIGRP_IPv4.pka'),
    require('../assets/ComputerNetworkslab/exp6/Solution/Exp 6_Problem_1_EIGRP_IPv4.pka')
];

const listValue = {
    materialPaths: [...materialPaths],
    solutionPaths: [...solutionPaths],
}
const Exp6 = () => {
    const url = "https://www.youtube.com/embed/o6bAfa9LZc4?si=wty5l3vU9D2dj4hB"
    return (
        <UserContext.Provider value={url}>
            <listContext.Provider value={listValue}>
                <Strcture name={name[5]} />
            </listContext.Provider>
        </UserContext.Provider>
    )
}

export default Exp6

