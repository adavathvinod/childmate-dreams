import React from 'react';
import { Gamepad2, BookOpen, Monitor, Laptop } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Gamepad2,
      title: 'Play-Way Method',
      description: 'Learning through fun activities, games, and hands-on experiences that spark curiosity and creativity.',
      color: 'bg-mint',
      iconColor: 'text-mint-foreground',
    },
    {
      icon: BookOpen,
      title: 'Own Curriculum',
      description: 'Specially designed curriculum that balances academic foundation with social-emotional development.',
      color: 'bg-primary',
      iconColor: 'text-primary-foreground',
    },
    {
      icon: Monitor,
      title: 'Modern Equipment',
      description: 'State-of-the-art learning materials, child-safe furniture, and age-appropriate educational toys.',
      color: 'bg-sunny',
      iconColor: 'text-sunny-foreground',
    },
    {
      icon: Laptop,
      title: 'Digital Classes',
      description: 'Smart classrooms with interactive displays and digital learning tools for engaging education.',
      color: 'bg-accent',
      iconColor: 'text-accent-foreground',
    },
  ];

  return (
    <section id="features" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Approach
          </span>
          <h2 className="section-title">
            The Play-Way Difference
          </h2>
          <p className="section-subtitle">
            We believe every child learns best when they are happy, engaged, and having fun.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-feature group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
