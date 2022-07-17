import React from "react";
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import { data } from "./data";
const Tabs = () => {
 

  return (
    <>
      <TabsComponent className=''>
        <TabList className='flex justify-around bg-[#101010] ml-[1rem] cursor-pointer  '>
          {data.map(({ heading }, i) => (
          
          <Tab className='text-center  border-b-2  hover:text-red-400'  key={i}>{heading}</Tab>
          ))}
        </TabList>
          {data.map(({ body },i) => (
          <TabPanel className=''  key={i}>{body}</TabPanel>
        )) }
        
      </TabsComponent>
    </>
  );
};

export default Tabs;
