import React from 'react'
import Strcture from './Strcture'
import { UserContext, listContext } from '../context/Context';
import name from '../LoopComponents/name';
const materialPaths = [
    require('../assets/ComputerNetworkslab/exp2/Materials/Exp 2 IPv4 Addressing Handout.pdf'),
    require('../assets/ComputerNetworkslab/exp2/Materials/Exp 2_Problem Sheet_2.pdf'),
    require('../assets/ComputerNetworkslab/exp2/Materials/Exp_2_Problem_1.pka'),
    require('../assets/ComputerNetworkslab/exp2/Materials/Exp_2_Problem_2.pka')
];

const solutionPaths = [
    require('../assets/ComputerNetworkslab/exp2/Solution/Exp 2_Prelab Report.pdf'),
    require('../assets/ComputerNetworkslab/exp2/Solution/Exp_2_Problem_1.pka'),
    require('../assets/ComputerNetworkslab/exp2/Solution/Exp_2_Problem_2.pka')
];

const listValue = {
    materialPaths: [...materialPaths],
    solutionPaths: [...solutionPaths],
};

const Exp2 = () => {
    const url = "https://www.youtube.com/embed/WEXc-nvHC5Q?si=SXG2owLqghI_VFzu"
    return (
        <UserContext.Provider value={url}>
            <listContext.Provider value={listValue}>
                <Strcture name={name[1]} />
            </listContext.Provider>
        </UserContext.Provider>

    )
}

export default Exp2
