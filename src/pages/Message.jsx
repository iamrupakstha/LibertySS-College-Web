import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Message.css';
import principalImg  from '../assets/tanka-bhattarai.png';
import directorImg  from '../assets/purna.png';

import PageHeader from '../components/PageHeader';
const Message = () => {
  return (
    <div>
      <PageHeader title="Message" />

      <section className='message'>
      {/* Principal message */}
      <div className="principal-message">
        <h2>Message from Principal!</h2>
        <div className="message-card">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quam non itaque officiis molestias nam cumque. Nesciunt, voluptates placeat. Beatae, magni maiores quidem minus illum molestiae corporis quas aperiam ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati labore dolore laudantium, molestias nihil? Inventore nam facilis eaque! Eos ratione eveniet eligendi commodi. Vel molestiae et molestias non tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quidem voluptatum at ratione, excepturi aliquid autem quos dolorum molestiae voluptatem repudiandae inventore, tenetur expedita laborum doloremque reprehenderit adipisci accusamus dolor?</p>

          <div className="img">
            <img src={principalImg} alt="Founder/Principal" />
            <h3>Mr. Tanka Bhattarai</h3>
            <p>Founder/Principal</p>
          </div>
        </div>
      </div>
      {/* director message */}
      <div className="principal-message">
        <h2>Message from Director!</h2>
        <div className="message-card">
          <div className="img">
            <img src={directorImg} alt="Director" />
            <h3>Mr. Puran Prasad Bista</h3>
            <p>Director</p>
          </div>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quam non itaque officiis molestias nam cumque. Nesciunt, voluptates placeat. Beatae, magni maiores quidem minus illum molestiae corporis quas aperiam ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati labore dolore laudantium, molestias nihil? Inventore nam facilis eaque! Eos ratione eveniet eligendi commodi. Vel molestiae et molestias non tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quidem voluptatum at ratione, excepturi aliquid autem quos dolorum molestiae voluptatem repudiandae inventore, tenetur expedita laborum doloremque reprehenderit adipisci accusamus dolor?</p>

          
        </div>
      </div>
      

        
      </section>
    </div>
  )
}

export default Message