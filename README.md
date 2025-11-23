# 📧 Email Classifier - Full Stack Application

Complete email classification system with **AI-powered categorization** and **automatic reply generation**.

## 🏗️ Project Structure

```
email-classifier-monorepo/
├── backend/          # FastAPI backend (Python)
│   ├── app/
│   ├── requirements.txt
│   └── README.md
│
├── frontend/         # Next.js frontend (TypeScript)
│   ├── src/
│   ├── package.json
│   └── README.md
│
└── README.md        # This file
```

## ✨ Features

- 🤖 **AI-Powered Classification**: Categorizes emails as Productive/Unproductive
- 📧 **IMAP Integration**: Automatically processes emails from Gmail
- 📄 **File Upload**: Supports .pdf, .txt, and .eml files
- 🎯 **Rule-Based + LLM**: Hybrid classification system
- 📊 **Logs & History**: SQLite-based logging system
- 🎨 **Modern UI**: Clean, responsive interface built with Next.js + Tailwind

## 🚀 Quick Start

### Prerequisites

- **Python 3.10+**
- **Node.js 18+**
- **npm** (comes with Node.js)

### One-Command Start (Recommended) 🎯

**Option 1: Using NPM**
```bash
# From the monorepo root
npm run dev
```

**Option 2: Using Shell Script (checks dependencies automatically)**
```bash
# From the monorepo root
./start-dev.sh
```

This will automatically start **both** backend and frontend servers simultaneously!
- Backend: `http://localhost:8000`
- Frontend: `http://localhost:3000`
- API Docs: `http://localhost:8000/docs`

---

### Detailed Setup (First Time)

If running for the first time, follow these steps:

#### 1. Backend Setup

```bash
cd backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env and add your OPENAI_API_KEY (optional)
```

#### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Configure environment
cp .env.example .env.local
# Edit .env.local: set NEXT_PUBLIC_API_URL=http://localhost:8000
```

#### 3. Start Both Servers

```bash
# Go back to monorepo root
cd ..

# Start both servers with one command
npm run dev
```

### Alternative: Run Servers Separately

If you prefer to run them separately:

**Terminal 1 - Backend:**
```bash
npm run dev:backend
```

**Terminal 2 - Frontend:**
```bash
npm run dev:frontend
```

## 📦 Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **SQLAlchemy** - ORM and database toolkit
- **PyPDF** - PDF processing
- **OpenAI** - LLM integration (optional)
- **IMAPlib** - Email inbox integration

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **Sonner** - Toast notifications

## 🔌 API Endpoints

### Classification
- `POST /classify` - Classify email text or file

### IMAP Service
- `POST /imap/config` - Start IMAP monitoring
- `GET /imap/status` - Check service status
- `POST /imap/stop` - Stop IMAP monitoring

### Monitoring
- `GET /health` - Health check
- `GET /logs` - View classification history

## 📝 Environment Variables

### Backend (`.env`)
```env
AI_PROVIDER=openai
OPENAI_API_KEY=sk-your-key-here
USE_OPENAI=true
OPENAI_MODEL=gpt-4.1-mini
ALLOW_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
RB_MIN_CONF=0.70
MAX_BODY_CHARS=8000
```

### Frontend (`.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_YOUTUBE_URL=  # Optional demo video
```

## 🎯 Classification Profiles

The system supports 5 built-in profiles:
1. **Default** - General email classification
2. **Financial** - Invoice, payment, billing emails
3. **Legal** - Contracts, agreements, legal documents
4. **Human Resources** - Recruitment, hiring, HR-related
5. **Technical Support** - Bug reports, support requests

## 📚 Documentation

- [Backend README](./backend/README.md) - Detailed backend documentation
- [Frontend README](./frontend/README.md) - Frontend setup and features
- [API Documentation](http://localhost:8000/docs) - Interactive Swagger docs (when running)

## 🛠️ Development

### Available NPM Scripts

From the monorepo root:

```bash
# Start both backend and frontend (recommended)
npm run dev

# Start backend only
npm run dev:backend

# Start frontend only
npm run dev:frontend

# Install all dependencies (first time setup)
npm run install:all

# Install backend dependencies only
npm run install:backend

# Install frontend dependencies only
npm run install:frontend

# Build frontend for production
npm run build:frontend
```

### Run Both Servers Concurrently

Simply run from the monorepo root:

```bash
npm run dev
```

This uses `concurrently` to run both servers with colored output:
- 🔵 **Backend** (blue) - FastAPI on port 8000
- 🟣 **Frontend** (magenta) - Next.js on port 3000

### Testing

**Backend:**
```bash
cd backend
pytest tests/
```

**Frontend:**
```bash
cd frontend
pnpm test
```

## 🚢 Deployment

### Backend (Docker)
```bash
cd backend
docker build -t email-classifier-backend .
docker run -p 8000:8000 --env-file .env email-classifier-backend
```

### Frontend (Vercel/Netlify)
```bash
cd frontend
pnpm build
# Deploy dist folder to your hosting service
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

MIT License - Free to use for prototypes and study.

## 🔗 Links

- **Repository**: [github.com/basantiroomie/emailclassifier](https://github.com/basantiroomie/emailclassifier)
- **Demo**: [Your deployed URL here]

## 👤 Author

[@basantiroomie](https://github.com/basantiroomie)

---

**Made with ❤️ for the AutoU Technical Challenge**
