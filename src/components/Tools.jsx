export default function Tools() {
  const tools = [
    {
      name: "Canva",
      description: "Graphic design, presentations, social media, and visual content.",
    },
    {
      name: "CapCut",
      description: "Video editing, reels, short-form content, and social media videos.",
    },
    {
      name: "DaVinci Resolve",
      description: "Video editing, color grading, visual effects, and post-production.",
    },
    {
      name: "Google Workspace",
      description: "Documents, presentations, spreadsheets, collaboration, and file management.",
    },
    {
      name: "Microsoft Office",
      description: "Documents, spreadsheets, presentations, and professional workflows.",
    },
    {
      name: "Meta Business Suite",
      description: "Social media management, scheduling, publishing, and content performance.",
    },
    
  ];

  return (
    <section id="tools" className="section tools-section">
      <div className="container">

        <div className="section-heading reveal">
          <div>
            <div className="eyebrow">02 — Tools</div>
            <h2>Tools I Work With</h2>
          </div>
        </div>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <article
              className="tool-card reveal"
              key={tool.name}
            >
              <div className="tool-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}