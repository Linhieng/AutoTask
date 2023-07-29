@echo off
if "%1" == "hide" goto hide_window_run
    mshta vbscript:createobject("wscript.shell").run("%~nx0 hide",0)(window.close)
    exit
:hide_window_run
node C:/Users/Public/GithubCode/OneNote/backup.js