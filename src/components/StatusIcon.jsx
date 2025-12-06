import React from 'react';
import { CheckCircle, XCircle, AlertCircle, Clock } from 'lucide-react';

const StatusIcon = ({ status }) => {
  if (status === 'passed') return <CheckCircle className="w-4 h-4 text-green-500" />;
  if (status === 'failed') return <XCircle className="w-4 h-4 text-red-500" />;
  if (status === 'skipped') return <AlertCircle className="w-4 h-4 text-yellow-500" />;
  return <Clock className="w-4 h-4 text-gray-400" />;
};

export default StatusIcon;
