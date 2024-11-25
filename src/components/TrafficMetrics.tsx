import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Car, Clock, AlertTriangle } from 'lucide-react';

const data = [
  { time: '00:00', congestion: 20 },
  { time: '04:00', congestion: 15 },
  { time: '08:00', congestion: 80 },
  { time: '12:00', congestion: 65 },
  { time: '16:00', congestion: 85 },
  { time: '20:00', congestion: 45 },
];

const MetricCard = ({ icon: Icon, title, value, trend }: any) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-blue-50 rounded-lg">
        <Icon className="w-5 h-5 text-blue-500" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  </div>
);

const TrafficMetrics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          icon={Car}
          title="Average Speed"
          value="45 mph"
        />
        <MetricCard
          icon={Clock}
          title="Wait Time"
          value="12 min"
        />
        <MetricCard
          icon={AlertTriangle}
          title="Incidents"
          value="2 Active"
        />
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Congestion Trends</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="congestion" 
                stroke="#3b82f6" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TrafficMetrics;