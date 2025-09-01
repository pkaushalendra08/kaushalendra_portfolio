import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profile from '../../assets/profile.jpg'

const About = () => {
    return (
        <section
            id='about'
            className=' py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-12 lg:mt-16'
           
        >
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="md:w-[85%] text-center md:text-left mt-8 md:mt-0">
                    <h1 className="text-xl sm:text-3xl md:text-3xl font-bold text-white mb-2 leading-tight">
                        Hello, I am
                    </h1>
                    <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight whitespace-nowrap">
                        Kaushalendra Pratap
                    </h2>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white leading-tight">
                        I am a{" "}
                        <span className="text-black font-serif pl-1  whitespace-nowrap">
                            <Typewriter
                                words={["WEB DEVELOPER", "WEB DESIGNER", "FRONTEND DEVELOPER", "FULL STACK DEVELOPER",]}
                                loop={false}
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h3>

                    <p className='text-sm sm:text-base md:text-base text-gray-400 mb-10 mt-8 leading-relaxed max-w-[90%] sm:max-w-[100%] md:max-w-[36rem] lg:max-w-[40rem] mx-auto px-4'>
                        I’m a passionate Computer Science Engineering student with hands-on experience in building full-stack web applications using the MERN stack. I specialize in crafting responsive and dynamic user interfaces with React and its modern libraries. With a strong foundation in web development, I enjoy turning complex problems into clean, scalable code. I’m constantly exploring new technologies and best practices to build impactful digital experiences. Currently seeking opportunities to apply my skills in real-world projects and grow as a full-stack developer.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1eJmYXeb0xxY-g5hzbYwPgu-1uT9gRYL8/view?usp=drivesdk"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec'
                        }}>
                        RESUME
                    </a>
                </div>
                <div className=' md:w-1/2 flex justify-center md:justify-end mt-10 md:ml-8 md:mt-4'>
                    <Tilt
                        className='w-48 h-48 sm:w-64 sm:h-64 md:w-[22rem] md:h-[22rem] border-4 bg-[#224b89]-700 rounded-full'
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                    >
                        <img src={profile} alt="Kaushalendra Pratap"
                            className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] '
                        />
                    </Tilt>
                </div>
            </div>
        </section>
    );
};

export default About;
