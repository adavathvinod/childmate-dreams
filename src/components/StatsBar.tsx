import React from 'react';
import { Star, Calendar, Shield, Snowflake } from 'lucide-react';

const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: Star,
      value: '5.0',
      label: 'Google Rated',
      color: 'text-sunny',
    },
    {
      icon: Calendar,
      value: '2025',
      label: 'Established',
      color: 'text-primary',
    },
    {
      icon: Shield,
      value: 'CCTV',
      label: 'Secured',
      color: 'text-coral',
    },
    {
      icon: Snowflake,
      value: 'AC',
      label: 'Campus',
      color: 'text-accent',
    },
  ];

  return (
    <section className="relative -mt-16 z-30 px-4">
      <div className="container mx-auto">
        <div className="bg-white rounded-3xl shadow-elevated p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-4 justify-center md:justify-start"
              >
                <div className={`w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                    {stat.label === 'Google Rated' && (
                      <span className="text-sunny ml-1">⭐</span>
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
