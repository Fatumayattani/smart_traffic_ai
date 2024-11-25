import React from 'react';
import { Activity } from 'lucide-react';
import TrafficMap from './components/TrafficMap';
import TrafficMetrics from './components/TrafficMetrics';
import AIInsights from './components/AIInsights';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Activity className="w-6 h-6 text-blue-500" />
              <span className="font-semibold text-xl">SmartTraffic AI</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <TrafficMap />
            <TrafficMetrics />
          </div>
          
          <div className="space-y-8">
            <AIInsights />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;