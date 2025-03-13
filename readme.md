# 🚀 Frontend Developer Assignment

## 📌 Tech Stack
- **React.js** – Component-based UI library.
- **JavaScript (ES6+)** – Core programming language.
- **React Router** – Client-side navigation.
- **Axios** – HTTP client for API communication.
- **Context API** – Global state management.

## 📝 Task Breakdown

### 1️⃣ Project Setup
- ✅ Initialize a React project.

### 2️⃣ Authentication System
- ✅ **Signup & Login Pages**
  - Form validation using `react-hook-form` or plain React state.
  - Password validation (min length, special characters).
  - Store JWT token securely (`localStorage` / `sessionStorage`).
  - Implement error handling for incorrect logins.

- ✅ **AuthContext API**
  - Create an authentication context.
  - Store and manage user authentication state globally.

- ✅ **Protected Routes**
  - Ensure unauthorized users cannot access the dashboard.
  - Redirect unauthenticated users to the login page.

### 3️⃣ Backend Integration
- ✅ **Use Axios for API communication**
  - Implement API requests (`POST /signup`, `POST /login`, `GET /dashboard`).
  - Properly handle API responses & errors.
  - Implement loading states and error messages.

### 4️⃣ Dashboard Page
- ✅ **Fetch & Display Protected User Data**
  - Make an authenticated request to fetch user-specific data.
  - Display data in a user-friendly manner (table, cards, etc.).

- ✅ **Logout Feature**
  - Clear JWT token and redirect to the login page.

### 5️⃣ State Management
- ✅ **Use React Context API (or Redux) to:**
  - Store the authenticated user’s data.
  - Provide global authentication state.

## ✅ Deliverables
✔️ Fully working React frontend with:
- Login & Signup pages (form validation).
- `AuthContext` to manage user authentication.
- Protected Routes (users must log in to access the dashboard).
- Backend Integration via Axios.
- Proper Routing using React Router.

## 🎯 Bonus Challenge (Optional)
🔥 **Dark Mode Support** – Implement a theme switcher.  
🔥 **Animations** – Use Framer Motion or CSS animations for smooth UI transitions.  

---

# 🛠 Backend Developer Assignment

## 📌 Tech Stack
- **Node.js** – Backend runtime.
- **Express.js** – Fast, minimalist backend framework.
- **MongoDB** – NoSQL database for storing user data.
- **JWT (JSON Web Token)** – Secure user authentication.

## 📝 Task Breakdown

### 1️⃣ Project Setup
- ✅ **Initialize an Express.js backend**
- ✅ **Configure Express Middleware**
  - `express.json()` for parsing JSON.
  - `cors` for handling cross-origin requests.

### 2️⃣ User Authentication
- ✅ **Implement Signup & Login API Endpoints**
  - `/signup` – Register a new user.
  - `/login` – Authenticate and return JWT token.

- ✅ **User Schema (MongoDB)**
  - Fields: `name`, `email`, `password` (hashed), `createdAt`.

- ✅ **JWT Authentication**
  - Generate a JWT token upon successful login.
  - Middleware to protect private routes.

### 3️⃣ CRUD API for Sample Resource
- ✅ **Implement basic CRUD APIs (e.g., for tasks or products)**
  - `POST /tasks` – Create a new task.
  - `GET /tasks` – Fetch all tasks.
  - `PUT /tasks/:id` – Update a task.
  - `DELETE /tasks/:id` – Delete a task.

## ✅ Deliverables
✔️ Working Express API with:
- Authentication System (Signup/Login with JWT).
- MongoDB Schema (`User`, `Tasks`).
- CRUD API for Sample Resource.
- TypeScript Interfaces for API responses.

## 🎯 Bonus Challenge (Optional)
🔥 **Load Balancing** – Implement a reverse proxy (e.g., Nginx).  
🔥 **Rate Limiting** – Prevent excessive API requests.  

---

# 🖌 UI/UX Designer Assignment

## 📌 Tech Stack
- **Figma** – UI/UX Design Tool.
- **Color Theory** – Effective color palettes.
- **Typography** – Readable font selection.

## 📝 Task Breakdown
- ✅ **Design Login & Dashboard Pages**
  - Clean, modern, and user-friendly UI.
  - Proper spacing and responsiveness.

- ✅ **Color Palette Selection**
  - Choose a visually appealing, accessible color scheme.

- ✅ **Style Guide**
  - Define buttons, input fields, typography.

## ✅ Deliverables
✔️ Figma Link with the final design.  
✔️ Exported Color Codes & Fonts.  
✔️ PR with `design-assets.md` file (`Figma` link + assets).  

## 🎯 Bonus Challenge (Optional)
🔥 **Mobile-first UI Design** – Fully responsive from the start.  

---

# 🔍 Software Tester Assignment

## 📌 Tech Stack
- **Jest** – Unit testing for backend.
- **Cypress** – End-to-end (E2E) testing.
- **Postman** – API testing.

## 📝 Task Breakdown

### 1️⃣ Backend Testing (Jest)
- ✅ Write unit tests for authentication & CRUD APIs.
- ✅ Store test cases in `__tests__` folder.

### 2️⃣ Frontend Testing (Cypress)
- ✅ Write E2E tests for login/signup flow.
- ✅ Test protected routes.

### 3️⃣ Test Coverage
- ✅ Ensure at least **80% coverage**.

## ✅ Deliverables
✔️ Jest test files for backend (`__tests__` folder).  
✔️ Cypress test cases for frontend.  
✔️ PR with `testing-setup` branch.  

## 🎯 Bonus Challenge (Optional)
🔥 **Automated Regression Testing** – Run tests on PRs automatically.  

---

# 🔄 Submission Process

1️⃣ Fork the repository & create a branch (`<name>-<role>`).  
2️⃣ Complete the assigned task & commit changes.  
3️⃣ Create a **Pull Request (PR)**.  
4️⃣ Add proper documentation in the PR description. 
5️⃣ UI / UX Designers also create a PR with the figma link in a file and the prototype link

⏳ **Deadline: 15/03/2025**  
🔥 **Bonus Challenge (Optional)** Each team member has extra challenges to go beyond expectations! 🚀
