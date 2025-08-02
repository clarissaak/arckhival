import React, { useEffect, useRef } from 'react';
import './styles/About.css';

const About = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        let name = "hello! i'm clarissa";
        let index = 0;
        let timeoutId;

        const typeWriter = () => {
            if (titleRef.current && index < name.length) {
                index++;
                let new_title = name.slice(0, index);
                titleRef.current.innerText = new_title;

                if (index < name.length) {
                    timeoutId = setTimeout(() => typeWriter(), 100);
                }
            }
        };

        if (titleRef.current) {
            titleRef.current.innerText = '';
        }

        // wait for 2 seconds before starting to type
        timeoutId = setTimeout(() => {
            typeWriter();
        }, 1000);

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);
    return (
    <div className='aboutContainer'>
      <img src = {require('../assets/ck.jpeg')} className='ck' alt='ck'/>
      <div className="text">
        <h1 className='title' ref={titleRef}>hello! i'm clarissa</h1>
        <p>I’m a computer science graduate from Georgia Tech. Although I have a formal education in computer science, 
          my concentrations lie in People and Media.  Meaning, I study computer science to design and implement interfaces 
          while treating the user as the central component. <br /> <br />
          I'm passionate about learning and creating software that makes an improvement in other people’s lives. 
          Please feel free to explore my work and contact me if you have any questions or concerns!</p>
        <div className='imgContainer'>
          <a href='mailto:clarissakristanto@gmail.com'>
            <div className="emailContainer"/>
          </a>
          <a href='https://linkedin.com/in/clarissa-kristanto/' target='_blank' rel="noreferrer">
            <div className="linkedinContainer"/>
          </a>
          <a href='https://github.com/clarissaak' target='_blank' rel="noreferrer">
            <div className="githubContainer"/>
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;