import './styles/Work.css';
import weddingVideo from '../assets/weddingapp.mp4';

const Work = () => {
    return (
    <div className="workContainer">
        <div className='workIntro'>
            <h1>the ar<span className="initials">ck</span>hive</h1>
            <p>includes a few examples of my work, displaying moments 
              where I had fun creating and designing by myself or with others!</p>
        </div>
        <div className='project'>
          <div className='vidContainer'>
            <video autoPlay muted controls playsInline>
                <source src={weddingVideo} type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
          </div>
          <div className='text'>
            <div className='header'>
              <h1>S & R</h1>
              <h2>2025</h2>
            </div>
            <p>is a website developed for my brother's wedding, using Google Cloud and Figma.
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
            <video autoPlay muted controls playsInline>
                <source src={weddingVideo} type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
          </div>
        </div>
    </div>
  );
}
export default Work;