import React from 'react';
import { SERVICES, IMAGES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section className="py-32 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-widest block mb-2">Mon Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-textMain mb-6">Services Immobiliers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Un accompagnement complet et personnalisé pour tous vos projets immobiliers, de l'estimation à la signature finale.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => {
                const Icon = service.icon;
                return (
                    <div key={idx} className="bg-surface p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/10 group">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                            <Icon size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-textMain mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                );
            })}
        </div>

        <div className="mt-20 relative rounded-2xl overflow-hidden h-96">
            <img src={IMAGES.cardImage} alt="Service Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/80 flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-3xl font-bold text-white mb-6">Prêt à concrétiser votre projet ?</h3>
                <a 
                    href="/estimation" 
                    className="bg-white text-primary font-bold py-4 px-10 rounded hover:bg-gray-100 transition-all shadow-lg"
                >
                    Demander une estimation
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};