import React, { useRef } from 'react';
import { FileText, Image } from 'lucide-react';
import { handleFileUpload } from '../utils/fileHandler';
import type { FilePreview } from '../types';

interface FileUploadButtonProps {
  onFileProcess: (preview: FilePreview) => void;
  accept: string;
  icon: 'document' | 'image';
}

export function FileUploadButton({ onFileProcess, accept, icon }: FileUploadButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const preview = await handleFileUpload(file);
        onFileProcess(preview);
      } catch (error) {
        console.error('Error processing file:', error);
        alert('Error processing file. Please try again.');
      }
    }
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        accept={accept}
        className="hidden"
      />
      <button
        type="button"
        onClick={handleClick}
        className="p-2.5 text-gray-500 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
        title={icon === 'document' ? 'Upload Document' : 'Upload Image'}
      >
        {icon === 'document' ? <FileText size={20} /> : <Image size={20} />}
      </button>
    </>
  );
}