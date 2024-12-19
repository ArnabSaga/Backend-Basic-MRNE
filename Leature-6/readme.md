# Middleware in Express

Middleware in Express is a key concept that allows you to handle requests and responses systematically. It acts as a processing layer between the request and your main application logic.

## 📖 What is Middleware?
Middleware refers to functions that execute during the lifecycle of an HTTP request. It can:
- Process `req` (request object) and `res` (response object).
- End the request-response cycle.
- Call the next middleware in the stack using the `next()` function.

---

## ⚙️ Key Features of Middleware
1. **Runs Before Main Code**: Middleware functions are executed before your application logic.
2. **Takes Three Parameters**:
   - `req`: The request object.
   - `res`: The response object.
   - `next`: A function to pass control to the next middleware.

---

## 🛠️ Types of Middleware

1. **Built-in Middleware**  
   Provided by Express, e.g.:
   - `express.json()` – Parses incoming JSON requests.
   - `express.urlencoded()` – Parses URL-encoded payloads.

2. **Custom Middleware**  
   Middleware written to handle specific logic in your application.  

3. **Third-party Middleware**  
   External middleware libraries installed via npm, e.g.:
   - `body-parser`
   - `cors`
   - `morgan`

---