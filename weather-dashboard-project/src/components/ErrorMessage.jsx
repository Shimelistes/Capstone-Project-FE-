import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-red-500/20 backdrop-blur-md rounded-2xl p-6 border border-red-500/30">
        <div className="flex items-center text-red-200 mb-2">
          <AlertCircle className="w-6 h-6 mr-2" />
          <span className="font-semibold">Error</span>
        </div>
        <p className="text-red-100">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
