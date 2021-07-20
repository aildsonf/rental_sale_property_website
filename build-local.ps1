Write-Host '======================================================'
Write-Host "[1/5] - Removing Next.js build folder ..." -fore Cyan
Remove-Item "./.next" -Recurse

Write-Host '======================================================'
Write-Host "[2/5] - Removing .node_modules folder ..." -fore Cyan
Remove-Item "./node_modules" -Recurse

Write-Host '======================================================'
Write-Host "[3/5] - Removing lock files ..." -fore Cyan
Remove-Item "./yarn.lock" -Recurse
Remove-Item "./package-lock.json" -Recurse

Write-Host '======================================================'
Write-Host "[4/5] - Installing Dependecies ..." -fore Green
npm install

Write-Host '======================================================'
Write-Host "[5/5] - Building Project ..." -fore Green
npm run build

Write-Host '======================================================'
Write-Host "Starting ..." -fore Yellow
npm run start
