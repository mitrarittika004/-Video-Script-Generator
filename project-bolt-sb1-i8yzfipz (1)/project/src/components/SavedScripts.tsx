import React from 'react';
import { Trash2, Copy } from 'lucide-react';
import { deleteScript } from '../utils/storage';
import type { Script } from '../types';

interface SavedScriptsProps {
  scripts: Script[];
  onScriptsUpdate: () => void;
}

export function SavedScripts({ scripts, onScriptsUpdate }: SavedScriptsProps) {
  const handleDelete = (id: string) => {
    deleteScript(id);
    onScriptsUpdate();
  };

  if (scripts.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">Saved Scripts</h2>
      <div className="space-y-4">
        {scripts.map((script) => (
          <div
            key={script.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-900">{script.title}</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => navigator.clipboard.writeText(script.content)}
                  className="p-1.5 text-gray-500 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Copy size={16} />
                </button>
                <button
                  onClick={() => handleDelete(script.id)}
                  className="p-1.5 text-gray-500 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600 truncate">{script.content}</p>
            <div className="mt-2 text-xs text-gray-500">
              {new Date(script.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}