🤖 AI-Virtual-Assistant
A smart virtual assistant built using the MERN stack that understands and speaks with the user using Google Web Speech, generates intelligent responses via Gemini API, and supports user-customized avatars and commands. Users can talk to their assistant and receive helpful responses based on natural language understanding.

## 🚀 Live Demo

Check out the live version of the AI-Virtual-Assistant here:  
🔗 [AI-Virtual-Assistant Live Demo](https://ai-virtual-assistant-b8pr.onrender.com)


🧠 Features
🎤 Voice interaction using Web Speech API

🧠 Natural Language Processing with Google Gemini API

☁️ Cloudinary for avatar/image upload

🖼️ Multer for file handling

📅 Intelligent date, time, and general queries

📂 Persistent command history (stored in MongoDB)

🧑‍💼 User profile with editable assistant name & image

🌐 Smart commands: YouTube search/play, Google search, calculator open, weather, and more

🛠️ Tech Stack
Frontend
React.js

React Router

Tailwind CSS

Web Speech API (for speaking assistant responses)

Backend
Node.js

Express.js

MongoDB with Mongoose

Cloudinary (via uploadOnCloudinary)

Multer (for file uploads)

Gemini API (for generating assistant replies)

Moment.js (for date/time formatting)


Local Setup
bash
Copy
Edit
# Clone the repository
git clone https://github.com/kamlesh1002/AI-Virtual-Assistant.git
cd AI-Virtual-Assistant

# Setup server
cd server
npm install
npm run dev

# Setup client
cd ../client
npm install
npm start


🔐 Authentication
JWT-based user login system

Each user has personalized assistant settings and command history

🙋‍♂️ Author
Made with ❤️ by Kamlesh Kumar Verma

📧 Email: kamleshverma1002@gmail.com

🔗 GitHub:https://github.com/kamalkumarverma

