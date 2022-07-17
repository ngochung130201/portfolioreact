import React from "react";
import { react, html, css, js,music,food,tailwindcss } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink} from "@fortawesome/free-solid-svg-icons";
const skillIcon = [
  {
    project1: {
      name: "Food",
      url: food,
      skill: [html, css, js],
    },
    project2: {
      name: "Music",
      url: music,
      skill: [react,tailwindcss],
    },
  
  },
];
const WebProject = () => {
  return (
    <>
      <div className='grid mt-[3rem]  xl:grid-cols-3 gap-[20px] md: auto-cols-max '>
       <div className='item'>
       {skillIcon.map((item, index) => (
          <div className="text-center">
            <img
              alt=""
              key={index}
              src={item.project1.url}
              className="w-[400px] mt-[1rem]"
            />
            <span key={index}>{item.project1.name}</span>
            <ul className="flex justify-center items-center">
              {item.project1.skill.map((item, index) => (
                <li>
                  <a href="/">
                    <img alt="" key={index} src={item} className="w-[30px]" />
                  </a>
                </li>
              ))}
            </ul>
            <div className='mt-[1rem]'>     
                <a href='https://comforting-fenglisu-26f84a.netlify.app/'  className='mr-[1rem] rounded-[2px] bg-[#1b222b] px-[1rem] py-[0.5rem] '>
                  <FontAwesomeIcon  className='mr-[0.3rem]' icon={faExternalLink}/>
                  Live Demo
                </a>
                <a href='/' className='bg-[#1876B2] rounded-[2px] px-[1rem] py-[0.5rem]'>
               <FontAwesomeIcon className='mr-[0.2rem]' icon={faGithub}/>
               View Github
                </a>
              
            </div>
          </div>
        ))}
       </div>
       <div className='item '>
       {skillIcon.map((item, index) => (
          <div className="text-center">
            <img
              alt=""
              key={index}
              src={item.project2.url}
              className="max-w-[400px] mt-[1rem]"
            />
            <span key={index}>{item.project2.name}</span>
            <ul className="flex justify-center items-center">
              {item.project2.skill.map((item, index) => (
                <li>
                  <a href="/">
                    <img alt="" key={index} src={item} className="w-[30px]" />
                  </a>
                </li>
              ))}
            </ul>
            <div className='mt-[1rem]'>     
                <a href='https://nh-music.web.app/'  className='mr-[1rem] rounded-[2px] bg-[#1b222b] px-[1rem] py-[0.5rem]'>
                <FontAwesomeIcon  className='mr-[0.3rem]' icon={faExternalLink}/>
                  Live Demo
                </a>
                <a href='/' className='bg-[#1876B2] rounded-[2px] px-[1rem] py-[0.5rem]'>
               <FontAwesomeIcon className='mr-[0.2rem]' icon={faGithub}/>
               View Github
                </a>
              
            </div>
          </div>
        ))}
       </div>
  
      </div>
    </>
  );
};

export default WebProject;
