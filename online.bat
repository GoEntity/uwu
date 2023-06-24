@echo off
cd E:\Git\GoEntity
git pull origin main

echo HI IM ONLINE > 000_STATUS_000
git add 000_STATUS_000
git reset -- online.bat
git commit -m "<< ONLINE STATUS >>_______________GoEntity is currently ONLINE"
git push