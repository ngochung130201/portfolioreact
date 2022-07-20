import React,{useState} from "react";
import { logo } from "../assets/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub ,faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faPhone,faEnvelope, faBars,faXmark} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [isMenu,setMenu]=useState(false)
  const hanldeMenu = () => {
    setMenu(!isMenu);
  }
  return (
    <>
     <header  className={`${isMenu ? 'block' : 'hidden'}  lg:px-[2rem] bg-[#101010] flex  justify-between items-center pt-[.5rem]  h-[100%] w-[100%] `}>
      <div className="header__logo flex flex-col justify-center items-center ">
        <a href="/" id="link" className='pr-[2rem]' >
          <img src={logo} alt="" className="w-[70px] rounded-[50%]" />
        </a>
        <div className="header__nav  ">
          <ul className=" flex flex-row  ">
            <li className=" pr-[2rem]">
              <a href="#home" className='font-[500] hover:text-[#1876B2]'  >Home</a>
            </li>
            <li className="pr-[2rem]">
              <a href="#about" className='font-[500] hover:text-[#1876B2]'>About</a>
            </li>
            <li className="pr-[2rem]">
              <a href="#skill" className='font-[500] hover:text-[#1876B2]'>Skill</a>
            </li>
            <li className="pr-[2rem]">
              <a href="#project" className='font-[500] hover:text-[#1876B2]'>Project</a>
            </li>
            <li className="pr-[2rem]">
              <a href="#contact" className='font-[500] hover:text-[#1876B2]'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
     


    </header>
    <header  className={` header2 lg:px-[2rem] bg-[#101010] flex  justify-between items-center pt-[.5rem]  h-[100%] w-[100%] `}>
      <div className="header__logo flex flex-row justify-center items-center ">
        <a href="/" id="link" className='pr-[2rem]' >
          <img src={logo} alt="" className="w-[70px] rounded-[50%]" />
        </a>
        <div className="header__nav  ">
          <ul className=" flex flex-row  ">
            <li className=" pr-[2rem]">
              <a href="#home" className='font-[500] hover:text-[#1876B2]'  >Home</a>
            </li>
            <li className="pr-[2rem]">
              <a href="#about" className='font-[500] hover:text-[#1876B2]'>About</a>
            </li>
            <li className="pr-[2rem]">
              <a href="#skill" className='font-[500] hover:text-[#1876B2]'>Skill</a>
            </li>
            <li className="pr-[2rem]">
              <a href="#project" className='font-[500] hover:text-[#1876B2]'>Project</a>
            </li>
            <li className="pr-[2rem]">
              <a href="#contact" className='font-[500] hover:text-[#1876B2]'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
     


    </header>
      <div className="menu hidden">
       <button type="">
       <FontAwesomeIcon className="p-[0.6rem]" icon={isMenu ? faXmark :faBars} onClick={()=>hanldeMenu()}/>
       </button>
      </div>
      </>
  );
};

export default Header;
