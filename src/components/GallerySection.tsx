import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import classroom1 from '@/assets/classroom-1.png';
import learningMaterials from '@/assets/learning-materials.png';
import playroom from '@/assets/playroom.png';
import wallDecor from '@/assets/wall-decor.png';
import activityTable from '@/assets/activity-table.png';
import classroom2 from '@/assets/classroom-2.png';
import ballPit from '@/assets/ball-pit.png';
import classroom3 from '@/assets/classroom-3.png';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: classroom1, alt: 'Digital Classroom with Smart Board', category: 'Classroom' },
    { src: learningMaterials, alt: 'Learning Materials & Activities', category: 'Equipment' },
    { src: playroom, alt: 'Indoor Play Area', category: 'Play Area' },
    { src: wallDecor, alt: 'Creative Wall Decorations', category: 'Decor' },
    { src: activityTable, alt: 'Activity & Learning Table', category: 'Equipment' },
    { src: classroom2, alt: 'Colorful Classroom Setup', category: 'Classroom' },
    { src: ballPit, alt: 'Ball Pit & Play Equipment', category: 'Play Area' },
    { src: classroom3, alt: 'Art & Craft Room', category: 'Classroom' },
  ];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-mint/20 text-mint rounded-full text-sm font-medium mb-4">
            Our Campus
          </span>
          <h2 className="section-title">
            Infrastructure Gallery
          </h2>
          <p className="section-subtitle">
            Take a look at our modern facilities designed with your child's safety and comfort in mind.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <div className={`relative overflow-hidden rounded-2xl ${
                index === 0 || index === 5 ? 'h-64 md:h-full' : 'h-48 md:h-56'
              }`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <span className="text-xs bg-primary/80 px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                    <p className="text-sm font-medium mt-2">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-sunny transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 text-white hover:text-sunny transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-[80vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 text-white hover:text-sunny transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="font-medium">{images[selectedImage].alt}</p>
            <p className="text-sm text-white/70 mt-1">
              {selectedImage + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
