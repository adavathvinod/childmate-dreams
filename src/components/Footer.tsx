import React from 'react';
import AnimatedLogo from './AnimatedLogo';
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Programs', href: '#features' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const programs = [
    'Playgroup (1.5 - 2.5 years)',
    'Nursery (2.5 - 3.5 years)',
    'LKG (3.5 - 4.5 years)',
    'UKG (4.5 - 5.5 years)',
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-4 inline-block">
              <AnimatedLogo size="sm" />
            </div>
            <p className="text-white/70 leading-relaxed">
              Nurturing young minds through play-based learning in a safe, 
              modern, and caring environment since 2025.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/childmate_playschool" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program} className="text-white/70">
                  {program}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-mint shrink-0 mt-0.5" />
                <span className="text-white/70">
                  Kuntloor, Hayathnagar,<br />
                  Telangana, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-mint shrink-0" />
                <a href="tel:+919876543210" className="text-white/70 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-mint shrink-0" />
                <a href="mailto:info@childmateplayschool.com" className="text-white/70 hover:text-white transition-colors">
                  info@childmateplayschool.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-mint shrink-0 mt-0.5" />
                <div className="text-white/70">
                  <p>Mon - Fri: 9:00 AM - 3:30 PM</p>
                  <p>Saturday: 9:00 AM - 12:30 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © 2025 Childmate Playschool, Kuntloor. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
