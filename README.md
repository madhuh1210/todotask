# 🚀 Productivity Tracker App (Dockerized Full-Stack with CI/CD)

## 📌 Project Overview

This project is a **full-stack Productivity Tracker Web Application** that allows users to manage their daily tasks efficiently.
It includes secure authentication, task management features, containerization, and a complete CI/CD pipeline.

The application demonstrates real-world development practices by integrating **frontend, backend, Docker, and automated DevOps workflows**.

---

## 🛠️ Tech Stack

### 🔹 Frontend

* HTML
* CSS
* JavaScript

### 🔹 Backend

* Node.js
* Express.js

### 🔹 Authentication

* JSON Web Tokens (JWT)

### 🔹 DevOps & Tools

* Docker (Containerization)
* Docker Compose (Multi-container orchestration)
* GitHub Actions (CI/CD Pipeline)
* Docker Hub (Container Registry)

---

## 🧠 Architecture

Frontend → Backend API → Data Storage (JSON file)

* The frontend interacts with backend APIs using HTTP requests
* Backend handles authentication and task operations
* Data is stored in a lightweight JSON-based storage system
* Services communicate internally via Docker network

---

## ⚙️ Features

### 🔐 Authentication

* User Registration
* User Login
* JWT-based authentication

### 📋 Task Management

* Add tasks
* View tasks
* Mark tasks as completed
* Delete tasks

### 🔄 System Features

* Real-time UI updates
* Persistent storage (JSON file)
* Secure API communication

---

## 🐳 Containerization (Docker)

The application is fully containerized:

### 🔹 Backend Container

* Built using Node.js base image
* Handles API and authentication

### 🔹 Frontend Container

* Serves static UI using `serve`

### 🔹 Docker Compose

* Runs frontend and backend together
* Enables service-to-service communication

### 📡 Ports

* Frontend → 3000
* Backend → 5000

---

## 🔁 CI/CD Pipeline (GitHub Actions)

A complete CI/CD pipeline is implemented using GitHub Actions.

### 🔹 Continuous Integration (CI)

* Triggered on every push to `main`
* Automatically builds Docker images for:

  * Backend
  * Frontend

### 🔹 Continuous Deployment (CD)

* Logs into Docker Hub securely using access tokens
* Pushes Docker images automatically to:

  * `madhu1210/productivity-backend`
  * `madhu1210/productivity-frontend`

### 🔄 Pipeline Flow

Git Push → GitHub Actions → Build Images → Push to Docker Hub

---

## 🚀 How to Run Locally

### 🔹 Prerequisites

* Docker Desktop installed and running

### 🔹 Steps

```bash
git clone <your-repo-link>
cd productivity-app
docker-compose up --build
```

---

## 🌐 Access the Application

Open in browser:
http://localhost:3000

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
├── docker-compose.yml
└── .github/
    └── workflows/
        └── docker.yml
```

---

## 🔍 Key Learnings

* Built a full-stack web application from scratch
* Implemented secure authentication using JWT
* Containerized applications using Docker
* Managed multi-container architecture using Docker Compose
* Implemented CI/CD pipeline using GitHub Actions
* Automated Docker image build and deployment to Docker Hub
* Understood DevOps workflows and automation pipelines

---

## 💡 Future Enhancements

* Add database (MongoDB / PostgreSQL)
* Improve UI/UX design
* Add analytics dashboard
* Deploy application to cloud (AWS / Azure)
* Implement automated deployment to production

---

## 🧑‍💻 Author

Madhumitha H

---

## ⭐ Conclusion

This project demonstrates a complete end-to-end development lifecycle including application development, containerization, and CI/CD automation.
It showcases strong skills in Full Stack Development and DevOps practices.

