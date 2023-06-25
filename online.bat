@echo off
cd E:\Git\GoEntity
"C:\Git\bin\git.exe" pull origin main

echo HI IM ONLINE > 0000000000000000000000000
echo HI IM ONLINE > 000000000000000000000000
echo HI IM ONLINE > 00000000000000000000000
echo HI IM ONLINE > 0000000000000000000000
echo HI IM ONLINE > 000000000000000000000

"C:\Git\bin\git.exe" add 0000000000000000000000000
"C:\Git\bin\git.exe" add 000000000000000000000000
"C:\Git\bin\git.exe" add 00000000000000000000000
"C:\Git\bin\git.exe" add 0000000000000000000000
"C:\Git\bin\git.exe" add 000000000000000000000

"C:\Git\bin\git.exe" reset -- online.bat
"C:\Git\bin\git.exe" commit -m "<< ONLINE STATUS >>_______________GoEntity is currently ONLINE :)"
"C:\Git\bin\git.exe" push