import { TeamMembers } from "../components-data/Team";
import TeamMemberItem from "./TeamMemberItem";

const Team = () => {
  return (
    <section>
      <div className="bg-[#F5F6F8] py-20 md:py-40">
        <div className="mb-10 md:mb-20 px-4">
          <h2 className="text-[32px] md:text-[52px] font-extrabold fontMontserrat pb-4 mb-4 text-[#000] border-b border-gray-400 mx-auto text-center w-full max-w-[675px]">
            MANAGEMENT TEAM
          </h2>
          <p className="mx-auto fontRoboto text-center w-full max-w-[800px]">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-8 w-full max-w-[1400px] m-auto px-4">
          {TeamMembers.map((member, index) => (
            <TeamMemberItem member={member} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
