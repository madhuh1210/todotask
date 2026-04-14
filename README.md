# 🚀 Productivity Tracker App (Dockerized Full-Stack Project)

## 📌 Project Overview

This is a full-stack **Productivity Tracker Web Application** that allows users to:

* Register and log in securely
* Add, update, and delete tasks
* Track their daily productivity

The application is fully containerized using Docker and runs as a multi-container system using Docker Compose.

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Authentication

* JSON Web Tokens (JWT)

### DevOps

* Docker
* Docker Compose

---

## 🧠 Architecture

Frontend → Backend API → Data Storage (JSON)

* The frontend sends HTTP requests to the backend
* The backend handles authentication and task operations
* Data is stored in a local JSON file

---

## ⚙️ Features

* 🔐 User Registration & Login (JWT-based authentication)
* 📋 Create, Read, Update, Delete (CRUD) Tasks
* ✅ Mark tasks as completed
* ❌ Delete tasks
* 🔄 Real-time UI updates

---

## 🐳 Docker Setup

### 1️⃣ Backend Dockerfile

* Uses Node.js base image
* Installs dependencies
* Runs Express server

### 2️⃣ Frontend Dockerfile

* Uses Node.js
* Serves static files using `serve`

### 3️⃣ Docker Compose

* Runs frontend and backend as separate services
* Enables inter-container communication
* Exposes ports:

  * Frontend → 3000
  * Backend → 5000

---

## 🚀 How to Run the Project

### Prerequisites

* Docker Desktop installed and running

### Steps

```bash
# Clone the repository
git clone <your-repo-link>

# Navigate to project folder
cd productivity-app

# Run containers
docker-compose up --build
```

---

## 🌐 Access the Application

Open in browser:

```
http://localhost:3000
```

---

## 🔍 Key Learnings

* Built a full-stack web application from scratch
* Implemented secure authentication using JWT
* Containerized applications using Docker
* Managed multi-container setup using Docker Compose
* Understood service-to-service communication in Docker networks

---

## 📦 Project Structure

```
productivity-app/
│
├── backend/
│   ├── server.js
│   ├── middleware.js
│   ├── data.json
│   └── Dockerfile
│
├── frontend/
│   ├── index.html
│   └── Dockerfile
│
└── docker-compose.yml
```

---

## 💡 Future Enhancements

* Add database (MongoDB / PostgreSQL)
* Improve UI/UX design
* Add productivity analytics dashboard
* Deploy to cloud (AWS / Azure)

---

## 🧑‍💻 Author

Madhumitha H

---

## ⭐ Conclusion

This project demonstrates a complete workflow from development to containerization, showcasing practical skills in full-stack development and DevOps fundamentals.
