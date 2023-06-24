@echo off
cd E:\Git\GoEntity
git pull origin main
echo > 000_STATUS_000
git add .
git commit -m "GoEntity is ONLINE"
git push