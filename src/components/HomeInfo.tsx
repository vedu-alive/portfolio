import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
type Props = {
  currentStage: number;
};

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-md sm:text-xl text-center ">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn ">
      {btnText}
      <img src={arrow} alt="icon" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <div className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi I'm <span className="font-semibold">Vedansh</span>
      <br />A Software Developer from India
    </div>
  ),
  2: (
    <InfoBox
      text={
        "Worked With many companies and picked up many skills along the way"
      }
      link={"/about"}
      btnText={"Learn more"}
    />
  ),
  3: (
    <InfoBox
      text={
        "Leading a team of developers and designers to create amazing products"
      }
      link={"/projects"}
      btnText={"Visit My Portfolio"}
    />
  ),
  4: (
    <InfoBox
      text={
        "Need a project done or looking for a developer to join your team? Let's talk!"
      }
      link={"/contact"}
      btnText={"Let's talk"}
    />
  ),
};

const HomeInfo = ({ currentStage }: Props) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
