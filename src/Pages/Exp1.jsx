import Strcture from './Strcture';
import { UserContext, listContext } from '../context/Context';
import name from '../LoopComponents/name';
const materialPaths = [
    require('../assets/ComputerNetworkslab/exp1/Materials/Exp1-Cables- Devices-PacketTracer.pdf'),
    require('../assets/ComputerNetworkslab/exp1/Materials/Exp_1_ProblemSheet.pdf'),
];

const solutionPaths = [
    require('../assets/ComputerNetworkslab/exp1/Solution/Exp_1_Problem_3.pka'),
    require('../assets/ComputerNetworkslab/exp1/Solution/Exp_1_Problem_4.pka'),
];

const Exp1 = () => {
    const url = "https://www.youtube.com/embed/S9VkvOHFP-w?si=J3ExCPf1_0oU3xd2";
    const listValue = {
        materialPaths: [...materialPaths],
        solutionPaths: [...solutionPaths],
    };

    return (
        <UserContext.Provider value={url}>
            <listContext.Provider value={listValue}>
                <Strcture name={name[0]} />
            </listContext.Provider>
        </UserContext.Provider>
    );

}

export default Exp1;
