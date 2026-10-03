@echo off
title TIS Homepage Redesign
cd /d "%~dp0"
if not exist node_modules (
  echo Installing project dependencies...
  call npm install
  if errorlevel 1 (
    echo.
    echo Installation failed. Check Node.js and your internet connection.
    pause
    exit /b 1
  )
)
echo Starting TIS Homepage Redesign...
call npm run dev
pause
