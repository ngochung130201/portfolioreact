import React,{useEffect, useRef} from "react";
import emailjs from '@emailjs/browser';
import "aos/dist/aos.css";
import Aos from "aos";
const Contact = (props) => {
  const { classNameTitle, animation} = props;
  useEffect(()=>{
    Aos.init({duration:1500});
    Aos.refresh();
   },[])
  const form = useRef();
  const hanldeSubmit = (e) => {
   
    e.preventDefault();
    emailjs.sendForm("service_2xucow4", "template_ks3ltoe", form.current, "NUJ2-_U_eDL9lS633").then(
      (result) => {
        alert("Gửi mail thành công");
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }
  return (
    <>
      <div id="contact" data-aos={animation} className="pt-[4rem] bg-[#101010]  pb-[3rem] w-[100%] text-[#fff]  ">
        <div className="  flex flex-col justify-center items-center ">
          {classNameTitle.map((item, index) => (
            <span key={index} className={`${item.styleTitle}`}>
              {item.title.contact}
            </span>
          ))}
          <div className="w-[70%]">
            <span className="text-center block mb-[2rem]">
              Send me a message
            </span>
            <form action="" ref={form} className="flex  flex-col  " onSubmit={hanldeSubmit}>
              <input
                className=" mb-[1rem] w-[100%]     h-[2.5rem] px-[1rem]  text-[#f3f4f6] rounded-[4px] bg-[#101010] border border-solid border-[#6b7280]
                focus:border-[#1876B2]
                "
                type="text"
                name="name"
                id="name"
                placeholder="name"
              />

              <input
                className=" h-[2.5rem] w-[100%]
                 mb-[1rem] px-[1rem] text-[#f3f4f6] 
                 rounded-[4px] bg-[#101010] border
                  border-solid border-[#6b7280] focus:border-[#1876B2]"
                type="text"
                name="email"
                id="email"
                placeholder="email"
              />


              <textarea
                className=" h-[10rem]  w-[100%] px-[1rem] text-[#f3f4f6] rounded-[4px] bg-[#101010] border border-solid border-[#6b7280]
                focus:border-[#1876B2]"
                type="text"
                name="message"
                id="message"
                placeholder="message"
              />
              <input
                className="bg-[#1876B2] cursor-pointer w-[100%] h-[42px]  rounded-[4px] mt-[1rem] items-center text-center"
                type="submit"
                value="Send message"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
