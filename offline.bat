@echo off
cd E:\Git\GoEntity
git pull origin main

echo HI IM OFFLINE > 000_STATUS_000
git add 000_STATUS_000
git reset -- offline.bat
git commit -m "<< ONLINE STATUS >>_______________GoEntity is currently OFFLINE"
git push

