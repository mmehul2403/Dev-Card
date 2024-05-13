export default function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
