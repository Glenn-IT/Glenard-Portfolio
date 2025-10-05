#!/bin/bash
# Quick Deployment Script for Glenn's Portfolio
# This script helps prepare files for upload to free hosting

echo "🚀 Preparing Glenn's Portfolio for Deployment..."

# Create deployment folder
mkdir -p deployment
echo "📁 Created deployment folder"

# Copy essential files
echo "📋 Copying files..."

# Copy main files
cp index.html deployment/
echo "✅ Copied index.html"

# Copy assets folder
cp -r assets deployment/
echo "✅ Copied assets folder"

# Copy API folder
cp -r api deployment/
echo "✅ Copied API folder"

# Create .htaccess for better performance and security
cat > deployment/.htaccess << EOL
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/svg+xml "access plus 1 month"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>

# Hide sensitive files
<Files "config.php">
    Order allow,deny
    Deny from all
</Files>

<Files "database.sql">
    Order allow,deny  
    Deny from all
</Files>
EOL

echo "✅ Created .htaccess file"

# Create README for hosting
cat > deployment/HOSTING_INSTRUCTIONS.txt << EOL
GLENN'S PORTFOLIO - HOSTING INSTRUCTIONS
=======================================

FILES TO UPLOAD:
- index.html (main page)
- assets/ folder (all CSS, JS, images)
- api/ folder (PHP files for visitor counter)
- .htaccess (performance and security)

SETUP STEPS:
1. Upload all files to your hosting's htdocs/public_html folder
2. Create MySQL database in your hosting control panel
3. Import api/database.sql into your database
4. Edit api/config.php with your database details
5. Test your site!

DATABASE DETAILS TO UPDATE IN config.php:
- Host: (from your hosting provider)
- Database name: (your database name)
- Username: (your database username)
- Password: (your database password)

TESTING:
- Visit your site to see if it loads
- Check if visitor counters are working
- Visit yoursite.com/api/admin.html for analytics

Need help? Contact: glenard2308@gmail.com
EOL

echo "✅ Created hosting instructions"

echo ""
echo "🎉 DEPLOYMENT READY!"
echo ""
echo "📁 All files are in the 'deployment' folder"
echo "📋 Next steps:"
echo "   1. Sign up for free hosting (InfinityFree recommended)"
echo "   2. Upload all files from 'deployment' folder"
echo "   3. Create MySQL database"
echo "   4. Update api/config.php with database details"
echo "   5. Test your live site!"
echo ""
echo "📖 Read FREE_HOSTING_SETUP.md for detailed instructions"
echo ""
