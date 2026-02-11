@echo off
echo Starting deployment to GitHub Pages...
echo.

echo Step 1: Building the project...
call npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies
    pause
    exit /b 1
)

call npm run build
if %errorlevel% neq 0 (
    echo Error: Failed to build project
    pause
    exit /b 1
)

echo Step 2: Deploying to GitHub Pages...
call npm run deploy
if %errorlevel% neq 0 (
    echo Error: Failed to deploy
    pause
    exit /b 1
)

echo.
echo ✅ Deployment completed successfully!
echo Your portfolio is now live at: https://sabafyadmorko8-cs.github.io/portfolio/
echo.
pause