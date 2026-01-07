import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import classroom1 from '@/assets/classroom-1.png';
import classroom2 from '@/assets/classroom-2.png';
import playroom from '@/assets/playroom.png';
import learningMaterials from '@/assets/learning-materials.png';
import activityTable from '@/assets/activity-table.png';
import ballPit from '@/assets/ball-pit.png';

const InstagramFeed: React.FC = () => {
  const instagramPosts = [
    { image: classroom1, likes: 124, comments: 18 },
    { image: playroom, likes: 98, comments: 12 },
    { image: learningMaterials, likes: 156, comments: 24 },
    { image: classroom2, likes: 87, comments: 9 },
    { image: activityTable, likes: 143, comments: 21 },
    { image: ballPit, likes: 112, comments: 15 },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-4 py-2 rounded-full mb-4">
            <Instagram className="w-5 h-5" />
            <span className="font-medium">Follow Us on Instagram</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            @childmate_playschool
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our community of happy parents and kids! See our latest activities, events, and magical moments.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://instagram.com/childmate_playschool"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={post.image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <div className="flex items-center gap-1 text-white">
                  <Heart className="w-5 h-5 fill-white" />
                  <span className="font-medium">{post.likes}</span>
                </div>
                <div className="flex items-center gap-1 text-white">
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span className="font-medium">{post.comments}</span>
                </div>
              </div>
              
              {/* Instagram Icon */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="w-6 h-6 text-white drop-shadow-lg" />
              </div>
            </a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <a
            href="https://instagram.com/childmate_playschool"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            Follow @childmate_playschool
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
