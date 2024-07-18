
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
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaGithub/>
        <FaInstagram/>
        <FaLinkedin/>



    </div>
   </nav>
  );
}

export default Navbar