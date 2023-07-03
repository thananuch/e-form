import React from "react";
import Content from "../../components/layoutAfterLogin/Content";
import Navigation from "../../components/layoutAfterLogin/Navigation";

function Home() {
  return (
    <>
      <Content />
      <div className="flex bg-gradient-to-b from-EEF0F6 to-EFEAE1">
        <Navigation />
        <div className="flex-1 h-screen mt-10">
          <div className="w-auto ml-8 mr-2 pl-[3.625rem] pr-[3.5rem] py-[3.5rem] pt-[1.5rem] bg-[#FDFDFD] rounded-2xl">
            <h1 className="text-2xl font-semibold ">Home Page</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
