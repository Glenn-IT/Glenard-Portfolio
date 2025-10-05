# Real-Time Visitor Counter Setup Guide

## 🚀 Quick Setup Instructions

### Step 1: Database Setup

1. Create a MySQL database and import the SQL file:
   ```sql
   mysql -u your_username -p < api/database.sql
   ```

### Step 2: Configure Database Connection

1. Edit `api/config.php` and update these values:
   ```php
   $host = 'localhost';           // Your database host
   $dbname = 'portfolio_db';      // Your database name
   $username = 'your_username';   // Your database username
   $password = 'your_password';   // Your database password
   ```

### Step 3: Server Requirements

- PHP 7.4 or higher
- MySQL 5.7 or higher
- Apache/Nginx with PHP support

### Step 4: Upload Files

Upload these files to your web server:

- `api/config.php`
- `api/visitor_counter.php`
- `api/admin.html`
- Updated `index.html`, `main.js`, and `styles.css`

### Step 5: Test the Counter

1. Visit your portfolio website
2. Check if the counters are updating
3. Visit `your-domain.com/api/admin.html` to see detailed stats

## 🔧 Alternative Hosting Options

### Option 1: Free Hosting with InfinityFree

1. Sign up at https://infinityfree.net
2. Create a subdomain (e.g., glenn-portfolio.epizy.com)
3. Upload files via File Manager
4. Use their MySQL database service

### Option 2: Paid Hosting (Recommended)

- Hostinger ($1.99/month)
- Namecheap ($2.88/month)
- SiteGround ($3.99/month)

### Option 3: Cloud Services

- **Vercel + PlanetScale**: Free tier available
- **Netlify + Supabase**: Free tier with PostgreSQL
- **Railway**: Free tier with MySQL

## 📊 Features Included

✅ **Real-time tracking** - Updates every 30 seconds
✅ **Unique visitor detection** - Based on IP + User Agent
✅ **Daily statistics** - Separate today's counters
✅ **Fallback system** - Uses localStorage if server fails
✅ **Admin panel** - View detailed analytics
✅ **Responsive design** - Works on all devices
✅ **Auto-refresh** - Updates when tab becomes active

## 🛠️ Customization Options

### Change Update Frequency

In `main.js`, modify this line:

```javascript
}, 30000); // Change 30000 to desired milliseconds
```

### Add More Statistics

You can extend the database and API to track:

- Geographic location (using IP geolocation)
- Device types and browsers
- Popular pages/sections
- Visit duration
- Referrer sources

### Styling Customization

Modify `styles.css` to change:

- Counter colors and gradients
- Animation effects
- Layout (grid vs flex)
- Typography

## 🔒 Security Notes

1. **Database Security**: Use strong passwords and limit database user permissions
2. **Rate Limiting**: Consider implementing rate limiting to prevent spam
3. **Input Validation**: The API validates and sanitizes all inputs
4. **HTTPS**: Always use HTTPS in production

## 📈 Monitoring

Access the admin panel at: `your-domain.com/api/admin.html`

- View real-time statistics
- Monitor traffic patterns
- Export data for analysis

## 🆘 Troubleshooting

### Counter Not Working?

1. Check database connection in `config.php`
2. Verify PHP error logs
3. Ensure proper file permissions
4. Test API endpoint directly: `your-domain.com/api/visitor_counter.php`

### Fallback Mode?

If you see "localhost" data, the server API isn't accessible. Check:

- File upload paths
- Server PHP configuration
- Database connectivity

## 🔄 Updates and Maintenance

- The system auto-resets daily counters at midnight
- Consider backing up the database regularly
- Monitor for unusual traffic patterns
- Update PHP and MySQL versions as needed

---

**Need Help?** Contact Glenn at glenard2308@gmail.com
