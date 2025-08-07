import React, { useEffect, useRef } from 'react';
import './styles/Home.css';

const Home = () => {
    const titleRef = useRef(null);

    useEffect(() => {
      // typewriter effect for about
        let name = "hello!";
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
    <div className="homeContainer">
        <div className='intro'>
            <h1>ar<span className="initials">ck</span>hival</h1>
            <p>is an archive of all of my previous works as a Computer Science student.
                Arckhival primarily showcases my experience with Figma, Computer Graphics, and UI Software.</p>
        </div>
        <div className='ck'>
          <img src={require('../assets/ck1.jpeg')} className='img' alt='img'/>
          <div className='text'>
            <h1 className='title' ref={titleRef}>hello!</h1>
            <p>I'm <span className="bold">Clarissa Kristanto</span> a recent graduate from Georgia Tech with
            a bachelor's degree in Computer Science.</p>
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
    </div>
  );
}
export default Home;