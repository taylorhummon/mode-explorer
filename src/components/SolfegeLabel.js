import "./SolfegeLabel.css";

export default function SolfegeLabel({ name, location }) {
  return (
    <text
      className={className(name, location)}
      x="0"
      y="6"
    >
      {name}
    </text>
  );
}

function className(name, location) {
  return ["solfege-label", name, location].join(" ");
}
