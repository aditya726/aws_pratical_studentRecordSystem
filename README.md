# Student Records Management System

Simple full-stack student records management app with secure authentication:
- `backend`: Node.js + Express + MongoDB API + JWT Authentication
- `frontend`: React + Vite app (with TailwindCSS, React Router, and a Premium Landing Page)

## Prerequisites

- Node.js `20.x` (LTS, recommended)
- npm `10.x` (comes with Node.js 20)
- MongoDB connection string

### Compatible Runtime Version

Use the following runtime for best compatibility with both backend and frontend:
- Node.js: `20.x`
- npm: `10.x`

Check your versions:
```bash
node -v
npm -v
```

### Install Node.js + npm

Ubuntu/Debian (NodeSource):
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt install npm
```

## 1) Backend Configuration

1. Go to backend folder:
   ```bash
   cd backend
   ```
2. Create/Update `.env` file with the following variables:
   - `MONGO_URI` (your MongoDB connection string)
   - `JWT_SECRET` (your secret key for signing tokens)
   - Optional: `PORT` (default `5000`)

## 2) Install Dependencies

Install backend dependencies:
```bash
cd backend
npm install
```

Install frontend dependencies:
```bash
cd ../frontend
npm install
```

## 3) Run the Project

Open 2 terminals.

Terminal 1 (backend):
```bash
cd backend
npm start
```

Terminal 2 (frontend):
```bash
cd frontend
npm run dev -- --host
```

## 4) Access URLs

- Frontend: `http://public_ip:5173`
- Backend API: `http://public_ip:5000`

## Notes

- If frontend cannot connect to backend, ensure backend is running on port `5000`.
