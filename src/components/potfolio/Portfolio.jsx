import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/IMG1.png';
import IMG2 from '../../assets/IMG2.png';
import IMG3 from '../../assets/IMG3.png';
import IMG4 from '../../assets/IMG4.png';
import IMG5 from '../../assets/IMG5.png';
import IMG6 from '../../assets/IMG6.png';

const data =[
  {
    id: 1,
    image: IMG1,
    title: 'MERN FRONTEND',
    github: 'https://github.com/Shakti-7093/client.github.io',
    demo:'https://client-github-io.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'PARRALLEX',
    github: 'https://github.com/Shakti-7093/PARRALLEX',
    demo:'https://shakti-7093.github.io/PARRALLEX/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'QR CODE GENERATOR',
    github: 'https://github.com/Shakti-7093/QR-code-generator.github.io',
    demo:'https://shakti-7093.github.io/QR-code-generator.github.io/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Bubble Game',
    github: 'https://github.com/Shakti-7093/Bubble-Game',
    demo:'https://shakti-7093.github.io/Bubble-Game'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Stopwatch',
    github: 'https://github.com/Shakti-7093/Stopwatch.github.io',
    demo:'https://shakti-7093.github.io/Stopwatch.github.io'
  },
  
  {
    id: 6,
    image: IMG6,
    title: 'My First Multipages Website',
    github: 'https://github.com/Shakti-7093/Shakti-7093.github.io',
    demo:'https://shakti-7093.github.io'
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Some Demo Projects</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio