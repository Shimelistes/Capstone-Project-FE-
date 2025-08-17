import React from 'react';
import { AlertTriangle } from 'lucide-react';

const WeatherAlerts = ({ alerts }) => {
  if (!alerts || alerts.length === 0) return null;

  return (
    <div className="mb-6">
      {alerts.map((alert, index) => (
        <div
          key={index}
          className="bg-red-500/20 backdrop-blur-md rounded-2xl p-4 border border-red-500/30 mb-3"
        >
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-red-300 mr-3 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-red-200 font-semibold text-sm">
                  {alert.event}
                </h4>
                <span className="text-red-300 text-xs">
                  {new Date(alert.start * 1000).toLocaleDateString()}
                </span>
              </div>
              <p className="text-red-100 text-sm leading-relaxed">
                {alert.description}
              </p>
              {alert.sender_name && (
                <p className="text-red-300 text-xs mt-2">
                  Source: {alert.sender_name}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherAlerts;
