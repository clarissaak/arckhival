import './styles/Work.css';

const Work = () => {
    return (
    <div className="workContainer">
        <div className='workIntro'>
          <div className='workHeader'>
            <h1>the ar<span className="initials">ck</span>hive</h1>
            <img src={require('../assets/stars.png')} className='stars' alt='stars'/>
          </div>
            <p>includes a few examples of my work, displaying moments 
              where I had fun creating and designing by myself or with others!</p>
        </div>
        <div className='project'>
          <div className='vidContainer'>
            <video className='wedding' autoPlay loop muted controls playsInline>
                <source src={require('../assets/weddingapp.mp4')} type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
          </div>
          <div className='text'>
            <div className='header'>
              <h1>S & R</h1>
              <h2>2025</h2>
            </div>
            <p><span style={{fontStyle:'italic'}}>S & R</span> is a website developed for my brother's wedding, which uses Google Cloud and Figma.
              The site features a clean design, intuitive navigation, and interactive elements 
              that enhance user engagement. Users are also able to view information about the event, 
              including the reception menu, seating chart, and the various activities that will take place during the day.
              One of the main functions of this website is the ability to complete missions and compete 
              with other guests on the leaderboard in order to win prizes.
            </p>
          </div>
        </div>
        <div className='project'>
          <div className='text'>
            <div className='header'>
              <h1>RSVP Text Reader</h1>
              <h2>2024</h2>
            </div>
            <p>Using Python and Kivy, I created a Rapid Serial Visual Presentation (RSVP) text reader. 
              The text reader focuses on a specific letter to center the word, and with the app you can adjust
               the font, font size, and words per minute. Additionally, the app has the following functionalities: 
               speed up, slow down, jump back, jump forward, increase font size, decrease font size, and play/pause 
               playback. These functions can be done using the keyboard or with mouse gestures.
            </p>
          </div>
          <div className='vidContainer'>
            <video className='rsvp' autoPlay loop muted controls playsInline>
                <source src={require('../assets/rsvp.mp4')} type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className='project'>
          <div className='vidContainer'>
            <video className='sleep' autoPlay loop muted controls playsInline>
                <source src={require('../assets/sleep.mp4')} type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
          </div>
          <div className='text'>
            <div className='header'>
              <h1>Sleep Strikers</h1>
              <h2>2024</h2>
            </div>
            <p>Made using Figma, <span style={{fontStyle:'italic'}}>Sleep Strikers</span> is a high-fidelity 
              prototype my team and I developed for undergraduate students to use to improve their sleeping habits. 
              Our prototype employs gamification and asynchronous communication to cater to our 
              target group. During the development process, we also used Figma to perform a hierarchal task analysis 
              and create low-fidelity prototypes.
            </p>
          </div>
        </div>
        <div className='project'>
          <div className='text'>
            <div className='header'>
              <h1>Creature Generation</h1>
              <h2>2024</h2>
            </div>
            <p>This project focused on the generation of various creatures in Unity3D. The creatures I chose to create are 
              based off of <span style={{fontStyle:'italic'}}>Chiikawa</span>  characters. The meshes were made for each body part,
              some using loop subdivision to create smooth, curved surfaces. 
            </p>
          </div>
          <div className='vidContainer'>
            <img className='chiikawa' src={require('../assets/chiikawa.png')} alt='img'/>
          </div>
        </div>
        <div className='project'>
          <div className='vidContainer'>
            <img className='map' src={require('../assets/map.png')} alt='img'/>
          </div>
          <div className='text'>
            <div className='header'>
              <h1>Street Generation</h1>
              <h2>2024</h2>
            </div>
            <p> Using Unity3D and C#, individual meshes were made for 5 street types: straights, 
              turns, 4-way intersections, T-intersections, and dead ends. I also utilized Perlin noise for street texture and 
              the depth first search algorithm to ensure street connectivity. The streets were randomly generated using a public 
              seed, providing various street layouts. 
            </p>
          </div>
        </div>
        <div className='project'>
          <div className='text'>
            <div className='header'>
              <h1>Sea Railway</h1>
              <h2>2024</h2>
            </div>
            <p> With a partner, I used GLSL to recreate the sea railway scene from “Spirited Away” to express our final project theme: 
              Journey. This project utilizes techniques we have learned throughout the Computer Graphics course, including a sky sphere, the Worley noise 
              function, Phong shading models, and ray tracing.  
            </p>
          </div>
          <div className='vidContainer'>
            <video className='railway' autoPlay loop muted playsInline>
                <source src={require('../assets/final.mp4')} type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className='project'>
          <div className='vidContainer'>
            <video className='subdivision' autoPlay loop muted playsInline>
                <source src={require('../assets/subdivision.mp4')} type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
          </div>
          <div className='text'>
            <div className='header'>
              <h1>Loop Subdivision</h1>
              <h2>2024</h2>
            </div>
            <p>Loop subdivision is a method of smoothing triangle meshes. For this assignment, I had to develop my own 
              implementation of the loop subdivision algorithm in C. 
            </p>
          </div>
        </div>
    </div>
  );
}
export default Work;