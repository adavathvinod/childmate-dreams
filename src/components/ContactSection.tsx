import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Download } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({
      parentName: '',
      childName: '',
      childAge: '',
      phone: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-coral/20 text-coral rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="section-title">
            Start Your Child's Journey
          </h2>
          <p className="section-subtitle">
            Schedule a visit or inquire about admissions. We would love to meet you and your little one!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-premium">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Admission Inquiry
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Parent Name *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Child's Name *
                  </label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="Child's name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Child's Age *
                  </label>
                  <select
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  >
                    <option value="">Select age</option>
                    <option value="1.5-2">1.5 - 2 years</option>
                    <option value="2-2.5">2 - 2.5 years</option>
                    <option value="2.5-3">2.5 - 3 years</option>
                    <option value="3-3.5">3 - 3.5 years</option>
                    <option value="3.5-4">3.5 - 4 years</option>
                    <option value="4-4.5">4 - 4.5 years</option>
                    <option value="4.5-5">4.5 - 5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Any specific questions or requirements?"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button type="submit" className="btn-hero flex-1 flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Submit Inquiry
                </button>
                <button 
                  type="button" 
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Brochure
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card-feature text-left">
                <div className="w-12 h-12 bg-mint/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-mint" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground text-sm">
                  Kuntloor, Hayathnagar,<br />
                  Telangana, India
                </p>
              </div>

              <div className="card-feature text-left">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <a href="tel:+919876543210" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>

              <div className="card-feature text-left">
                <div className="w-12 h-12 bg-sunny/20 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-sunny" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <a href="mailto:info@childmateplayschool.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  info@childmateplayschool.com
                </a>
              </div>

              <div className="card-feature text-left">
                <div className="w-12 h-12 bg-coral/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-coral" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">School Hours</h4>
                <p className="text-muted-foreground text-sm">
                  Mon-Fri: 9am - 3:30pm<br />
                  Sat: 9am - 12:30pm
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden shadow-card h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.8763051892507!2d78.59!3d17.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKuntloor%2C%20Hayathnagar!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Childmate Playschool Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
