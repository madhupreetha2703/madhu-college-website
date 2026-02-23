import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <section className="college-gradient py-16 text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Info */}
            <div>
              <h2 className="section-heading">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">Have questions? Reach out to us through any of the following channels.</p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Address", value: "123 College Road, Education District, Tamil Nadu - 600001" },
                  { icon: Phone, label: "Phone", value: "+91 98765 43210 / +91 98765 43211" },
                  { icon: Mail, label: "Email", value: "info@madhucollege.edu" },
                  { icon: Clock, label: "Office Hours", value: "Monday - Saturday: 9:00 AM - 5:00 PM" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.label}</h4>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden border border-border">
                <iframe
                  title="College Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d80.2!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="section-heading">Send a Message</h2>
              <p className="text-muted-foreground mb-8">Fill the form and we'll get back to you shortly.</p>

              {sent ? (
                <div className="text-center py-16">
                  <CheckCircle className="w-16 h-16 text-college-gold mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1">Your Name *</label>
                      <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Subject *</label>
                    <input required type="text" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
