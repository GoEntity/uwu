@echo off
cd E:\Git\GoEntity
echo > hi i will be gone in 5 mins.txt
git add .
git commit -m "okay see you soon later"
git push
timeout /t 300
del file.txt
git add .
git commit -m "poof!"
git push
