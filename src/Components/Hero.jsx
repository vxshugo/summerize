import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />

        <button type="button" onClick={() => window.open("https://youtu.be/dQw4w9WgXcQ")} className="black_btn">
          Donate
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max:md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Simplify your reading with Summize, an open-source articles summarizer that transforms lengthy articles into clear and concise summaries. <span className="orange_gradient">This site is temporarily for Malika</span> 
      </h2>
    </header>
  );
};

export default Hero;
