@echo off
echo ============================================
echo   Glenard Portfolio - React Setup Script
echo ============================================
echo.

cd /d "%~dp0portfolio-react"

echo [1/3] Checking Node.js...
node --version || (
    echo ERROR: Node.js not found!
    echo Download Node.js from: https://nodejs.org/
    echo Then re-run this script.
    pause
    exit /b 1
)

echo.
echo [2/3] Installing dependencies...
npm install

echo.
echo [3/3] Starting development server...
echo.
echo  >> Open http://localhost:5173 in your browser
echo  >> Press Ctrl+C to stop
echo.
npm run dev
