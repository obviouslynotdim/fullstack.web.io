# fullstack.web
Here is a **clean README.md section** that clearly explains **how to start your Flask JSON full-stack project** with **separate backend & frontend** 👇
(Formatted so you can copy directly to GitHub)

---

## 🚀 How to Run the Project

This project consists of **two parts**:

* **Backend:** Flask (JSON API)
* **Frontend:** JavaScript (Node / npm)

You need to run them **in two separate terminals**.

---

## 🔧 Backend Setup (Flask)

1. Open **Terminal 1**
2. Navigate to the backend folder:

```bash
cd webapp-flask-json/backend
```

3. Activate the virtual environment:

* **Windows**

```bash
venv\Scripts\activate
```

* **macOS / Linux**

```bash
source venv/bin/activate
```

4. Set the Flask app:

* **Windows (CMD)**

```bash
set FLASK_APP=app.py
```

* **Windows (PowerShell)**

```bash
$env:FLASK_APP="app.py"
```

* **macOS / Linux**

```bash
export FLASK_APP=app.py
```

5. Run the Flask server:

```bash
flask run
```

➡️ Backend will run at:

```
http://127.0.0.1:5000/
```

---

## 🎨 Frontend Setup

1. Open **Terminal 2**
2. Navigate to the frontend folder:

```bash
cd webapp-flask-json/frontend
```

3. Install dependencies (first time only):

```bash
npm install
```

4. Start the frontend development server:

```bash
npm run dev
```

➡️ Frontend will run at:

```
http://localhost:5173/
```

---
