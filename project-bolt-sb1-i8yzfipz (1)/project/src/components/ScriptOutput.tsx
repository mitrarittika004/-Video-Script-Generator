import React from 'react';
import { Download, Copy, Check } from 'lucide-react';
import type { Script } from '../types';

interface ScriptOutputProps {
  script: Script | null;
}

export function ScriptOutput({ script }: ScriptOutputProps) {
  const [copied, setCopied] = React.useState(false);

  if (!script) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(script.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-8 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {script.title}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={handleCopy}
            className="p-2.5 text-gray-500 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
            title="Copy to clipboard"
          >
            {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
          </button>
          <button
            className="p-2.5 text-gray-500 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            title="Download script"
          >
            <Download size={20} />
          </button>
        </div>
      </div>
      <div className="prose max-w-none">
        <pre className="whitespace-pre-wrap bg-gray-50 rounded-lg p-6 text-gray-800 font-mono text-sm">
          {script.content}
        </pre>
      </div>
      <div className="flex justify-between text-sm text-gray-500 border-t pt-4">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Language: {script.language}
        </span>
        <span>{new Date(script.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
}