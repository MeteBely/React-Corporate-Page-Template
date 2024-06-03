import { TeamMembers } from "../components-data/Team";
import TeamMemberItem from "./TeamMemberItem";

const Team = () => {
  return (
    <section>
      <div className="bg-[#F5F6F8] py-8">
        <div className="mb-12">
          <h2 className="text-[32px] fontMontserrat font-bold pb-4 mb-4 text-[#36517E] border-b border-gray-400 mx-auto text-center w-[220px]">
            TEAM
          </h2>
          <p className="mx-auto fontRoboto text-center w-[800px]">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="flex flex-row justify-center items-center flex-wrap gap-8 w-[1400px] m-auto">
          {TeamMembers.map((member, i) => (
            <TeamMemberItem member={member} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
