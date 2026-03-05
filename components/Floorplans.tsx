import React, { useState } from 'react';
import { ROOM_SIZES, IMAGES } from '../constants';
import { Check } from 'lucide-react';

export const Floorplans: React.FC = () => {
  const [activeFloor, setActiveFloor] = useState<1 | 2>(1);

  return (
    <section id="section-floorplan" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-widest block mb-2">Discover</span>
            <h2 className="text-4xl font-bold text-textMain">Home Floorplans</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Room List Side */}
            <div className="lg:col-span-4 order-2 lg:order-1">
                <div className="bg-surface p-8 rounded-lg">
                    <h3 className="text-xl font-bold mb-6 border-b border-border pb-4">Room Sizes</h3>
                    <ul className="space-y-4">
                        {ROOM_SIZES.map((room, idx) => (
                            <li key={idx} className="flex justify-between items-center text-gray-700">
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                    {room.name}
                                </span>
                                <span className="font-semibold text-textMain">{room.size}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Visual Side */}
            <div className="lg:col-span-8 order-1 lg:order-2">
                <div className="flex gap-4 mb-8 justify-center lg:justify-start">
                    <button 
                        onClick={() => setActiveFloor(1)}
                        className={`px-8 py-3 rounded-full font-semibold transition-all ${activeFloor === 1 ? 'bg-primary text-white' : 'bg-surface text-gray-500 hover:bg-gray-200'}`}
                    >
                        Floor 1
                    </button>
                    <button 
                        onClick={() => setActiveFloor(2)}
                        className={`px-8 py-3 rounded-full font-semibold transition-all ${activeFloor === 2 ? 'bg-primary text-white' : 'bg-surface text-gray-500 hover:bg-gray-200'}`}
                    >
                        Floor 2
                    </button>
                </div>

                <div className="bg-white p-4 rounded-lg border border-border">
                    {/* Simulating floor switch by just re-rendering the image (same image in demo, but conceptually different) */}
                    <div className="animate-fade-in relative aspect-[4/3]">
                        <img 
                            src={IMAGES.floorplan} 
                            alt={`Floor plan ${activeFloor}`} 
                            className="w-full h-full object-contain"
                        />
                        <div className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded text-sm font-bold shadow-sm">
                            Level {activeFloor}
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};