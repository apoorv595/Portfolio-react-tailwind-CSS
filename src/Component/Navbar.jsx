
import logo from "../assets/ag.png";
import{FaLinkedin} from "react-icons/fa";
import{FaGithub} from "react-icons/fa";
import{FaInstagram} from "react-icons/fa";


const Navbar = () => {
  return (
   
   <nav className=" mb-20 flex items-center justify-between py-6" >
  <div className='flex flex-shrink-0 items-center '>
        
    
    <img src={logo} alt="logo" className="w-12 h-15"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-10 text-2xl">
        <a href="https://github.com/apoorv595" target="_blank" rel="noopener noreferrer" className="icon" ><FaGithub/></a>
        <a href="https://www.instagram.com/apoorv_gupta_21/?hl=en" target="_blank" rel="noopener noreferrer" className="icon"><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/apoorv-gupta-1ba829227/" target="_blank" rel="noopener noreferrer" className="icon"><FaLinkedin/></a>



    </div>
   </nav>
  );
  
}

export default Navbar