
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons'
import React,{useState,useEffect} from "react";
import Header from "../components/Header";
import Section from "../components/Section/Section";


import "./home.scss";
const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 200) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);
  const goToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
    }
  return (
    <>
      <div id="" className="  w-[100%]  z-[1000] text-[#ffff]">
        <div className="  z-[9999] mb-5  fixed top-0  w-[100%]">
          <Header />
        </div>
        <div className="absolute w-[100%] top-0 z-[90] mt-[5rem]">
          <Section />
        </div>
       
      </div>
      {showTopBtn && (
       <button onClick={goToTop} className='fixed right-[15px] text-[#fff] bottom-[20px] w-[50px] h-[50px] p-[8px] rounded-[50%] bg-[#187682] z-[1000] '>
       <FontAwesomeIcon icon={faArrowCircleUp} />
       </button>
      )}
    </>
  );
};

export default Home;
