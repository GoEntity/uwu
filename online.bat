@echo off
cd E:\Git\uwu
"C:\Git\bin\git.exe" pull origin main

echo ONLINE > E:\Git\uwu\0000000000000000000000000
echo ONLINE > E:\Git\uwu\000000000000000000000000
echo ONLINE > E:\Git\uwu\00000000000000000000000
echo ONLINE > E:\Git\uwu\0000000000000000000000
echo ONLINE > E:\Git\uwu\000000000000000000000
echo ONLINE > E:\Git\uwu\00000000000000000000

"C:\Git\bin\git.exe" add E:\Git\uwu\0000000000000000000000000
"C:\Git\bin\git.exe" add E:\Git\uwu\000000000000000000000000
"C:\Git\bin\git.exe" add E:\Git\uwu\00000000000000000000000
"C:\Git\bin\git.exe" add E:\Git\uwu\0000000000000000000000
"C:\Git\bin\git.exe" add E:\Git\uwu\000000000000000000000
"C:\Git\bin\git.exe" add E:\Git\uwu\00000000000000000000

"C:\Git\bin\git.exe" reset -- online.bat
"C:\Git\bin\git.exe" commit -m "<< ONLINE STATUS >>_______________uwu is currently ONLINE :)"

echo %date% %time% > E:\Git\uwu\timePassed
"C:\Git\bin\git.exe" add E:\Git\uwu\timePassed
"C:\Git\bin\git.exe" commit -m "spying on GoEntity.............."

"C:\Git\bin\git.exe" push origin main
