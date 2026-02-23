import { useState } from "react";
import campusImg from "@/assets/campus.jpg";
import libraryImg from "@/assets/library.jpg";
import labImg from "@/assets/lab.jpg";
import playgroundImg from "@/assets/playground.jpg";
import eventsImg from "@/assets/events.jpg";
import classroomImg from "@/assets/classroom.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

const categories = ["All", "Campus", "Events", "Classrooms & Labs"];

const images = [
  { src: heroBanner, title: "Main Campus Building", category: "Campus" },
  { src: campusImg, title: "College Entrance", category: "Campus" },
  { src: libraryImg, title: "Central Library", category: "Classrooms & Labs" },
  { src: labImg, title: "Science Laboratory", category: "Classrooms & Labs" },
  { src: classroomImg, title: "Smart Classroom", category: "Classrooms & Labs" },
  { src: playgroundImg, title: "Sports Ground", category: "Campus" },
  { src: eventsImg, title: "Annual Day Celebration", category: "Events" },
];

const GalleryPage = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? images : images.filter(img => img.category === active);

  return (
    <div>
      <section className="college-gradient py-16 text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">Gallery</h1>
          <p className="text-primary-foreground/80 text-lg">Explore our vibrant campus life</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg cursor-pointer card-hover" onClick={() => setLightbox(i)}>
                <img src={img.src} alt={img.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-end">
                  <p className="text-primary-foreground p-4 font-heading font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="max-w-4xl w-full">
            <img src={filtered[lightbox].src} alt={filtered[lightbox].title} className="w-full max-h-[80vh] object-contain rounded-lg" />
            <p className="text-center text-primary-foreground mt-4 font-heading text-lg">{filtered[lightbox].title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
