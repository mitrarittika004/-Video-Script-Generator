# AI Video Script Generator

A full-stack application that generates video scripts using AI, with support for file uploads and script management.

## Features

- AI-powered script generation using x.ai API
- File upload support (text and images)
- Script storage and management
- Responsive design for mobile and desktop
- Copy and download functionality

## Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Lucide Icons

### Backend
- Django
- Django REST Framework
- SQLite

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd video-script-generator
```

2. Set up the backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
```

3. Create a `.env` file in the backend directory:
```
DJANGO_SECRET_KEY=your-secret-key
XAI_API_KEY=your-xai-api-key
DEBUG=True
```

4. Start the backend server:
```bash
python manage.py runserver
```

5. Set up the frontend:
```bash
cd ../frontend
npm install
```

6. Create a `.env` file in the frontend directory:
```
VITE_API_URL=http://localhost:8000/api
```

7. Start the frontend development server:
```bash
npm run dev
```

## Usage

1. Enter your video concept in the text input field
2. Upload supporting documents or images if needed
3. Click "Generate Script" to create your video script
4. View, copy, or delete saved scripts from the library

## Limitations

- OCR functionality for images is not yet implemented
- File upload size is limited to 10MB
- Currently supports only English language

## Future Enhancements

- Implement OCR for image text extraction
- Add support for multiple languages
- Enable script version history
- Add export options (PDF, Word)
- Implement user authentication
