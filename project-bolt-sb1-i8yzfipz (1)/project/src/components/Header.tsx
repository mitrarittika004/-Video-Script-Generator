import React from 'react';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="text-center mb-12 animate-fade-in">
      <div className="flex items-center justify-center mb-4">
        <div className="bg-blue-50 p-3 rounded-2xl">
          <Sparkles className="text-blue-600 w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 ml-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Video Script Generator
        </h1>
      </div>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Transform your ideas into professional video scripts with AI assistance
      </p>
    </header>
  );
}