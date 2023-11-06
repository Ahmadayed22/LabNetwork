import React from 'react'
import Strcture from './Strcture'
import { UserContext, listContext } from '../context/Context';
import name from '../LoopComponents/name';
const materialPaths = [
    require('../assets/ComputerNetworkslab/exp3/Materials/IPv6 (Theory and Practice).pdf'),
    require('../assets/ComputerNetworkslab/exp3/Materials/Exp 3_Problem Sheet.pdf'),
    require('../assets/ComputerNetworkslab/exp3/Materials/Exp 3_Prelab Report.pdf'),
    require('../assets/ComputerNetworkslab/exp3/Materials/Exp_3_Problem_1_IPv6_Subnetting.pka')
];

const solutionPaths = [
    require('../assets/ComputerNetworkslab/exp3/Solution/Exp 3_Prelab Report.pdf'),
    require('../assets/ComputerNetworkslab/exp3/Solution/Exp_3_Problem_1_IPv6_Subnetting.pka')
];


const listValue = {
    materialPaths: [...materialPaths], // Define your materialPaths array here
    solutionPaths: [...solutionPaths], // Define your solutionPaths array here
};
const Exp3 = () => {
    const url = "https://www.youtube.com/embed/eB5sd_KPdPs?si=6EH3SNJTm2EfyLYp"
    return (
        <UserContext.Provider value={url}>
            <listContext.Provider value={listValue}>
                <Strcture name={name[2]} />
            </listContext.Provider>
        </UserContext.Provider>
    )
}

export default Exp3
