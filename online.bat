@echo off
cd E:\Git\GoEntity
"C:\Git\bin\git.exe" pull origin main

echo ONLINE > E:\Git\GoEntity\0000000000000000000000000

"C:\Git\bin\git.exe" add E:\Git\GoEntity\0000000000000000000000000

"C:\Git\bin\git.exe" reset -- online.bat
"C:\Git\bin\git.exe" commit -m "<< ONLINE STATUS >>_______________GoEntity is currently ONLINE :)"

echo %date% %time% > E:\Git\GoEntity\timePassed
"C:\Git\bin\git.exe" add E:\Git\GoEntity\timePassed
"C:\Git\bin\git.exe" commit -m "spying on GoEntity..."

"C:\Git\bin\git.exe" push origin main