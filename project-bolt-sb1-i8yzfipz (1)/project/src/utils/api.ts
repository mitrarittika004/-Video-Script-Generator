const API_URL = import.meta.env.VITE_API_URL;

export async function generateScript(prompt: string): Promise<any> {
  const response = await fetch(`${API_URL}/scripts/generate/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate script');
  }

  return response.json();
}

export async function getScripts(): Promise<any[]> {
  const response = await fetch(`${API_URL}/scripts/`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch scripts');
  }

  return response.json();
}

export async function deleteScriptFromServer(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/scripts/${id}/`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete script');
  }
}