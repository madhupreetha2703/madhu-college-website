import { GraduationCap, Clock, IndianRupee, CheckCircle } from "lucide-react";

const ugCourses = [
  { name: "B.Sc. Computer Science", duration: "3 Years", fees: "₹25,000/year", eligibility: "12th with Maths/CS (55%)" },
  { name: "B.Sc. Mathematics", duration: "3 Years", fees: "₹20,000/year", eligibility: "12th with Maths (50%)" },
  { name: "B.Sc. Physics", duration: "3 Years", fees: "₹20,000/year", eligibility: "12th with Physics & Maths (50%)" },
  { name: "B.Com. General", duration: "3 Years", fees: "₹18,000/year", eligibility: "12th Commerce (50%)" },
  { name: "B.Com. Computer Applications", duration: "3 Years", fees: "₹22,000/year", eligibility: "12th Commerce (50%)" },
  { name: "B.A. English Literature", duration: "3 Years", fees: "₹15,000/year", eligibility: "12th any stream (45%)" },
  { name: "B.A. Tamil Literature", duration: "3 Years", fees: "₹12,000/year", eligibility: "12th any stream (45%)" },
  { name: "BBA", duration: "3 Years", fees: "₹30,000/year", eligibility: "12th any stream (50%)" },
];

const pgCourses = [
  { name: "M.Sc. Computer Science", duration: "2 Years", fees: "₹35,000/year", eligibility: "B.Sc. CS/IT (55%)" },
  { name: "M.Sc. Mathematics", duration: "2 Years", fees: "₹28,000/year", eligibility: "B.Sc. Maths (55%)" },
  { name: "M.Com.", duration: "2 Years", fees: "₹25,000/year", eligibility: "B.Com. (55%)" },
  { name: "M.A. English", duration: "2 Years", fees: "₹22,000/year", eligibility: "B.A. English (50%)" },
  { name: "MBA", duration: "2 Years", fees: "₹50,000/year", eligibility: "Any UG degree (50%)" },
];

const CourseCard = ({ course }: { course: typeof ugCourses[0] }) => (
  <div className="bg-card rounded-lg p-6 shadow-sm card-hover border border-border">
    <div className="flex items-center gap-2 mb-3">
      <GraduationCap className="w-5 h-5 text-primary" />
      <h3 className="font-heading text-lg font-semibold">{course.name}</h3>
    </div>
    <div className="space-y-2 text-sm">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Clock className="w-4 h-4" />
        <span>Duration: {course.duration}</span>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <IndianRupee className="w-4 h-4" />
        <span>Fees: {course.fees}</span>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <CheckCircle className="w-4 h-4" />
        <span>Eligibility: {course.eligibility}</span>
      </div>
    </div>
  </div>
);

const CoursesPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="college-gradient py-16 text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">Our Courses</h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Choose from a wide range of undergraduate and postgraduate programs
          </p>
        </div>
      </section>

      {/* UG */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Undergraduate Programs (UG)</h2>
          <p className="section-subheading text-center">3-year degree programs for 12th pass students</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ugCourses.map((c, i) => <CourseCard key={i} course={c} />)}
          </div>
        </div>
      </section>

      {/* PG */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Postgraduate Programs (PG)</h2>
          <p className="section-subheading text-center">2-year advanced programs for graduates</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pgCourses.map((c, i) => <CourseCard key={i} course={c} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
