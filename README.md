# -Video-Script-Generator
Develop a web application that allows users to generate AI-powered video scripts using the (https://x.ai/api) API, it's free. The application should feature a dynamic text input field that supports uploading documents, images, and links to enhance the AI prompt.
AI Video Script Generator
A full-stack application that generates video scripts using AI, with support for file uploads and script management.

Features
AI-powered script generation using x.ai API
File upload support (text and images)
Script storage and management
Responsive design for mobile and desktop
Copy and download functionality
Tech Stack
Frontend
React
TypeScript
Tailwind CSS
Lucide Icons
Backend
Django
Django REST Framework
SQLite
Setup Instructions
Clone the repository:
git clone <repository-url>
cd video-script-generator
Set up the backend:
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
Create a .env file in the backend directory:
DJANGO_SECRET_KEY=your-secret-key
XAI_API_KEY=your-xai-api-key
DEBUG=True
Start the backend server:
python manage.py runserver
Set up the frontend:
cd ../frontend
npm install
Create a .env file in the frontend directory:
VITE_API_URL=http://localhost:8000/api
Start the frontend development server:
npm run dev
Usage
Enter your video concept in the text input field
Upload supporting documents or images if needed
Click "Generate Script" to create your video script
View, copy, or delete saved scripts from the library
Limitations
OCR functionality for images is not yet implemented
File upload size is limited to 10MB
Currently supports only English language
Future Enhancements
Implement OCR for image text extraction
Add support for multiple languages
Enable script version history
Add export options (PDF, Word)
Implement user authentication
