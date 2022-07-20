import React, { useEffect } from 'react'
import Tabs from '../components/Tab/Tabs';
import {data} from '../components/Tab/data'
import "aos/dist/aos.css";
import Aos from 'aos';
const Project = (props) => {
    const {classNameTitle,animation} = props;
    useEffect(()=>{
      Aos.init({duration:1500});
     
     },[])
  return (
    <>
    <div id='project' data-aos={animation} className="pt-[4rem] bg-[#101010] px-[5rem] w-[100%] text-[#fff] ">
      <div className="  flex flex-col justify-center items-center ">
      {classNameTitle.map((item,index)=>
      <span key={index}
      className={`${item.styleTitle}`}
      >{item.title.project}</span>
      )}
       <Tabs  data={data}/>
      </div>
    </div>
  </>
  )
}

export default Project