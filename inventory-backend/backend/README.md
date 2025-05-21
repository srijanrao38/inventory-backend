# Inventory Backend System

## Setup Instructions

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd inventory-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/inventory_db
JWT_SECRET=your_jwt_secret
```

### 4. Run the server
```bash
node app.js
```

## API Endpoints

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

### Products (JWT required for write actions)
- POST `/api/products/`
- GET `/api/products/`
- GET `/api/products/:id`
- PUT `/api/products/:id`
- DELETE `/api/products/:id`
- PUT `/api/products/restock/:id`

## Notes
- Use Postman or Thunder Client to test.
- Connect to a frontend (React, etc.) for full user experience.
