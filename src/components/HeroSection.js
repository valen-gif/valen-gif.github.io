import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import background1 from "../assets/Background1.mp3";
import { Link } from 'react-router-dom';


export default function HeroSection() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20" id="home">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            DreamLoft: Your sounds of<span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">{" "}relaxation</span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Immerse yourself in high-quality audio backgrounds for ultimate relaxation and mindfulness. Find peace with soothing meditation experience with the App.
        </p>
        <div className="flex justify-center my-10">
        <Link to="/login" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>Try Now</Link>
        <a href="https://github.com/valen-gif/DreamLoft" className="py-3 px-4 mx-3 rounded-md border">Github</a>
        </div>
        <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4" style={{ height: "600px"}}>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 h-100vh" style={{ height: "600px"}}>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>
    </div>
  )
}
