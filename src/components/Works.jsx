import { useRef, useState } from "react";
import { projects } from "../data/projects";

/* =========================
   VIDEO PROJECT
========================= */

function VideoProject({ project }) {
  const [muted, setMuted] = useState(true);

  const toggleSound = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setMuted((current) => !current);
  };

  return (
    <div className="video-wrapper">
      <video
        src={project.video}
        poster={project.poster}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="metadata"
        aria-label={project.alt}
      />

      <button
        type="button"
        className="video-sound"
        onClick={toggleSound}
        aria-label={muted ? "Turn sound on" : "Turn sound off"}
      >
        {muted ? "Sound Off" : "Sound On"}
      </button>
    </div>
  );
}

/* =========================
   PDF PROJECT
========================= */

function PDFProject({ project }) {
  return (
    <div className="pdf-project">
      {/* Desktop PDF preview */}
      <iframe
        src={`${project.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
        title={project.title}
        loading="lazy"
      />

      {/* Mobile cover */}
      <div className="pdf-mobile-card">
        {project.cover ? (
          <img
            src={project.cover}
            alt={project.alt}
            className="pdf-cover"
          />
        ) : (
          <div className="pdf-mobile-icon">
            PDF
          </div>
        )}

        <div className="pdf-mobile-overlay">
          <span className="eyebrow">Document</span>

          <h4>{project.title}</h4>
        </div>
      </div>

      <a
        href={project.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="pdf-view-button"
      >
        View PDF ↗
      </a>
    </div>
  );
}

/* =========================
   PROJECT CARD
========================= */

function ProjectCard({ project }) {
  return (
    <article className="carousel-project reveal visible">
      <div className="project-link">
        <div className="carousel-project-image">
          {project.video ? (
            <VideoProject project={project} />
          ) : project.pdf ? (
            <PDFProject project={project} />
          ) : (
            <img
              src={project.image}
              alt={project.alt}
              loading="lazy"
            />
          )}
        </div>

        <div className="project-meta">
          <h3>{project.title}</h3>

          <span className="eyebrow">
            {project.category} / {project.year}
          </span>
        </div>
      </div>
    </article>
  );
}

/* =========================
   CAROUSEL
========================= */

function ProjectCarousel({ title, items }) {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const amount = carouselRef.current.clientWidth * 0.75;

    carouselRef.current.scrollBy({
      left: direction * amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="works-category">
      <div className="carousel-header">
        <div className="eyebrow">{title}</div>

        <div className="carousel-controls">
          <button
            type="button"
            onClick={() => scrollCarousel(-1)}
            aria-label={`Previous ${title}`}
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scrollCarousel(1)}
            aria-label={`Next ${title}`}
          >
            →
          </button>
        </div>
      </div>

      <div className="project-carousel" ref={carouselRef}>
        {items.map((project) => (
          <ProjectCard
            key={project.id || project.title}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================
   WORKS
========================= */

export default function Works() {
  const [filter, setFilter] = useState("all");

  const filters = [
    {
      key: "all",
      label: "All",
    },
    {
      key: "graphics",
      label: "Graphics",
    },
    {
      key: "content-outline",
      label: "Content Outline",
    },
    {
      key: "shot-list",
      label: "Shot List",
    },
    {
      key: "social-media-deck",
      label: "Social Media Deck",
    },
    {
      key: "short form video",
      label: "short form video",
    },
  ];

  /* =========================
     PROJECT TYPES
  ========================= */

  const graphics = projects.filter(
    (project) =>
      project.filterType === "graphics" &&
      !project.video &&
      !project.pdf
  );

  const videos = projects.filter(
    (project) => project.video
  );

  const contentOutlines = projects.filter(
    (project) => project.filterType === "content-outline"
  );

  const shotLists = projects.filter(
    (project) => project.filterType === "shot-list"
  );

  const socialMediaDecks = projects.filter(
    (project) => project.filterType === "social-media-deck"
  );

  /* =========================
     CURRENT FILTER
  ========================= */

  const selectedProjects = projects.filter(
    (project) => project.filterType === filter
  );

  const selectedLabel =
    filters.find((item) => item.key === filter)?.label ||
    "Selected";

  return (
    <section id="work" className="section works">
      <div className="container">

        {/* SECTION HEADER */}

        <div className="section-heading reveal visible">
          <div>
            <div className="eyebrow">
              04 — Selected works
            </div>

            <h2>Recent Works & Projects</h2>
          </div>

          <span className="eyebrow heading-year">
            
          </span>
        </div>

        {/* FILTERS */}

        <div className="works-filter">
          {filters.map((item) => (
            <button
              key={item.key}
              type="button"
              className={
                filter === item.key ? "active" : ""
              }
              onClick={() => setFilter(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* =========================
            ALL
        ========================= */}

        {filter === "all" && (
          <>
            {/* GRAPHICS */}

            {graphics.length > 0 && (
              <ProjectCarousel
                title="Graphics"
                items={graphics}
              />
            )}

            {/* FILM */}

            {videos.length > 0 && (
              <ProjectCarousel
                title="short form video"
                items={videos}
              />
            )}

            {/* CONTENT OUTLINE */}

            {contentOutlines.length > 0 && (
              <ProjectCarousel
                title="Content Outline"
                items={contentOutlines}
              />
            )}

            {/* SHOT LIST */}

            {shotLists.length > 0 && (
              <ProjectCarousel
                title="Shot List"
                items={shotLists}
              />
            )}

            {/* SOCIAL MEDIA DECK */}

            {socialMediaDecks.length > 0 && (
              <ProjectCarousel
                title="Social Media Deck"
                items={socialMediaDecks}
              />
            )}
          </>
        )}

        {/* =========================
            SPECIFIC FILTER
        ========================= */}

        {filter !== "all" &&
          selectedProjects.length > 0 && (
            <ProjectCarousel
              title={selectedLabel}
              items={selectedProjects}
            />
          )}

        {/* =========================
            EMPTY STATE
        ========================= */}

        {filter !== "all" &&
          selectedProjects.length === 0 && (
            <div className="empty-filter">
              <p className="eyebrow">
                No projects in this category yet.
              </p>
            </div>
          )}

      </div>
    </section>
  );
}