# 🎫 Scalable Event Ticketing API (High Concurrency)

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=flat&logo=nestjs&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=flat&logo=redis&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=flat&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=flat&logo=docker&logoColor=white)

Backend API system designed to handle high-traffic ticket sales (Flash Sale scenario). Built with **NestJS**, **Redis Queue (BullMQ)**, and **PostgreSQL** to ensure data consistency and prevent race conditions (overselling).

## 🚀 Key Features

- **High Concurrency Handling:** Uses `Producer-Consumer` pattern with Redis Queue to handle thousands of requests per second without blocking the main thread.
- **Race Condition Prevention:** Implemented **Optimistic Locking** & **Database Transactions (ACID)** using Prisma to prevent overselling tickets.
- **Scalable Architecture:** Decoupled architecture where the API (Producer) is separated from the Order Processor (Consumer).
- **Real-time Monitoring:** Integrated **Bull Board** dashboard to monitor queue status.

## 🛠 Tech Stack

- **Framework:** NestJS (Node.js)
- **Language:** TypeScript
- **Database:** PostgreSQL + Prisma ORM
- **Message Broker:** Redis + BullMQ
- **Monitoring:** Bull Board
- **Containerization:** Docker & Docker Compose

## 📸 Screenshots

### 1. Queue Monitoring (Bull Board)

![Dashboard Screenshot](https://github.com/user-attachments/assets/f9baf77a-b69c-474f-8229-69e696d2f41d)

### 2. API Documentation (Swagger)

![Swagger Screenshot](https://via.placeholder.com/800x400?text=Please+Upload+Swagger+Screenshot+Here)

## 📦 Installation & Setup

Follow these steps to run the project locally:

**1. Clone the repository**

```bash
git clone [https://github.com/ryanhikmall/scalable-ticketing-api.git](https://github.com/ryanhikmall/scalable-ticketing-api.git)
cd scalable-ticketing-api
```
