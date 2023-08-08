@echo off
chcp 65001 > nul
set taskname=自动推送 AutoTask 仓库到云端
schtasks /Delete /TN "%taskname%"
pause