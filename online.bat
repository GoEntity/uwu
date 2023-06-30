@echo off
cd E:\Git\auto_git_push_for_my_blog
"C:\Git\bin\git.exe" pull origin main

echo ONLINE > E:\Git\auto_git_push_for_my_blog\0000000000000000000000000
echo ONLINE > E:\Git\auto_git_push_for_my_blog\000000000000000000000000
echo ONLINE > E:\Git\auto_git_push_for_my_blog\00000000000000000000000
echo ONLINE > E:\Git\auto_git_push_for_my_blog\0000000000000000000000
echo ONLINE > E:\Git\auto_git_push_for_my_blog\000000000000000000000
echo ONLINE > E:\Git\auto_git_push_for_my_blog\00000000000000000000

"C:\Git\bin\git.exe" add E:\Git\auto_git_push_for_my_blog\0000000000000000000000000
"C:\Git\bin\git.exe" add E:\Git\auto_git_push_for_my_blog\000000000000000000000000
"C:\Git\bin\git.exe" add E:\Git\auto_git_push_for_my_blog\00000000000000000000000
"C:\Git\bin\git.exe" add E:\Git\auto_git_push_for_my_blog\0000000000000000000000
"C:\Git\bin\git.exe" add E:\Git\auto_git_push_for_my_blog\000000000000000000000
"C:\Git\bin\git.exe" add E:\Git\auto_git_push_for_my_blog\00000000000000000000

"C:\Git\bin\git.exe" reset -- online.bat
"C:\Git\bin\git.exe" commit -m "<< ONLINE STATUS >>_______________auto_git_push_for_my_blog is currently ONLINE :)"

echo %date% %time% > E:\Git\auto_git_push_for_my_blog\timePassed
"C:\Git\bin\git.exe" add E:\Git\auto_git_push_for_my_blog\timePassed
"C:\Git\bin\git.exe" commit -m "spying on GoEntity.............."

"C:\Git\bin\git.exe" push origin main