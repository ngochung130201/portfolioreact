import React from "react";
import { html, react, js,mooge,native, css,tailwindcss,sql,node,sass,figma,bootstrap,mysql,c,flutter,firebase, asp, cshap} from "../assets";
const Skill = (props) => {
  const { classNameTitle } = props;
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
        name: "ASP MVC 5",
        avatar: asp,
      },
      {
        name: "Firebase",
        avatar: firebase,
      },
      {
        name: "Figma",
        avatar: figma,
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
      <div id="skill"className=" pt-[4rem] bg-[#101010] w-[100%] text-[#fff] ">
        <div className="  flex flex-col justify-center items-center ">
          {classNameTitle.map((item, index) => (
            <span key={index} className={`${item.styleTitle}`}>
              {item.title.skill}
            </span>
          ))}
        <div className="max-w-[600px] ml-[2rem]" >
        <span className=" font-[500] mb-[1.5rem]">USING NOW:</span>
          <ul className="grid lg:grid-cols-5  md:auto-cols-max ">
            {skill.map((item, index) => (
              <>
                {item.usingnow.map((item, index)=>
                <>
                   <li   className="flex justify-center mb-[1rem] items-center mr-[2rem]">
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

        <div className=" mt-[2.5rem] flex flex-col justify-center items-center ">
         <div className="max-w-[600px] ml-[2rem]" >
         <span className="font-[500]   mb-[1.5rem]">LEARNING:</span>
          <ul className="grid lg:grid-cols-5  md:auto-cols-max">
            {skill.map((item, index) => (
              <>
                {item.learing.map((item, index)=>
                <>
                   <li key={index} className="flex justify-center mb-[1rem] items-center mr-[2rem] ">
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
