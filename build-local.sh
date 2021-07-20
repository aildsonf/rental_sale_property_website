#!/bin/bash
echo '======================================================'
echo "[1/5] - Removing Next.js build folder ..."
rm -rf .next

echo '======================================================'
echo "[2/5] - Removing node_modules folder ..."
rm -rf node_modules

echo '======================================================'
echo "[3/5] - Removing lock files ..."
rm -rf package-lock.json
rm -rf yarn.lock

echo '======================================================'
echo "[4/5] - Installing Dependecies ..."
npm install

echo '======================================================'
echo "[5/5] - Building Project ..."
npm run build

echo '======================================================'
echo "Starting ..."
npm run start
