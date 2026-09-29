export default function CoreSkills() {
  const skills = [
    "Social Media Management",
    "Content Strategy",
    "Digital Marketing",
    "Brand Development",
    "Copywriting",
    "Creative Direction",
    "Social Media Analytics",
    "Campaign Planning",
    "Client Coordination",
    "Video Production & Editing",
  ];

  return (
    <section id="skills" className="section core-skills">
      <div className="container">
        <div className="core-skills-heading reveal">
          <div className="eyebrow">03 — Core Skills</div>
        </div>

        <div className="core-skills-grid reveal">
          {skills.map((skill, index) => (
            <div className="core-skill-item" key={skill}>
              <span className="core-skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="core-skill-name">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}