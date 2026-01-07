import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Parent of Aanya, Age 4',
      content: 'Childmate has been a blessing for our daughter. The play-way method has made her fall in love with learning. She comes home excited every day to share what she learned!',
      rating: 5,
      avatar: 'PS',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Parent of Arjun, Age 3',
      content: 'The infrastructure is top-notch. AC classrooms, CCTV security, and the caring staff give us complete peace of mind. Best decision we made for our son.',
      rating: 5,
      avatar: 'RK',
    },
    {
      name: 'Sunitha Reddy',
      role: 'Parent of Kavya, Age 5',
      content: 'The teachers here are exceptional. They truly understand each child and nurture their individual talents. My daughter has grown so much in confidence.',
      rating: 5,
      avatar: 'SR',
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-sunny/20 text-sunny-foreground rounded-full text-sm font-medium mb-4">
            Parent Reviews
          </span>
          <h2 className="section-title">
            Trusted by Families
          </h2>
          <p className="section-subtitle">
            See what parents say about their experience with Childmate Playschool.
          </p>
        </div>

        {/* Google Rating Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-card">
            <div className="flex items-center gap-2">
              <img 
                src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" 
                alt="Google" 
                className="w-10 h-10"
              />
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1">
                <span className="text-3xl font-bold text-foreground">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-sunny text-sunny" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-sunny text-sunny" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
