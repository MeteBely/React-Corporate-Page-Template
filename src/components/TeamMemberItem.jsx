/* eslint-disable react/prop-types */
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const TeamMemberItem = ({ member }) => {
  const [iconUp, setIconUp] = useState("");

  return (
    <div className="w-[600px] h-[220px] flex flex-row items-start pt-6 justify-center gap-6 shadow-md rounded-md bg-white px-1 hover:-translate-y-2 duration-500">
      <div>
        <img className="w-40 rounded-full" src={member.img} alt="" />
      </div>
      <div>
        <h4 className="text-[#000] text-2xl font-semibold fontMontserrat">
          {member.name}
        </h4>
        <p className="mb-4  w-[160px] underline underline-offset-[5px] fontRoboto decoration-slate-400">
          {member.position}
        </p>
        <p className="text-[15px] mb-6 fontRoboto ">{member.subTxt}</p>
        <div className="flex flex-row items-center justify-start gap-6">
          <a
            className="cursor-pointer"
            onMouseEnter={() => setIconUp("x")}
            onMouseLeave={() => setIconUp("")}
          >
            <FaXTwitter size={24} color={iconUp === "x" ? "#000" : "#6F6F6F"} />
          </a>
          <a
            className="cursor-pointer"
            onMouseEnter={() => setIconUp("linkedin")}
            onMouseLeave={() => setIconUp("")}
          >
            <FaLinkedin
              size={24}
              color={iconUp === "linkedin" ? "#0B65C2" : "#6F6F6F"}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberItem;
