import { useState } from "react";
import "./CaseStudies.css";

const accounts = [
  {
    id: "fatima-farms",
    name: "Fatima Farms",
    category: "Destination Branding",
    location: "Guimaras",
    duration: "3-Month Engagement",
    cover: "/images/fatima-farms.JPG",
    overview:
      "A destination in Guimaras bringing together nature, recreation, accommodation, and faith-centered experiences.",
    objective:
      "Strengthen Fatima Farms' digital identity by presenting it as more than a property: a destination where visitors can explore, experience, and reflect.",
    strategyTitle: "From Property Showcase to Destination Experience",
    strategySummary:
      "The content strategy communicated three dimensions of the destination: Explore, Experience, and Reflect.",
    stages: [
      {
        month: "MONTH 01",
        title: "Establish the Destination",
        description:
          "Introduce the property, its amenities, and the experiences visitors can enjoy.",
      },
      {
        month: "MONTH 02",
        title: "Build Experience & Connection",
        description:
          "Make the destination more relatable through experience-led content.",
      },
      {
        month: "MONTH 03",
        title: "Deepen Meaning & Identity",
        description:
          "Strengthen faith, community, and emotional storytelling.",
      },
    ],
    contributions: [
      "Developed content calendars and creative direction.",
      "Created destination-focused content and storytelling.",
      "Coordinated content production and shoots.",
      "Covered faith-based events and community celebrations.",
      "Developed emotional and community-centered Reel concepts.",
    ],
    platforms: [
      {
        name: "Facebook",
        metrics: [
          ["98,678", "Viewers"],
          ["347,170", "Views"],
          ["21,161", "Page Visits"],
          ["+634", "New Followers"],
          ["214", "Message Conversations"],
          ["3,629", "Link Clicks"],
        ],
      },
    ],
    performance:
      "The three-month campaign increased digital visibility, audience growth, and customer interest, generating direct inquiries and engagement even during the traditionally slow ghost months.",
    bestContent: [
      {
        number: "01",
        type: "video",
        video: "/video/fatima-1.mp4",
        views: "74,895",
        audience: "32,573",
        interactions: "826",
      },
      {
        number: "02",
        type: "image",
        image: "/images/fatima-2.png",
        views: "10,005",
        audience: "4,871",
        interactions: "128",
      },
    ],
  },
  {
    id: "eunisha-cafe",
    name: "Eunisha Cafe",
    category: "Brand Identity & Social Media",
    location: "Jaro, Iloilo",
    duration: "3-Month Engagement",
    cover: "/images/eunisha-cafe.JPG",
    overview:
      "A neighborhood café offering food, distinctive beverages, and spaces for dining, working, studying, and gathering.",
    objective:
      'Strengthen Eunisha Cafe’s digital brand identity and awareness by positioning it as “A Place to Be” through cohesive, experience-led, relatable, and locally resonant social media content.',
    strategyTitle: "From Café Promotion to Everyday Café Experience",
    strategySummary:
      "The content strategy centered on three dimensions of the Eunisha experience: Crave, Connect, and Stay.",
    stages: [
      {
        month: "MONTH 01",
        title: "Establish Brand Identity",
        description:
          "Introduce Eunisha's identity, offerings, and distinctive café experience through consistent visual communication and brand messaging.",
      },
      {
        month: "MONTH 02",
        title: "Build Experience & Connection",
        description:
          "Highlight relatable café moments, product discoveries, co-working, and social interactions.",
      },
      {
        month: "MONTH 03",
        title: "Strengthen Recognition & Relevance",
        description:
          "Reinforce the brand through consistent storytelling and locally relatable customer experiences.",
      },
    ],
    contributions: [
      "Developed and implemented brand positioning and social media direction.",
      "Developed content calendars and creative direction.",
      "Created experience-led, product-focused, and relatable content.",
      "Directed content production and coordinated shoot requirements.",
      "Developed cohesive storytelling across Facebook and Instagram.",
    ],
    platforms: [
      {
        name: "Facebook",
        metrics: [
          ["28,569", "Viewers"],
          ["135,735", "Views"],
          ["14,814", "Page Visits"],
          ["+174", "New Followers"],
          ["259", "Link Clicks"],
          ["5,638", "Total Followers"],
        ],
      },
      {
        name: "Instagram",
        metrics: [
          ["51,891", "Accounts Reached"],
          ["162,326", "Views"],
          ["6,716", "Page Visits"],
          ["+111", "New Followers"],
          ["1,210", "Total Followers"],
        ],
      },
    ],
    performance:
      "The three-month engagement strengthened Eunisha Cafe's digital presence through consistent brand storytelling, increased visibility, and content that highlighted the café as a place to visit, connect, and stay.",
    bestContent: [
      {
        number: "01",
        type: "image",
        image: "/images/eunisha-1.png",
        views: "3,560",
        audience: "1,290",
        interactions: "42",
        audienceLabel: "Reach",
      },
      {
        number: "02",
        type: "video",
        video: "/video/eunisha-2.mp4",
        views: "2,717",
        audience: "1,639",
        interactions: "43",
        audienceLabel: "Reach",
      },
    ],
  },
];

function SectionLabel({ children }) {
  return <span className="cs-label">{children}</span>;
}

/* VIDEO WITH SOUND TOGGLE */
function VideoBestContent({ src, title }) {
  const [muted, setMuted] = useState(true);

  return (
    <div className="cs-video-wrapper">
      <video
        src={src}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="metadata"
        aria-label={title}
      />

      <button
        type="button"
        className="cs-video-sound"
        onClick={() => setMuted((current) => !current)}
        aria-label={muted ? "Turn sound on" : "Turn sound off"}
      >
        {muted ? "Sound Off" : "Sound On"}
      </button>
    </div>
  );
}

