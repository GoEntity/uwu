@echo off
cd E:\Git\GoEntity
git pull origin main
del 000_STATUS_000
git add .
git commit -m " "
git push
echo > 000_STATUS_000
git add .
git commit -m "_______________________________GoEntity is OFFLINE"
git push

