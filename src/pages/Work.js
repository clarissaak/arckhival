import './styles/Work.css';

const Work = () => {
    return (
    <div className="workContainer">
        <div className='intro'>
            <h1>ar<span className="italic">ck</span>hival</h1>
            <p>is an archive of all of my previous works as a student at the Georgia Institute of Technology.
                Arckhival primarily showcases my experience with Figma, Computer Graphics, and UI Software.</p>
        </div>
        <div className='ck'>
          <img src={require('../assets/ck1.jpeg')} className='img' alt='img'/>
          <div className='text'>
            <h1>hello!</h1>
            <p>I'm <span className="bold">Clarissa Kristanto</span> a recent graduate from Georgia Tech with
            a bachelor's degree in Computer Science.</p>
            <div className='imgContainer'>
                <a href='https://linkedin.com/in/clarissa-kristanto/' target='_blank'>
                    <div className="linkedinContainer"/>
                </a>
                <a href='https://github.com/clarissaak' target='_blank'>
                    <div className="githubContainer"/>
                </a>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Work;