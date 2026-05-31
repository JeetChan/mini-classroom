@echo off
chcp 65001 > nul
title 一年级下册数学知识点学习网站

echo ========================================
echo   一年级下册数学知识点学习网站
echo ========================================
echo.
echo 正在启动本地服务器...
echo.

cd /d "%~dp0"

REM 尝试使用Python启动
where python >nul 2>&1
if %errorlevel%==0 (
    echo 使用 Python 启动服务器...
    echo 请在浏览器中打开: http://localhost:8080
    echo 按 Ctrl+C 停止服务器
    echo.
    python -m http.server 8080
    goto :end
)

REM 尝试使用Node.js启动
where node >nul 2>&1
if %errorlevel%==0 (
    echo 使用 Node.js 启动服务器...
    echo 请在浏览器中打开: http://localhost:3000
    echo 按 Ctrl+C 停止服务器
    echo.
    npx serve . -p 3000
    goto :end
)

REM 尝试使用PowerShell启动
echo 尝试使用 PowerShell 启动...
powershell -Command "Start-Process powershell -ArgumentList '-NoExit', '-Command', 'cd ''%~dp0''; Write-Host ''请在浏览器中打开: http://localhost:8080''; Write-Host ''按 Ctrl+C 停止服务器''; Write-Host ''.''; python -m http.server 8080' -Verb RunAs"

:end
pause
