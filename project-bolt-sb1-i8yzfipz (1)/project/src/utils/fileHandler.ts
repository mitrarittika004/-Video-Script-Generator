import { FilePreview } from '../types';

export async function handleFileUpload(file: File): Promise<FilePreview> {
  const id = crypto.randomUUID();
  
  if (file.type.startsWith('text/')) {
    const content = await file.text();
    return {
      id,
      name: file.name,
      content,
      type: 'text'
    };
  }
  
  if (file.type.startsWith('image/')) {
    // For now, we'll just return the image name since OCR isn't implemented yet
    return {
      id,
      name: file.name,
      content: `Image uploaded: ${file.name}`,
      type: 'image'
    };
  }
  
  throw new Error('Unsupported file type');
}