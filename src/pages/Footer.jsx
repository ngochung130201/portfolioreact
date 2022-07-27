import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub ,faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faPhone,faEnvelope} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className='bg-[#000] flex flex-col items-center justify-center  pt-[3rem] pb-[3rem] text-[#ffff]'>
      <ul className='flex justify-center  items-center'>
        <li className='pr-[2rem] hover:text-[#1876B2] hover:transition-all hover:ease-linear hover:duration-300'><a href="/">
          <FontAwesomeIcon className='text-[2rem]' icon={faFacebook}/>
          </a></li>
        <li className='pr-[2rem] hover:text-[#1876B2] hover:transition-all hover:ease-linear hover:duration-300'><a href="/">
        <FontAwesomeIcon  className='text-[2rem]' icon={faGithub}/>
          </a></li>
        <li className='pr-[2rem] hover:text-[#1876B2] hover:transition-all hover:ease-linear hover:duration-300'><a href="/">
        <FontAwesomeIcon   className='text-[2rem]'icon={faInstagram}/>
          </a></li>    
      </ul>
      <ul className='mt-[1rem] '>
      <li className='pr-[2rem]  hover:translate-x-1 hover:text-[#1876B2]  hover:transition-all hover:ease-linear hover:duration-300'><a href="/">
        <FontAwesomeIcon  icon={faEnvelope}/>
        <span className='pl-[0.5rem] '>hung.hn.61cntt@ntu.edu</span>
          </a></li>
          <li className='pr-[2rem] hover:translate-x-1 hover:text-[#1876B2] hover:transition-all hover:ease-linear hover:duration-300'><a href="/">
        <FontAwesomeIcon icon={faPhone}/>
        <span className='pl-[0.5rem] '>034237754</span>
          </a></li>
      </ul>
    
    </footer>
  )
}

export default Footer