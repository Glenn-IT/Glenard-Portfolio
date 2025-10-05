@echo off
REM Quick Deployment Script for Glenn's Portfolio (Windows)
REM This script helps prepare files for upload to free hosting

echo 🚀 Preparing Glenn's Portfolio for Deployment...

REM Create deployment folder
if not exist "deployment" mkdir deployment
echo 📁 Created deployment folder

REM Copy essential files
echo 📋 Copying files...

REM Copy main files
copy index.html deployment\ >nul
echo ✅ Copied index.html

REM Copy assets folder
xcopy assets deployment\assets\ /E /I /Q >nul
echo ✅ Copied assets folder

REM Copy API folder  
xcopy api deployment\api\ /E /I /Q >nul
echo ✅ Copied API folder

REM Create .htaccess for better performance
echo # Enable compression > deployment\.htaccess
echo ^<IfModule mod_deflate.c^> >> deployment\.htaccess
echo     AddOutputFilterByType DEFLATE text/css >> deployment\.htaccess
echo     AddOutputFilterByType DEFLATE application/javascript >> deployment\.htaccess
echo     AddOutputFilterByType DEFLATE image/png >> deployment\.htaccess
echo ^</IfModule^> >> deployment\.htaccess
echo ✅ Created .htaccess file

REM Create instructions
echo GLENN'S PORTFOLIO - HOSTING INSTRUCTIONS > deployment\HOSTING_INSTRUCTIONS.txt
echo ======================================= >> deployment\HOSTING_INSTRUCTIONS.txt
echo. >> deployment\HOSTING_INSTRUCTIONS.txt
echo FILES TO UPLOAD: >> deployment\HOSTING_INSTRUCTIONS.txt
echo - index.html (main page) >> deployment\HOSTING_INSTRUCTIONS.txt
echo - assets/ folder (all CSS, JS, images) >> deployment\HOSTING_INSTRUCTIONS.txt
echo - api/ folder (PHP files for visitor counter) >> deployment\HOSTING_INSTRUCTIONS.txt
echo - .htaccess (performance and security) >> deployment\HOSTING_INSTRUCTIONS.txt
echo. >> deployment\HOSTING_INSTRUCTIONS.txt
echo SETUP STEPS: >> deployment\HOSTING_INSTRUCTIONS.txt
echo 1. Upload all files to your hosting's htdocs folder >> deployment\HOSTING_INSTRUCTIONS.txt
echo 2. Create MySQL database in hosting control panel >> deployment\HOSTING_INSTRUCTIONS.txt
echo 3. Import api/database.sql into your database >> deployment\HOSTING_INSTRUCTIONS.txt
echo 4. Edit api/config.php with your database details >> deployment\HOSTING_INSTRUCTIONS.txt
echo 5. Test your site! >> deployment\HOSTING_INSTRUCTIONS.txt
echo. >> deployment\HOSTING_INSTRUCTIONS.txt
echo Need help? Contact: glenard2308@gmail.com >> deployment\HOSTING_INSTRUCTIONS.txt

echo ✅ Created hosting instructions

echo.
echo 🎉 DEPLOYMENT READY!
echo.
echo 📁 All files are in the 'deployment' folder
echo 📋 Next steps:
echo    1. Sign up for free hosting (InfinityFree recommended)
echo    2. Upload all files from 'deployment' folder
echo    3. Create MySQL database
echo    4. Update api/config.php with database details
echo    5. Test your live site!
echo.
echo 📖 Read FREE_HOSTING_SETUP.md for detailed instructions
echo.
pause
