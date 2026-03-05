import React from 'react';
import { LOCATIONS } from '../constants';
import { MapPin, Clock } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
            
            {/* Left Header Side */}
            <div className="md:w-1/3">
                <span className="text-primary font-semibold uppercase tracking-widest block mb-2">Location Highlights</span>
                <h2 className="text-4xl font-bold text-textMain mb-6">Everything You Need, All Around You</h2>
                <div className="space-y-2">
                    {['Grocery', 'Dining', 'Transportation', 'Education', 'Hospitals', 'Parks'].map((cat) => (
                        <div key={cat} className="flex items-center gap-2 text-gray-600">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            {cat}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right List Side */}
            <div className="md:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {LOCATIONS.map((loc, idx) => (
                        <div key={idx} className="bg-surface p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-border">
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-lg font-bold text-textMain">{loc.name}</h4>
                                <span className="bg-white px-2 py-1 rounded text-xs font-semibold text-primary border border-primary/20 whitespace-nowrap">
                                    {loc.time}
                                </span>
                            </div>
                            <p className="text-gray-500 text-sm">{loc.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};