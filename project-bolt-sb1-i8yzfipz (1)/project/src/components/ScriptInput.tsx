import React, { useState } from 'react';
import { FileText, Link, Image, Loader2, Wand2 } from 'lucide-react';

interface ScriptInputProps {
  onGenerate: (prompt: string) => void;
  isLoading: boolean;
}

export function ScriptInput({ onGenerate, isLoading }: ScriptInputProps) {
  const [prompt, setPrompt] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onGenerate(prompt);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4 animate-slide-up">
      <div className="relative bg-white rounded-xl shadow-sm border border-gray-200 hover:border-blue-400 transition-colors">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your video concept here..."
          className="w-full min-h-[200px] p-6 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button
            type="button"
            className="p-2.5 text-gray-500 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            title="Upload Document"
          >
            <FileText size={20} />
          </button>
          <button
            type="button"
            className="p-2.5 text-gray-500 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            title="Add Link"
          >
            <Link size={20} />
          </button>
          <button
            type="button"
            className="p-2.5 text-gray-500 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            title="Upload Image"
          >
            <Image size={20} />
          </button>
        </div>
      </div>
      <button
        type="submit"
        disabled={isLoading || !prompt.trim()}
        className="w-full py-4 px-6 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-medium shadow-lg shadow-blue-500/20 transition-all hover:shadow-xl hover:shadow-blue-500/30 disabled:hover:shadow-none"
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin mr-2" size={20} />
            Generating Your Script...
          </>
        ) : (
          <>
            <Wand2 className="mr-2" size={20} />
            Generate Script
          </>
        )}
      </button>
    </form>
  );
}