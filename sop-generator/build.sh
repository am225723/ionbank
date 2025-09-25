#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Build the project
echo "Building project for production..."
npm run build

echo "Build complete! Files are in the dist directory."