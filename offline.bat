@echo off
cd E:\Git\GoEntity
git pull origin main
del 000_STATUS_000
git add .
git commit -m "Is GoEntity Online.......?"
git push
echo > 000_STATUS_000
git add .
git commit -m "GoEntity is OFFLINE"
git push

