@echo off
echo Pushing changes to GitHub...
git add .
git commit -m "Fix image paths for sabaf-pf repository"
git push origin main
echo.
echo ✅ Changes pushed successfully!
echo Your site will update at: https://sabafyadmorko8-cs.github.io/sabaf-pf/
pause