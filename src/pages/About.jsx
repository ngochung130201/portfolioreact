import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
const About = props => {
  const {classNameTitle,animation} = props;
  useEffect(()=>{
    Aos.init({duration:1000});
    
   },[])
 
  return (
    <>
      <div id="about" data-aos={animation} className="pt-[4rem]  bg-[#101010] w-[100%] text-[#fff] ">
        <div className="  flex flex-col justify-center items-center ">
        {classNameTitle.map((item,index)=>
        <span key={index}
        className={`${item.styleTitle}`}
        >{item.title.about}</span>
        )}
       
        
          <p className="max-w-[760px] px-[2rem] text-justify leading-[2rem]">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
