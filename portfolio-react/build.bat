@echo off
echo ============================================
echo   Glenard Portfolio - Production Build
echo ============================================
echo.

cd /d "%~dp0portfolio-react"

echo Building for GitHub Pages...
call npm run build

echo.
if exist "dist\" (
    echo Build successful! Files are in portfolio-react\dist\
    echo.
    echo To preview locally, run:
    echo   cd portfolio-react
    echo   npm run preview
    echo.
    echo To deploy to GitHub Pages:
    echo   Just push to main branch - GitHub Actions will deploy automatically!
) else (
    echo Build failed. Check errors above.
)
pause
