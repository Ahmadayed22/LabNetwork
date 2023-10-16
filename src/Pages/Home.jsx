import React from 'react'
import imges from '../LoopComponents/imges'
import pargraph from '../LoopComponents/name'
import route from '../LoopComponents/route'
import Card from '../components/Card'
import '../PagesCass/home.css'
import Video from '../components/Video'
const Home = () => {
    return (
        <div className='Home  container'>
            <Video />
            <h1>Network Lab</h1>
            <div className='Images'>
                {

                    imges.map((image, i) => {
                        const Route = route[i].charAt(0).toUpperCase() + route[i].slice(1)
                        return <Card image={image} p={pargraph[i]} route={Route} />
                    }

                    )
                }
            </div>
        </div>
    )
}


export default Home