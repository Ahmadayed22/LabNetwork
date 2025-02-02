
import { Link } from 'react-router-dom'
import '../PagesCass/footer.css'

import Animation from '../components/Animation'
const Footer = () => {



    return (

        <div className='footer ' >
            <Animation>
                <div className='info' >
                    <div className='info_name'>
                        <h2>Ahmad ayed obaid </h2>
                        <span>Full Stack Developer </span>
                    </div>
                    <nav>
                        <ul>

                            <li> <Link to='mailto:ahmad.ayed461@gmail.com' target='_blank'>ahmad.ayed461@gmail.com </Link> </li>
                            <li> <Link to='https://api.whatsapp.com/send?phone=9627338050' target='_blank'>+962797338050 </Link> </li>
                        </ul>
                    </nav>
                </div>
            </Animation>


            <div className='social '  >
                <Animation>
                    <h2>Follow</h2>
                    <ul>
                        <li><Link to='https://www.linkedin.com/in/ahmad-ayed-67b74a272/' target='_blank'>LinkedIn</Link></li>
                        <li><Link to='https://www.instagram.com/aboayed22/?igshid=YTQwZjQ0NmI0OA%3D%3D' target='_blank'>Instagram</Link></li>
                        <li><Link to='https://www.facebook.com/Aboayed22' target='_blank'>Facebook</Link></li>
                        <li><Link to='https://www.youtube.com/channel/UC0qVeAYvVWkL7smqknFzBBQ' target='_blank'>Youtube</Link></li>
                    </ul>

                </Animation>

            </div>


        </div>
    )
}

export default Footer
