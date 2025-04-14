# MongoDB-connector-TS
using typescript to create a mongoDB connector

Here’s a comprehensive **README** for setting up and running your MongoDB Connector API project. This includes all the steps, dependencies, and code snippets for a smooth setup!

---
## 🚀 Setup & Installation

Follow these steps to set up and run the project locally:

### 1. **Clone the Repository**

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/yourusername/mongodb-connector-TS.git
cd mongodb-connector-TS
```

### 2. **Install Dependencies**

Run the following command to install all the necessary dependencies for the project:

```bash
npm install
```

This will install the required dependencies specified in `package.json`.

### 3. **Set up Environment Variables**

Create a `.env` file at the root of the project and add your **MongoDB connection string** (replace with your actual connection string):

```bash
MONGO_URI=mongodb://localhost:27017/mydatabase
PORT=3000
```

Ensure your MongoDB instance is running locally or replace `mongodb://localhost:27017/mydatabase` with your own MongoDB URI.

---

## 🛠️ Run the Project

### 1. **Compile TypeScript Code**

To compile the TypeScript code and generate the `dist` folder:

```bash
npm run build
```

### 2. **Start the Development Server**

Run the project in **development mode** with live reloading using:

```bash
npm run dev
```

This will start the server on port `3000` (or the port you’ve set in `.env`). You should see the following message:

```
MongoDB Connector API is running
```


---

## 📝 Folder Structure

```
MongoDB-connector-TS
├─ .env                        # Environment variables
├─ dist                        # Compiled JavaScript files
├─ eslint.config.mjs           # ESLint configuration file
├─ package-lock.json           # Package lock for consistent installs
├─ package.json                # Project metadata and dependencies
├─ README.md                   # Project documentation
├─ src
│  ├─ app.ts                   # Express app setup
│  ├─ config
│  │  └─ database.ts           # MongoDB database connection logic
│  ├─ controllers
│  │  └─ user.controller.ts    # Controllers for user routes
│  ├─ routes
│  │  └─ user.routes.ts        # Express routes for user operations
│  ├─ repositories
│  │  └─ user.repository.ts    # Database queries for user operations
│  ├─ services
│  │  └─ user.service.ts       # Business logic for user operations
│  ├─ index.ts                 # Entry point to start the server
└─ tsconfig.json               # TypeScript configuration file
```
