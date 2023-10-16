import React from 'react'
import Strcture from './Strcture'
import { UserContext, listContext } from '../context/Context';
import name from '../LoopComponents/name';
const materialPaths = [
    require('../assets/ComputerNetworkslab/Exp8/Materials/Exp 8 Handout.pdf'),
    require('../assets/ComputerNetworkslab/Exp8/Materials/Exp 8_Problem Sheet.pdf'),
    require('../assets/ComputerNetworkslab/Exp8/Materials/Exp_8_Problem_1.pka')
];
const solutionPaths = [
    require('../assets/ComputerNetworkslab/Exp8/Solution/cheat_sheet.pdf'),
    require('../assets/ComputerNetworkslab/Exp8/Solution/cheat sheet.jpg'),
    require('../assets/ComputerNetworkslab/Exp8/Solution/cheat sheet2.jpg'),
    require('../assets/ComputerNetworkslab/Exp8/Solution/Exp_8_Problem_1.pka')
];

const listValue = {
    materialPaths: [...materialPaths],
    solutionPaths: [...solutionPaths],
};
const Exp8 = () => {
    const url = "https://www.youtube.com/embed/AIRQ4Qq2trY?si=ikOYg3BwbQMUWCs1"
    return (
        <UserContext.Provider value={url}>
            <listContext.Provider value={listValue}>
                <Strcture name={name[7]} />
            </listContext.Provider>
        </UserContext.Provider>
    )
}

export default Exp8





