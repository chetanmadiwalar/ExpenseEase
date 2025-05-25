
# 💸 ExpenseEase

**ExpenseEase** is a responsive,clean and intuitive personal expense tracker built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). It empowers users to manage their finances with ease by tracking income, expenses, setting monthly limits, and viewing insightful charts.

🟢 **[Live Website](https://chetanexpenseease.netlify.app/)**

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Styled-components / CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose ODM)
- **Authentication**: JSON Web Token (JWT)
- **Charts**: Chart.js, React-chartjs-2

---

## 📦 Features

✅ User Registration and Login  
✅ Add and manage income and expense transactions  
✅ Set monthly spending limits  
✅ Dashboard overview of financial summary  
✅ Data visualization with Pie, Doughnut charts  
✅ JWT-based secure authentication  
✅ Clean and responsive UI  

---

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js and npm
- MongoDB (either local or Atlas)

### 🛠 Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/ExpenseEase.git
cd ExpenseEase
```

2. **Setup the backend**

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

3. **Setup the frontend**

```bash
cd ../frontend
npm install
```

4. **Run the app**

- Start the backend:

```bash
cd ../backend
node server.js
```

- Start the frontend:

```bash
cd ../frontend
npm start
```

Then visit: `http://localhost:3000`

---

## 🔐 Authentication

- JWT tokens are used to protect private routes.
- After login/register, the token is stored in localStorage.

---

## 📊 Charts

The dashboard includes interactive and animated charts:

- Total Income vs Expenses (Pie or Doughnut)
- Expense Category Distribution (Radar, Polar)

---

## 🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 👨‍💻 Author

Made by **Chetan H M**
