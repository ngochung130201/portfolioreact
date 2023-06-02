import React from "react";
import Home from "./pages/Home";
import "./App.scss";
import Bg from "./components/Bg";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import { classNameTitle } from "./components/Title/ClassNameTitle";
import Footer from "./pages/Footer";

function App() {

  return (
    <div id="home" className="App w-[100%] h-[100%]  ">
      
      <Bg />
      <Home />
      <About animation="fade-down" classNameTitle={classNameTitle} />
      <Skill  animation="fade-down" classNameTitle={classNameTitle} />
      <Project animation="fade-down" classNameTitle={classNameTitle} />
      <Contact animation="fade-down" classNameTitle={classNameTitle}/>
      <Footer/>
       <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <script>
        {`
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "107844085658031");
        chatbox.setAttribute("attribution", "install_email");
        chatbox.setAttribute("attribution_version", "biz_inbox");
        `}
      </script>
      <script>
        {`
        window.fbAsyncInit = function() {
          FB.init({
            xfbml: true,
            version: 'v17.0'
          });
        };

        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        `}
      </script>
    </div>
  );
}

export default App;
