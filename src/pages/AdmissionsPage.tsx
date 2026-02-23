import { useState } from "react";
import { FileText, CheckCircle, ArrowRight } from "lucide-react";

const documents = [
  "10th & 12th Mark Sheets (Original + 2 copies)",
  "Transfer Certificate (TC)",
  "Migration Certificate",
  "Community Certificate",
  "Income Certificate",
  "Aadhaar Card",
  "4 Passport-size Photographs",
  "Medical Fitness Certificate",
];

const steps = [
  { step: 1, title: "Online Registration", desc: "Fill the online admission form with personal and academic details." },
  { step: 2, title: "Document Verification", desc: "Submit original documents for verification at the college office." },
  { step: 3, title: "Merit List / Interview", desc: "Shortlisted candidates will be notified via email and SMS." },
  { step: 4, title: "Fee Payment & Enrollment", desc: "Pay the admission fees and complete the enrollment process." },
];

const AdmissionsPage = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", course: "", qualification: "", percentage: "", address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="college-gradient py-16 text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">Admissions 2026-27</h1>
          <p className="text-primary-foreground/80 text-lg">Your journey to excellence begins here</p>
        </div>
      </section>

      {/* Procedure */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-heading text-center">Admission Procedure</h2>
          <p className="section-subheading text-center">Follow these simple steps to secure your admission</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full college-gradient text-primary-foreground font-heading text-xl font-bold mx-auto mb-3 flex items-center justify-center">
                  {s.step}
                </div>
                <h3 className="font-heading font-semibold mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
                {s.step < 4 && <ArrowRight className="w-5 h-5 text-college-gold mx-auto mt-3 hidden lg:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-heading text-center">Required Documents</h2>
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border mt-8">
            <ul className="grid sm:grid-cols-2 gap-3">
              {documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-2 text-foreground/80">
                  <FileText className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="section-heading text-center">Online Admission Form</h2>
          <p className="section-subheading text-center">Fill in your details to apply</p>

          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-college-gold mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-2">Application Submitted!</h3>
              <p className="text-muted-foreground">We will review your application and contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 shadow-sm border border-border space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name *</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone *</label>
                  <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Course *</label>
                  <select required value={formData.course} onChange={e => setFormData({...formData, course: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Select Course</option>
                    <option>B.Sc. Computer Science</option>
                    <option>B.Sc. Mathematics</option>
                    <option>B.Com. General</option>
                    <option>B.A. English</option>
                    <option>BBA</option>
                    <option>M.Sc. Computer Science</option>
                    <option>MBA</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Qualification *</label>
                  <input required type="text" placeholder="e.g., 12th Pass" value={formData.qualification} onChange={e => setFormData({...formData, qualification: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Percentage *</label>
                  <input required type="text" placeholder="e.g., 85%" value={formData.percentage} onChange={e => setFormData({...formData, percentage: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <textarea rows={3} value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <button type="submit" className="w-full py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all">
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;