function AccountIntro({ account, index }) {
  return (
    <div className="cs-intro">
      <div className="cs-image-wrap">
        <img src={account.cover} alt={`${account.name} project`} />
        <span className="cs-image-caption">
          SELECTED CLIENT / 0{index + 1}
        </span>
      </div>

      <div className="cs-intro-copy">
        <SectionLabel>
          CLIENT / {account.name.toUpperCase()}
        </SectionLabel>

        <h3>{account.name}</h3>

        <div className="cs-meta">
          <span>{account.category}</span>
          <span>{account.location}</span>
          <span>{account.duration}</span>
        </div>

        <p className="cs-overview">{account.overview}</p>

        <div className="cs-objective">
          <SectionLabel>THE OBJECTIVE</SectionLabel>
          <p>{account.objective}</p>
        </div>
      </div>
    </div>
  );
}

function StrategySection({ account }) {
  return (
    <section className="cs-content-section">
      <div className="cs-section-heading">
        <SectionLabel>01 / STRATEGY</SectionLabel>
        <h4>{account.strategyTitle}</h4>
        <p>{account.strategySummary}</p>
      </div>

      <div className="cs-stage-grid">
        {account.stages.map((stage, index) => (
          <article className="cs-stage" key={stage.month}>
            <div className="cs-stage-top">
              <span>0{index + 1}</span>
              <SectionLabel>{stage.month}</SectionLabel>
            </div>

            <h5>{stage.title}</h5>
            <p>{stage.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContributionsSection({ items }) {
  return (
    <section className="cs-content-section">
      <div className="cs-section-heading">
        <SectionLabel>02 / MY ROLE</SectionLabel>
        <h4>What I Worked On</h4>
        <p>
          The responsibilities and creative work I handled throughout
          the engagement.
        </p>
      </div>

      <div className="cs-contributions">
        {items.map((item, index) => (
          <div className="cs-contribution" key={item}>
            <span>0{index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResultsSection({ account }) {
  return (
    <section className="cs-content-section">
      <div className="cs-section-heading">
        <SectionLabel>03 / PERFORMANCE</SectionLabel>
        <h4>Results & Reach</h4>
        <p>
          Reported social media performance during the three-month
          engagement.
        </p>
      </div>

      <div className="cs-results">
        {account.platforms.map((platform) => (
          <div className="cs-platform" key={platform.name}>
            <div className="cs-platform-heading">
              <h5>{platform.name}</h5>
              <SectionLabel>PLATFORM RESULTS</SectionLabel>
            </div>

            <div className="cs-metrics">
              {platform.metrics.map(([value, label]) => (
                <div className="cs-metric" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {account.performance && (
        <div className="cs-highlight">
          <SectionLabel>CAMPAIGN HIGHLIGHT</SectionLabel>
          <p>{account.performance}</p>
        </div>
      )}
    </section>
  );
}

function BestContentSection({ account }) {
  return (
    <section className="cs-content-section">
      <div className="cs-section-heading">
        <SectionLabel>04 / CONTENT HIGHLIGHTS</SectionLabel>
        <h4>Best Performing Content</h4>
        <p>
          A closer look at the content that generated the strongest
          performance.
        </p>
      </div>

      <div className="cs-best-grid">
        {account.bestContent.map((item) => (
          <article className="cs-best-card" key={item.number}>
            <div className="cs-best-card-heading">
              <SectionLabel>CONTENT / {item.number}</SectionLabel>
              <span className="cs-content-type">
                {item.type === "video" ? "VIDEO" : "IMAGE"}
              </span>
            </div>

            <div className="cs-best-image">
              {item.type === "video" ? (
                <VideoBestContent
                  src={item.video}
                  title={`${account.name} best performing video ${item.number}`}
                />
              ) : (
                <img
                  src={item.image}
                  alt={`${account.name} best performing content ${item.number}`}
                  loading="lazy"
                />
              )}
            </div>

            <div className="cs-best-metrics">
              <div className="cs-best-views">
                <strong>{item.views}</strong>
                <span>Views</span>
              </div>

              <div className="cs-best-details">
                <div>
                  <strong>{item.audience}</strong>
                  <span>{item.audienceLabel || "Viewers"}</span>
                </div>

                <div>
                  <strong>{item.interactions}</strong>
                  <span>Interactions</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AccountCaseStudy({ account, index }) {
  return (
    <article className="cs-account">
      <AccountIntro account={account} index={index} />

      <div className="cs-details">
        <StrategySection account={account} />
        <ContributionsSection items={account.contributions} />
        <ResultsSection account={account} />
        <BestContentSection account={account} />
      </div>
    </article>
  );
}

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("fatima-farms");

  const filters = [
    { id: "fatima-farms", label: "Fatima Farms" },
    { id: "eunisha-cafe", label: "Eunisha Cafe" },
  ];

  const filteredAccounts = accounts.filter(
    (account) => account.id === activeFilter
  );

  return (
    <section id="case-studies" className="section cs-section">
      <div className="container">
        <header className="cs-header">
          <div>
            <SectionLabel>02 — CASE STUDIES</SectionLabel>
            <h2>Accounts & Strategies</h2>
          </div>

          <p>SELECTED CLIENT WORK</p>
        </header>

        <div className="cs-filter-row">
          <div className="cs-filters" aria-label="Filter accounts">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={activeFilter === filter.id ? "active" : ""}
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={activeFilter === filter.id}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="cs-account-list">
          {filteredAccounts.map((account) => (
            <AccountCaseStudy
              key={account.id}
              account={account}
              index={accounts.findIndex(
                (item) => item.id === account.id
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}