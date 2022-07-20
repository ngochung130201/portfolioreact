import React from "react";
import { avatar} from "../../assets";
import Button from "../Button";
import Contact from "../Contact/Contact";
import "./section.scss";

const Section = () => {
  return (
    <section >
      <div className="flex lg:flex-row justify-around   items-center lg:mt-[6rem]  md:flex flex-col  ">
        <div className="">
          <h3 className="lg:text-[50px] animate-charcter ">Hi, Mình là Hưng, web developer</h3>
        </div>
          <div className=" p-2 rounded lg:w-1/3 md:w-1/2">    
           <img src={avatar} alt="" className="lg:max-w-[300px] object-cover   rounded-[50%]  img" />
          </div>
        
      </div>
     <div className=" lg:flex lg:items-start lg:justify-start flex-col lg:ml-[4rem] mt-[1rem] md:flex justify-center md:items-center ">
      <Button/>
      <Contact/>
     </div>
    </section>
    
  );
};

export default Section;
