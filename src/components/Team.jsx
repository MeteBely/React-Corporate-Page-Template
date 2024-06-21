import { TeamMembers } from "../components-data/Team";
import TeamMemberItem from "./TeamMemberItem";

const Team = () => {
  return (
    <section>
      <div className="bg-[#F5F6F8] py-40">
        <div className="mb-20">
          <h2 className="text-[52px] font-extrabold fontMontserrat pb-4 mb-4 text-[#000] border-b border-gray-400 mx-auto text-center w-[675px]">
            MANAGEMENT TEAM
          </h2>
          <p className="mx-auto fontRoboto text-center w-[800px]">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="flex flex-row justify-center items-center flex-wrap gap-8 w-[1400px] m-auto">
          {TeamMembers.map((member, index) => (
            <TeamMemberItem member={member} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
