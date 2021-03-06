import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub ,faInstagram} from "@fortawesome/free-brands-svg-icons";
import '../../App.scss'
const Contact = () => {
  return (
    <div>
      <ul className="flex items-center ">
        <li>
          <a href="/" className="px-[1.2rem] py-[1rem]   border-[#1876B2]  hover:bg-[#1876B2] transition-all  border-[1px] ml-6 rounded-[50%]">
            <FontAwesomeIcon icon={faFacebook}  className='text-[20px]'/>
          </a>
        </li>
        <li>
          <a href="/" className="px-[1.2rem] py-[1rem]   border-[#1876B2] hover:bg-[#1876B2] transition-all  border-[1px] ml-6 rounded-[50%]">
            <FontAwesomeIcon icon={faGithub} className='text-[20px] text-center'  />
          </a>
        </li>
        <li>
          <a href="/" className="px-[1.2rem] py-[1rem]   border-[#1876B2] hover:bg-[#1876B2] transition-all  border-[1px] ml-6 rounded-[50%]">
            <FontAwesomeIcon icon={faInstagram} className='text-[20px] text-center'  />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
