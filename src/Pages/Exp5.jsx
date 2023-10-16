import React from 'react'
import Strcture from './Strcture'
import { UserContext, listContext } from '../context/Context';
import name from '../LoopComponents/name';
const materialPaths = [
    require('../assets/ComputerNetworkslab/exp5/Materials/Exp 5- DVRPs_RIP.pdf'),
    require('../assets/ComputerNetworkslab/exp5/Materials/Exp 5_Problem Sheet.pdf'),
    require('../assets/ComputerNetworkslab/exp5/Materials/Exp 5_Prelab Report.pdf'),
    require('../assets/ComputerNetworkslab/exp5/Materials/Exp 5_Problem_1_RIPv2.pka'),
    require('../assets/ComputerNetworkslab/exp5/Materials/Exp 5_Problem_2_RIPng.pka')
];

const solutionPaths = [
    require('../assets/ComputerNetworkslab/exp5/Solution/Exp 5_Prelab Report.pdf'),
    require('../assets/ComputerNetworkslab/exp5/Solution/explain.jpg'),
    require('../assets/ComputerNetworkslab/exp5/Solution/Exp 5_Problem_2_RIPng.pka'),
    require('../assets/ComputerNetworkslab/exp5/Solution/Exp 5_Problem_3_Routing Loops.pka')
];

const listValue = {
    materialPaths: [...materialPaths],
    solutionPaths: [...solutionPaths],
};
const Exp5 = () => {
    const url = "https://www.youtube.com/embed/nZ3Q7BcZk58?si=pJdeMEw1TndocbCU"
    return (
        <UserContext.Provider value={url}>
            <listContext.Provider value={listValue}>
                <Strcture name={name[4]} />
            </listContext.Provider>
        </UserContext.Provider>
    )
}

export default Exp5


