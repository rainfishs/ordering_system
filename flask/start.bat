@echo off

set VENV_PATH=py_venv

set DIST_PATH=..\dist


if not exist %VENV_PATH% (
	python -m venv %VENV_PATH%
	.\%VENV_PATH%\Scripts\pip install -r requirements.txt
)

if exist %DIST_PATH% (
	del .\static /Q
	copy %DIST_PATH%\static .\static /Y
	copy %DIST_PATH% .\templates /Y
)

start chrome 127.0.0.1:8080/admin
.\%VENV_PATH%\Scripts\python main.py
