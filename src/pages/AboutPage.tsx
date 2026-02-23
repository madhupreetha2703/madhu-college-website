import { BookOpen, Eye, Target, UserCircle } from "lucide-react";
import campusImg from "@/assets/campus.jpg";

const faculty = [
  { name: "Dr. R. Madhavan", role: "Principal", dept: "Ph.D. in Mathematics", exp: "25+ years" },
  { name: "Dr. S. Lakshmi", role: "Vice Principal", dept: "Ph.D. in English Literature", exp: "20+ years" },
  { name: "Prof. K. Ramesh", role: "HOD - Computer Science", dept: "M.Tech in CS", exp: "15+ years" },
  { name: "Dr. P. Kavitha", role: "HOD - Commerce", dept: "Ph.D. in Commerce", exp: "18+ years" },
  { name: "Prof. M. Suresh", role: "HOD - Physics", dept: "M.Sc. Physics", exp: "12+ years" },
  { name: "Dr. A. Priya", role: "HOD - Tamil", dept: "Ph.D. in Tamil Literature", exp: "16+ years" },
];

const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src={campusImg} alt="Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 college-gradient opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">About Us</h1>
        </div>
      </section>

      {/* History */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-heading text-center">Our History</h2>
          <p className="section-subheading text-center">A legacy of academic excellence</p>
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
            <p>
              Founded in 1995, Madhu College of Arts and Science has grown from a small institution with 200 students
              to a thriving academic community of over 5,000 students. The college was established with the vision of
              providing accessible, quality education to students from diverse backgrounds.
            </p>
            <p>
              Over the decades, the college has expanded its academic offerings, built state-of-the-art facilities,
              and cultivated strong industry partnerships. Today, we are recognized as one of the leading colleges in
              the region, with alumni serving in distinguished positions across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                To be a globally recognized institution of higher education that nurtures intellectual curiosity,
                fosters innovation, and develops responsible citizens who contribute meaningfully to society.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-college-gold/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-college-gold" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <ul className="text-foreground/80 space-y-2 list-disc list-inside">
                <li>Provide quality education accessible to all</li>
                <li>Foster research and innovation culture</li>
                <li>Develop industry-ready professionals</li>
                <li>Promote ethical values and social responsibility</li>
                <li>Create an inclusive learning environment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-heading text-center">Principal's Message</h2>
          <div className="mt-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-40 h-40 rounded-full college-gradient flex items-center justify-center shrink-0">
              <UserCircle className="w-24 h-24 text-primary-foreground/50" />
            </div>
            <div>
              <blockquote className="text-foreground/80 italic leading-relaxed text-lg border-l-4 border-college-gold pl-6">
                "At Madhu College, we believe that education is not just about acquiring knowledge — it's about
                developing character, building confidence, and preparing for life. We are committed to providing
                an environment where every student can discover their potential and achieve their dreams."
              </blockquote>
              <p className="mt-4 font-heading font-semibold text-primary">Dr. R. Madhavan</p>
              <p className="text-muted-foreground text-sm">Principal, Madhu College of Arts and Science</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Our Faculty</h2>
          <p className="section-subheading text-center">Experienced and dedicated educators</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {faculty.map((f, i) => (
              <div key={i} className="bg-card p-6 rounded-lg shadow-sm card-hover border border-border text-center">
                <div className="w-20 h-20 rounded-full college-gradient mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-primary-foreground/60" />
                </div>
                <h3 className="font-heading text-lg font-semibold">{f.name}</h3>
                <p className="text-primary font-medium text-sm">{f.role}</p>
                <p className="text-muted-foreground text-sm mt-1">{f.dept}</p>
                <p className="text-muted-foreground text-xs mt-1">Experience: {f.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
