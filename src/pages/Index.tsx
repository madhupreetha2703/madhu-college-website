import { Link } from "react-router-dom";
import { BookOpen, FlaskConical, Trees, Bus, Bell, ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import libraryImg from "@/assets/library.jpg";
import labImg from "@/assets/lab.jpg";
import playgroundImg from "@/assets/playground.jpg";

const facilities = [
  { icon: BookOpen, title: "Library", description: "Over 50,000 books and digital resources for comprehensive learning.", image: libraryImg },
  { icon: FlaskConical, title: "Laboratories", description: "State-of-the-art science and computer labs with modern equipment.", image: labImg },
  { icon: Trees, title: "Playground", description: "Expansive sports facilities for cricket, football, basketball and athletics.", image: playgroundImg },
  { icon: Bus, title: "Transport", description: "Fleet of buses covering all major routes across the city and suburbs.", image: null },
];

const news = [
  { date: "Feb 20, 2026", title: "Admissions Open for 2026-27 Academic Year", desc: "Apply now for UG and PG programs. Early bird scholarships available." },
  { date: "Feb 15, 2026", title: "Annual Sports Day Celebration", desc: "Join us for the grand sports day with inter-departmental competitions." },
  { date: "Feb 10, 2026", title: "Guest Lecture on AI & Machine Learning", desc: "Industry experts will share insights on emerging technologies." },
];

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <img src={heroBanner} alt="Madhu College Campus" className="w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-primary-foreground">
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in-up">
                Welcome to <br />
                <span className="gold-accent">Madhu College</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Empowering Minds, Shaping Futures — A premier institution of Arts and Science committed to academic excellence.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-college-gold text-accent-foreground font-semibold hover:brightness-110 transition-all"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 college-gradient-light">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="section-heading">About Our College</h2>
          <p className="section-subheading">Nurturing Excellence Since 1995</p>
          <p className="text-foreground/80 leading-relaxed">
            Madhu College of Arts and Science is a prestigious institution dedicated to providing quality education. 
            With experienced faculty, modern infrastructure, and a vibrant campus life, we prepare students for 
            a successful future. Our diverse programs span arts, science, and commerce, ensuring holistic development 
            of every student.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:gap-3 transition-all">
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading">Latest News & Announcements</h2>
            <p className="section-subheading">Stay updated with campus happenings</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 shadow-sm card-hover border border-border">
                <div className="flex items-center gap-2 text-college-gold mb-3">
                  <Bell className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.date}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading">Our Facilities</h2>
            <p className="section-subheading">World-class infrastructure for learning and growth</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((item, i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden shadow-sm card-hover border border-border">
                {item.image && (
                  <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                )}
                {!item.image && (
                  <div className="w-full h-40 college-gradient flex items-center justify-center">
                    <item.icon className="w-16 h-16 text-primary-foreground/50" />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 college-gradient text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of successful alumni who started their journey at Madhu College.
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-college-gold text-accent-foreground font-semibold text-lg hover:brightness-110 transition-all"
          >
            Apply for Admission <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
