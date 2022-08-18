import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { html, react, js,net,native, css,tailwindcss,sql,node,sass,figma,bootstrap,mysql,c,flutter,firebase, asp, cshap} from "../assets";
const Skill = (props) => {
  const { classNameTitle,animation} = props;
  useEffect(()=>{
    Aos.init({duration:1500});
   
   },[])
  const skill = [ {
    usingnow : [
      {
        name: "HTML",
        avatar: html,
      },
      {
        name: "CSS",
        avatar: css,
      },
      {
        name: "Javacript",
        avatar: js,
      },
      {
        name: "Tailwindcss",
        avatar: tailwindcss,
      },
      {
        name: "Bootstrap",
        avatar: bootstrap,
      },
      {
        name: "Sass",
        avatar: sass,
      },
      {
        name: "React",
        avatar: react,
      },
      {
        name: "SQL SERVER",
        avatar: sql,
      },
      {
        name: "C#",
        avatar: cshap,
      },
      {
        name: ".NET",
        avatar: net,
      },
      {
        name: "Firebase",
        avatar: firebase,
      },
     
      
    ],
    learing : [
      {
        name: "Nodejs",
        avatar: node,
      },
      {
        name: "Flutter",
        avatar: flutter,
      },
      {
        name: "My Sql",
        avatar: mysql,
      },
      {
        name: "React Native",
        avatar: native,
      },
      
      
    ],
 
   
  } 
  ];
  return (
    <>
      <div id="skill" data-aos={animation}  className=" pt-[4rem] bg-[#101010] w-[100%] text-[#fff] ">
        <div className="  flex flex-col justify-center items-center ">
          {classNameTitle.map((item, index) => (
            <span key={index} className={`${item.styleTitle}  `}>
              {item.title.skill}
            </span>
          ))}
        <div className="ml-[2rem]" >
        <span className="block font-[500] mb-[1.2rem]">USING NOW:</span>
          <ul className=" grid grid-cols-3 lg:grid-cols-6 ">
            {skill.map((item, index) => (
              <>
                {item.usingnow.map((item, index)=>
                <>
                   <li   className=" hover:translate-y-2 hover:transition-all hover:ease-in-out hover:duration-300 flex justify-center mb-[1rem] items-center mr-[2rem]">
                  <a
                    href="/"
                    className="flex flex-col justify-center  items-center "
                  >
                    <img
                      src={item.avatar}
                      className="w-[50px]"
                      key={index}
                      alt=""
                    />
                    <span key={index} className="text-center">
                      {item.name}
                    </span>
                  </a>
                </li>
                </>
                
                )}
              </>
            ))}
          </ul>
        </div>
        </div>

        <div className=" mt-[2.5rem] ml-0 flex flex-col justify-center items-center lg:ml-[-8rem] ">
         <div className="max-w-[600px] ml-[2rem]" >
         <span className="block font-[500]   mb-[1.2rem]">LEARNING:</span>
          <ul className=" grid grid-cols-3 lg:grid-cols-6">
            {skill.map((item, index) => (
              <>
                {item.learing.map((item, index)=>
                <>
                   <li key={index} className="hover:translate-y-2 hover:transition-all hover:ease-in-out hover:duration-300 flex justify-center mb-[1rem] items-center mr-[2rem] ">
                  <a
                    href="/"
                    className="flex flex-col justify-center  items-center "
                  >
                    <img
                      src={item.avatar}
                      className="w-[50px]"
                      key={index}
                      alt=""
                    />
                    <span key={index} className="text-center">
                      {item.name}
                    </span>
                  </a>
                </li>
                </>
                
                )}
              </>
            ))}
          </ul>
         </div>
        </div>
  
    
      </div>
      
    </>
  );
};

export default Skill;
