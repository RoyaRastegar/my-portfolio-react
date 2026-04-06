import porofile from '../../assets/me.jpg';
import './About.css';

export const skills = [
  { name: 'React.js', width: '80%' },
  { name: 'TypeScript', width: '60%' },
  { name: 'Next.js', width: '45%' },
  { name: 'Tailwind', width: '55%' },
  { name: 'Redux', width: '50%' },
];
export const experience = [
  { title: 'YEARS OF EXPERIENCE', value: '6+' },
  { title: 'PROJECTS COMPLETED', value: '10+' },
  { title: 'HAPPY CLIENTS', value: '5+' },
];
const About: React.FC = () => {
  return (
    <div id='About' className='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <hr />
      </div>
      <div className='about-sections'>
        <div className='section-left'>
          <img src={porofile} alt='Profile' />
        </div>
        <div className='section-right'>
          <div className='about-para'>
            <p>
              I&apos;m an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career,I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only ferlected in my
              extensive experince but also in the enthusiasm and dedication i
              bring to each project.
            </p>
          </div>
          <div className='about-skills'>
            {skills.map((item) => (
              <div className='about-skill'>
                <p>{item.name}</p>
                <hr style={{ width: item.width }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='about-achievements'>
        {experience.map((item) => (
          <div className='about-achievement'>
            <h1>{item.value}</h1>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
