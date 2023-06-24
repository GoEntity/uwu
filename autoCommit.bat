@echo off
cd E:\Git\GoEntity
git push --set-upstream origin main
echo > HI_I_WILL_BE_GONE_IN_5_MINS
git add .
git commit -m "HOW ARE YOU TODAY?"
git push
timeout /t 300
del file.txt
git add .
git commit -m "SEE YOU SOON!"
git push
