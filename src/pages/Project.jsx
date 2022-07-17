import React from 'react'
import Tabs from '../components/Tab/Tabs';
import {data} from '../components/Tab/data'
const Project = (props) => {
    const {classNameTitle} = props;
  return (
    <>
    <div id='project' className="pt-[4rem] bg-[#101010] px-[5rem] w-[100%] text-[#fff] ">
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