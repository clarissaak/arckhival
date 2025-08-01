import './styles/About.css';
import ck from '../assets/ck.jpeg';

const About = () => {
    return (
    <div className='aboutContainer'>
      <img src = {ck} className='ck' alt='ck'/>
      <div className="text">
        <h1>hello! i'm clarissa</h1>
        <p>I’m a computer science graduate from Georgia Tech. Although I have a formal education in computer science, 
          my concentrations lie in People and Media.  Meaning, I study computer science to design and implement interfaces 
          while treating the user as the central component. <br /> <br />
          I'm passionate about learning and creating software that makes an improvement in other people’s lives. 
          Please feel free to explore my work and contact me if you have any questions or concerns!</p>
        <div className='imgContainer'>
          <a href='mailto:clarissakristanto@gmail.com'>
            <div className="emailContainer"/>
          </a>
          <a href='https://linkedin.com/in/clarissa-kristanto/' target='_blank'>
            <div className="linkedinContainer"/>
          </a>
          <a href='https://github.com/clarissaak' target='_blank'>
            <div className="githubContainer"/>
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;