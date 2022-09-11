import html from '../assets/html5.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import nodejs from '../assets/nodeJs.png';
import angular from '../assets/Angular8.png';
import c from '../assets/c.png';
import netbeans from '../assets/netBeans.png';
import github from '../assets/github.png';
import sql from '../assets/PostgreSql.png';
const Skills=()=>{
    return(
        <>
        <div className="skills">
            <h3>Skills</h3>
            <div className="skillsIcons">
              <div className="icon">
                <img src={html}></img>
                <p>HTML </p>
              </div>
              <div className="icon">
                <img src={css} className="css"></img>
                <p>CSS </p>
              </div> 
              <div className="icon">
                <img src={js}></img>
                <p>JAVASCRIPT</p>
              </div> 
              <div className="icon">
                <img src={react} className="react"></img>
                <p>REACT</p>
              </div> 
              <div className="icon">
                <img src={nodejs} className="nodejs"></img>
                <p>NODE JS</p>
              </div> 
              <div className="icon">
                <img src={angular}></img>
                <p>ANGULAR8</p>
              </div> 
              <div className="icon">
                <img src={c}></img>
                <p>C#</p>
              </div>
              <div className="icon">
                <img src={netbeans} className="netbeans"></img>
                <p>NET BEANS</p>
              </div>
              <div className="icon">
                <img src={github}></img>
                <p>GITHUB</p>
              </div>
              <div className="icon">
                <img src={sql}></img>
                <p>SQL</p>
              </div>
                
            </div>
        </div>
        </>
    )
}
export default Skills;
