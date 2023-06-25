@echo off
cd E:\Git\GoEntity
"C:\Git\bin\git.exe" pull origin main

echo ONLINE > E:\Git\GoEntity\0000000000000000000000000
echo ONLINE > E:\Git\GoEntity\000000000000000000000000
echo ONLINE > E:\Git\GoEntity\00000000000000000000000
echo ONLINE > E:\Git\GoEntity\0000000000000000000000
echo ONLINE > E:\Git\GoEntity\000000000000000000000
echo ONLINE > E:\Git\GoEntity\00000000000000000000
echo ONLINE > E:\Git\GoEntity\0000000000000000000
echo ONLINE > E:\Git\GoEntity\000000000000000000
echo ONLINE > E:\Git\GoEntity\00000000000000000
echo ONLINE > E:\Git\GoEntity\0000000000000000
echo ONLINE > E:\Git\GoEntity\000000000000000
echo ONLINE > E:\Git\GoEntity\00000000000000
echo ONLINE > E:\Git\GoEntity\0000000000000
echo ONLINE > E:\Git\GoEntity\000000000000
echo ONLINE > E:\Git\GoEntity\00000000000
echo ONLINE > E:\Git\GoEntity\0000000000
echo ONLINE > E:\Git\GoEntity\000000000
echo ONLINE > E:\Git\GoEntity\00000000
echo ONLINE > E:\Git\GoEntity\0000000
echo ONLINE > E:\Git\GoEntity\000000
echo ONLINE > E:\Git\GoEntity\00000
echo ONLINE > E:\Git\GoEntity\0000
echo ONLINE > E:\Git\GoEntity\000
echo ONLINE > E:\Git\GoEntity\00
echo ONLINE > E:\Git\GoEntity\0

for %%i in (0 00 000 0000 00000 000000 0000000 00000000 000000000 0000000000 00000000000 000000000000 0000000000000 00000000000000 000000000000000 0000000000000000 00000000000000000 000000000000000000 0000000000000000000 00000000000000000000 000000000000000000000 0000000000000000000000 00000000000000000000000 000000000000000000000000) do "C:\Git\bin\git.exe" add E:\Git\GoEntity\%%i

"C:\Git\bin\git.exe" commit -m "<< ONLINE STATUS >>___________GoEntity is currently ONLINE :)"
"C:\Git\bin\git.exe" push

echo %date% %time% > E:\Git\GoEntity\timePassed

"C:\Git\bin\git.exe" add E:\Git\GoEntity\timePassed
"C:\Git\bin\git.exe" commit -m "spying on GoEntity..."
"C:\Git\bin\git.exe" push

shutdown /s /t 0
