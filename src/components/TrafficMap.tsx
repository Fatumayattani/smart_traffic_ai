import React from 'react';
import { MapPin } from 'lucide-react';

const TrafficMap: React.FC = () => {
  return (
    <div className="relative h-[400px] bg-slate-100 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-pulse">
          <MapPin className="w-8 h-8 text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default TrafficMap;