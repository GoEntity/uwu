@echo off
cd E:\Git\GoEntity
echo > file.txt
git add .
git commit -m "Add file.txt"
git push
timeout /t 300
del file.txt
git add .
git commit -m "Delete file.txt"
git push
