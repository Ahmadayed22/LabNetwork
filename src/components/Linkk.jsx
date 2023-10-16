import React from 'react';
import '../componentssass/link.css';

const Linkk = ({ material }) => {
    let urlParts = material.split('/')
    const fileName = urlParts[urlParts.length - 1]
    let fileNameParts = fileName.split('.')[0] + "." + fileName.split('.')[2]

    return (
        <li>
            <a className='Link_a' href={material} download={fileNameParts}>{fileNameParts}</a>
        </li>
    );
}

export default Linkk;
