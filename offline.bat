@echo off
cd E:\Git\uwu
"C:\Git\bin\git.exe" pull origin main

echo OFFLINE > E:\Git\uwu\0000000000000000000000000
echo OFFLINE > E:\Git\uwu\000000000000000000000000
echo OFFLINE > E:\Git\uwu\00000000000000000000000
echo OFFLINE > E:\Git\uwu\0000000000000000000000
echo OFFLINE > E:\Git\uwu\000000000000000000000
echo OFFLINE > E:\Git\uwu\00000000000000000000

"C:\Git\bin\git.exe" add E:\Git\uwu\0000000000000000000000000
"C:\Git\bin\git.exe" add E:\Git\uwu\000000000000000000000000
"C:\Git\bin\git.exe" add E:\Git\uwu\00000000000000000000000
"C:\Git\bin\git.exe" add E:\Git\uwu\0000000000000000000000
"C:\Git\bin\git.exe" add E:\Git\uwu\000000000000000000000
"C:\Git\bin\git.exe" add E:\Git\uwu\00000000000000000000

"C:\Git\bin\git.exe" reset -- offline.bat
"C:\Git\bin\git.exe" commit -m "<< ONLINE STATUS >>_______________GoEntity is currently OFFLINE :("

echo %date% %time% > E:\Git\uwu\timePassed
"C:\Git\bin\git.exe" add E:\Git\uwu\timePassed
"C:\Git\bin\git.exe" commit -m "spying on GoEntity..."

"C:\Git\bin\git.exe" push origin main

@echo off
timeout /t 10
shutdown /s /t 0