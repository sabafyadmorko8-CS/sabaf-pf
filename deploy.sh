#!/bin/bash

echo "Starting deployment to GitHub Pages..."
echo

echo "Step 1: Building the project..."
npm install
if [ $? -ne 0 ]; then
    echo "Error: Failed to install dependencies"
    exit 1
fi

npm run build
if [ $? -ne 0 ]; then
    echo "Error: Failed to build project"
    exit 1
fi

echo "Step 2: Deploying to GitHub Pages..."
npm run deploy
if [ $? -ne 0 ]; then
    echo "Error: Failed to deploy"
    exit 1
fi

echo
echo "✅ Deployment completed successfully!"
echo "Your portfolio is now live at: https://sabafyadmorko8-cs.github.io/portfolio/"
echo