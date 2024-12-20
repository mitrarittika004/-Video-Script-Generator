import { Script } from '../types';

const STORAGE_KEY = 'saved_scripts';

export function saveScript(script: Script): void {
  const savedScripts = getSavedScripts();
  savedScripts.push(script);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedScripts));
}

export function getSavedScripts(): Script[] {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

export function deleteScript(id: string): void {
  const savedScripts = getSavedScripts();
  const filtered = savedScripts.filter(script => script.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}