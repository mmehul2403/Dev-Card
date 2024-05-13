import Skill from "./Skill";

export default function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👌" bgColor="yellow" />
      <Skill skill="Java" emoji="❤" bgColor="blue" />
      <Skill skill="HTML + CSS3" emoji="🤞" bgColor="yellow" />
      <Skill skill="Spring" emoji="👍" bgColor="pink" />
      <Skill skill="Jira" emoji="🙌" bgColor="orange" />
    </div>
  );
}
