@echo off
echo ========================================
echo     Pushing to GitHub - amarcosmatics
echo ========================================
echo.

echo [1/3] Checking current status...
git status
echo.

echo [2/3] Attempting to push to GitHub...
echo This may ask for authentication...
echo.

git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo SUCCESS! Files pushed to GitHub!
    echo ========================================
    echo.
    echo Now go to Vercel and click Redeploy
    echo https://vercel.com
    echo.
) else (
    echo.
    echo ========================================
    echo FAILED! Authentication or permission issue
    echo ========================================
    echo.
    echo Please use GitHub Desktop instead:
    echo 1. Download from: https://desktop.github.com
    echo 2. Open project folder
    echo 3. Click "Push origin"
    echo.
)

echo [3/3] Verifying files on GitHub...
echo Open this link to verify:
echo https://github.com/omier-365/amarcosmatics/tree/main/app
echo.

pause
