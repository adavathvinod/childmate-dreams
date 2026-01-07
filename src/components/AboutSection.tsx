import React from 'react';
import { Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="section-title text-left mb-6">
              Where Little Minds
              <span className="text-primary"> Blossom</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Welcome to Childmate Playschool, Kuntloor — a nurturing haven where every child's potential is recognized, celebrated, and cultivated. Established in 2025, we are committed to providing a world-class early education experience in a safe, loving, and stimulating environment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our play-way methodology ensures that learning is never a burden but a joyful adventure. With state-of-the-art facilities, dedicated teachers, and a curriculum designed for holistic development, we prepare your little ones not just for school, but for life.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                'Certified & Trained Teachers',
                'Child-Safe Environment',
                'Individual Attention',
                'Regular Parent Updates',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-mint/20 rounded-lg flex items-center justify-center">
                    <Heart className="w-4 h-4 text-mint" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Composition */}
          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=400&q=80"
                    alt="Happy child learning"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=400&q=80"
                    alt="Children in classroom"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-3xl overflow-hidden shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=400&q=80"
                    alt="Creative activities"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-card bg-primary p-6 text-primary-foreground">
                  <p className="text-4xl font-bold font-serif">5+</p>
                  <p className="text-sm opacity-90">Years of Excellence</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-sunny text-sunny-foreground px-6 py-3 rounded-2xl shadow-elevated font-semibold">
              Est. 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
