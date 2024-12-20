import React, { useState, useEffect } from 'react';
import { ScriptInput } from './components/ScriptInput';
import { ScriptOutput } from './components/ScriptOutput';
import { SavedScripts } from './components/SavedScripts';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { saveScript, getSavedScripts } from './utils/storage';
import { generateVideoScript } from './utils/scriptGenerator';
import type { Script } from './types';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentScript, setCurrentScript] = useState<Script | null>(null);
  const [savedScripts, setSavedScripts] = useState<Script[]>([]);

  useEffect(() => {
    setSavedScripts(getSavedScripts());
  }, []);

  const generateScript = async (prompt: string) => {
    setIsLoading(true);
    try {
      const scriptContent = generateVideoScript(prompt);
      const newScript: Script = {
        id: crypto.randomUUID(),
        title: `Video Script: ${prompt}`,
        content: scriptContent,
        language: 'English',
        createdAt: new Date().toISOString()
      };
      
      setCurrentScript(newScript);
      saveScript(newScript);
      setSavedScripts(getSavedScripts());
    } catch (error) {
      console.error('Error generating script:', error);
      alert('Error generating script. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Header />
      <main className="space-y-8">
        <ScriptInput onGenerate={generateScript} isLoading={isLoading} />
        <ScriptOutput script={currentScript} />
        <SavedScripts scripts={savedScripts} onScriptsUpdate={() => setSavedScripts(getSavedScripts())} />
      </main>
    </Layout>
  );
}