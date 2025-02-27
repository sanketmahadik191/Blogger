# Blogger App

A blogging application built using the MERN stack (MongoDB, Express.js, React with Vite, and Node.js) with Tailwind CSS for styling. The app allows users to create, read blog posts.

## 🚀 Features

- User authentication (Login/Signup)
- Create, edit, delete, and view blog posts
- Responsive design using Tailwind CSS
- Backend API integration with Express.js
- Deployed frontend and backend on Render

## 🛠 Tech Stack

- **Frontend:** React (Vite) + Tailwind CSS +Redux Toolkit
- **Backend:** Node.js + Express.js
- **Database:** MongoDB
- **Hosting:**  Render (Backend)

## 📂 Project Structure

```
📦 Blogger
├── 📂 client (Frontend - React + Vite)
│   ├── 📂 src
│   │   ├── 📂 components
│   │   ├── 📂 pages
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   ├── 📄 vite.config.js
│   ├── 📄 package.json
│   ├── 📄 tailwind.config.js
│   ├── 📄 .env
│
├── 📂 server (Backend - Node.js + Express)
│   ├── 📂 models
│   ├── 📂 routes
│   ├── 📂 controllers
│   ├── 📂 middleware
│   ├── 📂 config
│   ├── 📂 utils
│   ├── 📄 index.js
│   ├── 📄 package.json
│   ├── 📄 .env
```

## 🎯 Installation & Setup

### Clone the repository
```sh
git clone https://github.com/sanketmahadik191/Blogger.git
cd Blogger
```

### Backend Setup
```sh
cd server
npm install
npm start
```

### Frontend Setup
```sh
cd client
npm install
npm run dev
```

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

### Blog Posts
- `GET /api/blogs/` - Get all posts
- `POST /api/blogs/` - Create a new post
- `GET /api/posts/:id` - Get single post


## 🌍 Deployment

### Frontend
- Deployed on **Render**: [Frontend Link](https://blogger-1-9ra8.onrender.com/)

### Backend
- Deployed on **Render**: [Backend Link](https://blogger-egfo.onrender.com)


## 📌 Future Enhancements

- Comment system
- User profiles
- Rich text editor for posts
- Image upload feature
- Dark mode support
- prime user

## 🤝 Contributing

Contributions are welcome! Fork the repo, create a new branch, and submit a PR.


💡 **Developed by [Sanket Mahadik]**
