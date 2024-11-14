@echo off
REM Navigate to the folder where run.bat is located
cd /d "%~dp0"

REM Install required dependencies using the portable Python interpreter
PortablePython\python.exe -m pip install --upgrade pip
PortablePython\python.exe -m pip install -r requirements.txt

REM Run your Python script
PortablePython\python.exe Browser.py

REM Pause to keep the window open after execution
pause
