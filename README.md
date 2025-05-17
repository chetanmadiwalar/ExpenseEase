
# 💸 ExpenseEase

**ExpenseEase** is a simple and intuitive personal expense tracker built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It allows users to manage their income and expenses, set monthly limits, and visualize their financial summary with charts.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Styled-components / CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Token)
- **Charts**: Chart.js / React-chartjs-2

---

## 📦 Features

- User Registration and Login
- Add Income and Expense transactions
- Set a monthly spending limit
- View dashboard summary of all transactions
- Basic data visualization (Pie, Doughnut, etc.)
- JWT-based authentication


---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/ExpenseEase.git
cd ExpenseEase
```

2. **Setup backend**

```bash
cd server
npm install
```

Create a `.env` file in the `server` folder and add:

```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

3. **Setup frontend**

```bash
cd ../client
npm install
```

4. **Run the application**

- Start backend:
  ```bash
  cd ../backend
  node server.js
  ```

- Start frontend:
  ```bash
  cd ../frontend
  npm start
  ```

Visit `http://localhost:3000`

---

## 🔐 Authentication

- JWT tokens are used to protect routes.
- After login/register, token is stored in localStorage.

---

## 📊 Charts

The dashboard includes visual representations of:

- Total Income vs Expenses (Pie or Doughnut)
- Expense category distribution


---

## 🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 👨‍💻 Author

Made by **Chetan H M**
