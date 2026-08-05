# PeekHue 🎨

PeekHue is a web tool that analyzes any public website and extracts its color palette and font families. Simply paste a website URL, and PeekHue automatically scans the page to identify its most commonly used colors and typography.

## Features

- 🎨 Extracts the 8 most common colors used on a website
- 🔤 Detects font families used across the page
- 🌐 Analyzes any publicly accessible website
- ⚡ Fast analysis powered by Puppeteer
- 📱 Clean, responsive interface built with React and Material UI

## Tech Stack

### Frontend

- React (Vite)
- Material UI
- Axios

### Backend

- Node.js
- Express
- Puppeteer

## How It Works

1. Paste a website URL.
2. Click **Analyze**.
3. The backend launches a headless Chromium browser using Puppeteer.
4. Computed styles are collected from every DOM element.
5. Colors are converted to HEX format, ranked by frequency, and the top 8 are returned.
6. Font families are extracted and displayed.

## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/peekhue.git
cd peekhue
```

### Install Frontend

```bash
cd client
npm install
```

### Install Backend

```bash
cd ../server
npm install
```

## Running the Project

### Start the backend

```bash
cd server
npm run dev
```

### Start the frontend

```bash
cd client
npm run dev
```

The application will be available at:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## Project Structure

```
peekhue/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
└── server/
    ├── controllers/
    ├── routes/
    ├── services/
    ├── server.js
    └── package.json
```

## Future Improvements

- Copy HEX colors with one click
- Export color palettes
- Detect gradients
- Extract font weights and sizes
- Analyze spacing and border radius
- Support dark/light theme detection

## License

This project is licensed under the MIT License.
