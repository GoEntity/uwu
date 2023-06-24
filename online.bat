@echo off
cd E:\Git\GoEntity
git push --set-upstream origin main
echo > GoEntity is ONLINE
git add .
git commit -m "GoEntity is ONLINE"
git push
del GoEntity is OFFLINE
git add .
git commit -m "GoEntity is OFFLINE"
git push
