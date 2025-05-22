# 🚀 WAGMI API - Simple Arithmetic Microservice

This is a simple Node.js + Express API deployed on [Railway](https://railway.app), designed to perform basic arithmetic operations via a RESTful endpoint.

## 🌐 Live Demo

> 🟢 POST Request  
**URL:** `https://wagmi-9000-production-8069.up.railway.app/wagmi`

## 📦 Features

- Accepts JSON input with numbers `a` and `b`
- Returns the sum of `a + b`
- Returns structured JSON with status and input values
- Deployed on Railway with full cloud availability

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Deployment:** Railway
- **Testing:** Postman

## 📤 How to Use

### 1. Make a POST Request

Send a POST request using Postman, curl, or any HTTP client.

### ✅ Request

```http
POST /wagmi
Content-Type: application/json
```
Body (JSON):
```
{
  "a": 10,
  "b": 5
}
```

✅ Response
```
{
  "result": 15,
  "a": 10,
  "b": 5,
  "status": "success"
}
```

🧑‍💻 Run Locally

1. Clone the Repository
```
git clone https://github.com/your-username/wagmi-api.git
cd wagmi-api
```

3. Install Dependencies
```
npm install
```

4. Start the Server
```
node index.js
```

![wagmii](https://github.com/user-attachments/assets/0ad46c35-42c9-4442-aa25-e354d2b7c95d)

![Screenshot (2999)](https://github.com/user-attachments/assets/2334588f-224f-43dc-ac44-a4c4d7225d8d)

That's it!
