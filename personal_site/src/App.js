import logo from './logo.svg';
// import './App.scss';
import'./App.css';
import ContactCard from './components/Contact';
import GreetCard from './components/GreetCard';
import MenuButton from './components/MenuButton';
import CollegeCard from './components/CollegeCard';
import InterestsCard from './components/InterestsCard';
import SkillBubble from './components/SkillBubble';
import ProjectCard1 from './components/ProjectCard1';
import ProjectCard2 from './components/ProjectCard2';
import ExperienceCard from './components/ExperienceCard';
import Flip from 'react-reveal/Flip';
// import Button from "react-bootstrap/Button";
const project1 = {
  "Title": "Furniture Store Website",
  "Demo": "https://comercialcasablanca.herokuapp.com/",
  "Description": "I made a landing page for my grandmother's business in El Salvador. I used the Django framework with Python to handle the backend, and used a sqlite database to store images of the products as well as emails for the newsletter. I then deployed the site using Heroku",
  "Github": "https://github.com/DanielAGC8787/casa_blanca",
  "Pic": "/images/casablanca_logo.png",
  "Color" : "#fb9d00",
  "Text_color": "black"
}
const project2 = {
  "Title": "Personal Website",
  "Demo": "",
  "Description": "Website showcasing my work, skills, and experiences made using  React JS",
  "Github": "https://github.com/DanielAGC8787/casa_blanca",
  "Pic": "/images/personal_website_pic.png",
  "Color" : "#3cb109",
  "Text_color": "black"
}
const project3 = {
  "Title": "Capstone Project",
  "Demo": "https://www.youtube.com/watch?v=BRfsnLoU1x0",
  "Description": "For the final project of a course in which I learned how to develop web apps, I chose to make an app that allows users to sign up for fitness classes at a gym. Users can also message their instructors with real time updates to the page each time they get a message.",
  "Github": "https://github.com/DanielAGC8787/finalproj",
  "Pic": "/images/capstone.png",
  "Color" : "rgb(18 151 223)",
  "Text_color": "white"
}
const project4 = {
  "Title": "Social Network",
  "Demo": "https://www.youtube.com/watch?v=S3XNQGVIPeI",
  "Description": "Also for a course I was taking, I made a web app that allows users to make, edit, and interact with posts; very similar to twitter.",
  "Github": "https://github.com/DanielAGC8787/network",
  "Pic": "/images/network.png",
  "Color" : "black",
  "Text_color": "white"
}
const experience1 = {
  "Title": "KD College Prep",
  "Position1": "Student Worker",
  "Position2": "Shift Leader",
  "Position3": "Online Learning Intern",
  "Color" : "red",
  "Text_color": "white",
  "Pic" : "/images/kd.png"
}
// import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <div className='Menu'>
        <a href='#Menu'><MenuButton title="Home"/></a>
        <a href='#about_me'><MenuButton title="About Me"/></a>
        <a href='#skills'><MenuButton title="Skills"/></a>
        <a href='#projects'><MenuButton title="Projects"/></a>
        <a href='#experience'><MenuButton title="Experience"/></a>
      </div>
      <div className='home'>
        <br/>
        <br/>
        <center>
          <div id='intro'>
            <GreetCard/>
            <ContactCard/>
          </div>
            <a href='/resume.pdf' target="_blank" rel="noopener noreferrer"><button className='resume'>See my Resume</button></a>
        </center>
      </div>
      <div id='about_me'>
        <h1 className='about_title'>About Me</h1>
        <CollegeCard/>
        <InterestsCard/>
      </div>
      <div id='skills'>
        <h1 className='skills_title'>Technical Skills and Languages</h1>
        <Flip left>
          <center>
            <div className='inner_box'>
              <ul className='skills_list'>
                <SkillBubble name="HTML" pic="/images/html.svg" back_color="orange" color="black"/>
                <SkillBubble name="Javascript" pic="/images/javascript.png" back_color="black" color="white"/>
                <SkillBubble name="CSS" pic="/images/css.svg" back_color="blue" color="white"/>
                <SkillBubble name="Python" pic="/images/python.png" back_color="red" color="white"/>
                <SkillBubble name="Django" pic="/images/django.png" back_color="#c1ffc1" color="black"/>
              </ul>
              <ul className='skills_list'>
                <SkillBubble name="Java" pic="/images/java.svg" back_color="#c0d9ff" color="black"/>
                <SkillBubble name="React" pic="/images/react.png" back_color="#18007a" color="white"/>
                <SkillBubble name="Github" pic="/images/github.png" back_color="white" color="black"/>
                <SkillBubble name="Figma" pic="/images/figma.png" back_color="#333333" color="white"/>
              </ul>
            </div>
          </center>
        </Flip>
        <br/>
        <br/>
        <br/>
      </div>
      <div id="projects">
        <h1 className='projects_title'>Projects</h1>
        <center>
          <ul className='project_row'>
            <ProjectCard1 project={project1}/>
            <ProjectCard2 project={project2}/>
          </ul>
          <ul className='project_row'>
            <ProjectCard1 project={project3}/>
            <ProjectCard2 project={project4}/>
          </ul>
        </center>
      </div>
      <div id='experience'>
        <h1 className='experience_title'>Experience</h1>
        <center>
          <ExperienceCard experience={experience1}/>
        </center>
        <br/>
        <br/>
      </div>
      <div id="footer">
        <a id="bottom_social" href='https://www.facebook.com/profile.php?id=100048257564774' target="_blank" rel="noopener noreferrer"><img className='social_main bott' src='/images/facebook.png' alt='Facebook Icon'/></a>
        <a href='https://www.linkedin.com/in/daniel-garcia-6ba890197/' target="_blank" rel="noopener noreferrer"><img className='social_main bott' src='/images/linkedIn.png' alt='LinkedIn Icon'/></a>
        <a href='https://www.instagram.com/daniel_garciacan/?hl=en' target="_blank" rel="noopener noreferrer"><img className='social_main bott' src='/images/insta.png' alt='Instagram Icon'/></a>
        <a href='https://github.com/DanielAGC8787' target="_blank" rel="noopener noreferrer"><img className='social_main bott' src='/images/github.png' alt='Github Icon'/></a>
        <a href='mailto:danielagarciac02@gmail.com' target="_blank" rel="noopener noreferrer"><img className='social_main bott' src='/images/email.png' alt='Email Icon'/></a>
        <a href='#root' className='top'>
          <button className='project_link'>
            Back to Top &#xFFEA;
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
