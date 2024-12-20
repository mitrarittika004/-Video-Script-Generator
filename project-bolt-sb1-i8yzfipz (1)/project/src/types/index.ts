export interface Script {
  id: string;
  title: string;
  content: string;
  language: string;
  createdAt: string;
}

export interface FilePreview {
  id: string;
  name: string;
  content: string;
  type: string;
}