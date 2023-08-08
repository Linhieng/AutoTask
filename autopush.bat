@echo off
chcp 65001 > nul

set repository_path=C:\Users\Public\githubcode\AutoTask

if "%1"=="runtask" goto runtask
    set taskname=自动推送 AutoTask 仓库到云端
    set bat_path=%0
    set arguments=runtask
    set taskrun=%bat_path% %arguments%
    set schedule=DAILY
    set starttime=14:00

    schtasks /Create /TN "%taskname%" /TR "%taskrun%" /SC "%schedule%" /ST "%starttime%"
    pause
    exit

:runtask
cd "%repository_path%"
git push
pause
