import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { Maximize2, X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="section-gallery" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-widest block mb-2">Home Gallery</span>
            <h2 className="text-4xl font-bold text-textMain">Designed for Living</h2>
        </div>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMAGES.gallery.map((src, idx) => (
                <div 
                    key={idx} 
                    className={`relative group overflow-hidden rounded-lg cursor-pointer ${idx === 0 || idx === 3 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'}`}
                    onClick={() => setSelectedImage(src)}
                >
                    <img 
                        src={src} 
                        alt={`Gallery ${idx}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white p-3 rounded-full text-textMain">
                            <Maximize2 size={24} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
              <button 
                className="absolute top-8 right-8 text-white hover:text-primary transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                  <X size={40} />
              </button>
              <img 
                src={selectedImage} 
                alt="Full View" 
                className="max-w-full max-h-[90vh] rounded shadow-2xl"
                onClick={(e) => e.stopPropagation()} 
              />
          </div>
      )}
    </section>
  );
};