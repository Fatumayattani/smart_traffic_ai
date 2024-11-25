import React, { useState } from 'react';
import { Brain, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const AIInsights: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<string>('');

  const generateInsight = async () => {
    setLoading(true);
    try {
      // Use environment variable for API key
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

      const prompt = `Based on current traffic patterns:
      - High congestion on main routes
      - Weather: Clear skies
      - Time: Peak hours
      - 2 active incidents
      
      Provide a brief traffic prediction and recommendation.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      setPrediction(response.text());
    } catch (error) {
      console.error('Error generating insight:', error);
      setPrediction('Unable to generate traffic insights at the moment.');
    }
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <Brain className="w-6 h-6 text-purple-500" />
        <h2 className="text-xl font-semibold">AI Traffic Insights</h2>
      </div>
      
      <div className="space-y-4">
        <button
          onClick={generateInsight}
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Analyzing Traffic...
            </span>
          ) : (
            'Generate Traffic Insight'
          )}
        </button>
        
        {prediction && (
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">{prediction}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIInsights;