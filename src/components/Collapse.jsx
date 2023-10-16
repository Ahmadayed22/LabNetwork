import React, { useContext } from 'react';
import '../componentssass/collapse.css';
import Linkk from './Linkk';
import { listContext } from '../context/Context';
import Animation from './Animation';

const Collapse = () => {
    const listValue = useContext(listContext);


    if (!listValue) {
        return (
            console.log('not found')
        );
    }

    return (
        <Animation>


            <div className='Cll'>
                <div className='button'>
                    <button data-bs-toggle='collapse' data-bs-target='#materials' className='btn dropdown-toggle'>
                        Materials
                    </button>
                    <button data-bs-toggle='collapse' data-bs-target='#solution' className='btn dropdown-toggle'>
                        Solution
                    </button>
                </div>
                <div className='links'>
                    <div className='link1 collapse' id='materials'>
                        <ul>
                            {listValue.materialPaths.map((path, i) => (
                                <Linkk material={path} key={i} />
                            ))}
                        </ul>
                    </div>
                    <div className='link2 collapse' id='solution'>
                        <ul>
                            {listValue.solutionPaths.map((path, i) => (
                                <Linkk material={path} key={i} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Animation>
    );
};

export default Collapse;
