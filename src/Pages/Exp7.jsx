import React from 'react'
import Strcture from './Strcture'
import { UserContext, listContext } from '../context/Context';
import name from '../LoopComponents/name';
const materialPaths = [
    require('../assets/ComputerNetworkslab/Exp7/Materials/OSPF Handout.pdf'),
    require('../assets/ComputerNetworkslab/Exp7/Materials/Exp 7_Problem Sheet.pdf'),
    require('../assets/ComputerNetworkslab/Exp7/Materials/cheat sheet.jpg'),
    require('../assets/ComputerNetworkslab/Exp7/Materials/cheat sheet2.jpg'),
    require('../assets/ComputerNetworkslab/Exp7/Materials/Exp_7_Problem_1_OSPFv2.pka'),
    require('../assets/ComputerNetworkslab/Exp7/Materials/Exp_7_Problem_2_OSPFv3.pka')
];

const solutionPaths = [
    require('../assets/ComputerNetworkslab/Exp7/Solution/Exp 7_Problem Sheet.pdf'),
    require('../assets/ComputerNetworkslab/Exp7/Solution/Exp_7_Problem_1_OSPFv2.pka'),
    require('../assets/ComputerNetworkslab/Exp7/Solution/Exp_7_Problem_2_OSPFv3.pka')
];

const listValue = {
    materialPaths: [...materialPaths],
    solutionPaths: [...solutionPaths],
};
const Exp7 = () => {
    const url = "https://www.youtube.com/embed/UVLzWJZ7XMI?si=_pG5h_m55yXY6kH4";
    return (
        <UserContext.Provider value={url}>
            <listContext.Provider value={listValue}>
                <Strcture name={name[6]} />
            </listContext.Provider>
        </UserContext.Provider>
    )
}

export default Exp7



