@echo off
cd E:\Git\GoEntity
git pull origin main
git push --set-upstream origin main
del 000_STATUS_000
git add .
git commit -m " "
git push
echo > 000_STATUS_000
git add 000_STATUS_000
git commit -m "_________________________________________GoEntity is currently OFFLINE"
git push

