# 🚀 Free Web Hosting Setup Guide for Glenn's Portfolio

## 🎯 Recommended Free Hosting Options

### Option 1: InfinityFree (Best for PHP + MySQL) ⭐ RECOMMENDED

- **Free MySQL Database**: ✅
- **PHP Support**: ✅
- **Custom Domain**: ✅
- **No Ads**: ✅
- **Storage**: 5GB
- **Bandwidth**: Unlimited

### Option 2: 000webhost

- **Free MySQL Database**: ✅
- **PHP Support**: ✅
- **Storage**: 1GB
- **Bandwidth**: 10GB/month

### Option 3: Vercel + PlanetScale (Modern Stack)

- **Static Hosting**: ✅
- **Serverless Functions**: ✅
- **Free Database**: ✅ (PlanetScale)

---

## 🔥 Step-by-Step Setup with InfinityFree

### Step 1: Sign Up for InfinityFree

1. Go to **https://infinityfree.net**
2. Click "**Create Account**"
3. Fill in your details:
   - Username: `glenn-portfolio` (or similar)
   - Email: Your email address
   - Password: Strong password
4. Verify your email address

### Step 2: Create Your Website

1. After login, click "**Create Account**"
2. Choose subdomain: `glenn-portfolio.epizy.com` (or any available)
3. Or use your own domain if you have one
4. Wait for account creation (usually 5-10 minutes)

### Step 3: Access Control Panel

1. Once created, click "**Control Panel**"
2. You'll see the vPanel dashboard

### Step 4: Create MySQL Database

1. In vPanel, find "**MySQL Databases**"
2. Click "Create New Database"
3. Database Name: `portfolio_db`
4. Click "Create Database"
5. **IMPORTANT**: Note down these details:
   - Database Name: `epiz_xxxxx_portfolio_db`
   - Database Host: `sqlxxx.epizy.com`
   - Username: `epiz_xxxxx`
   - Password: (provided by InfinityFree)

### Step 5: Import Database Structure

1. Click "**phpMyAdmin**" in vPanel
2. Login with your database credentials
3. Select your database (`epiz_xxxxx_portfolio_db`)
4. Click "**SQL**" tab
5. Copy and paste the content from `api/database.sql`
6. Click "**Go**" to execute

### Step 6: Upload Your Files

1. In vPanel, click "**File Manager**"
2. Navigate to `htdocs` folder
3. Delete the default `index.html` file
4. Upload these files:
   - `index.html`
   - `assets/` folder (entire folder with css, js, img)
   - `api/` folder (config.php, visitor_counter.php, admin.html)

### Step 7: Configure Database Connection

1. In File Manager, open `api/config.php`
2. Update with your InfinityFree database details:

```php
$host = 'sqlxxx.epizy.com';           // Your database host
$dbname = 'epiz_xxxxx_portfolio_db';  // Your database name
$username = 'epiz_xxxxx';             // Your database username
$password = 'your_db_password';       // Your database password
```

### Step 8: Test Your Website

1. Visit: `https://glenn-portfolio.epizy.com` (your subdomain)
2. Check if visitor counters are working
3. Visit: `https://glenn-portfolio.epizy.com/api/admin.html` for analytics

---

## 🛠️ Alternative: 000webhost Setup

### Quick Setup Steps:

1. Go to **https://000webhost.com**
2. Sign up for free account
3. Create website with subdomain
4. Upload files via File Manager
5. Create MySQL database in control panel
6. Update `config.php` with database details

---

## 🌟 Alternative: Vercel + PlanetScale (Advanced)

### Step 1: Deploy to Vercel

1. Push your code to GitHub
2. Go to **https://vercel.com**
3. Sign up with GitHub
4. Import your repository
5. Deploy automatically

### Step 2: Setup PlanetScale Database

1. Go to **https://planetscale.com**
2. Sign up for free account
3. Create new database
4. Get connection string
5. Update your API to use PlanetScale

---

## 📁 File Upload Checklist

Make sure to upload these files:

```
📁 Root Directory (htdocs)
├── 📄 index.html
├── 📁 assets/
│   ├── 📁 css/
│   │   └── 📄 styles.css
│   ├── 📁 js/
│   │   ├── 📄 main.js
│   │   └── 📄 scrollreveal.min.js
│   ├── 📁 img/
│   │   └── (all your images)
│   └── 📁 pdf/
│       └── 📄 resume.pdf
└── 📁 api/
    ├── 📄 config.php
    ├── 📄 visitor_counter.php
    ├── 📄 admin.html
    └── 📄 database.sql
```

---

## 🔧 Common Issues & Solutions

### Issue 1: Database Connection Error

**Solution**: Double-check database credentials in `config.php`

### Issue 2: File Upload Failed

**Solution**: Check file size limits (usually 2MB per file)

### Issue 3: Visitor Counter Not Working

**Solution**:

1. Test API directly: `your-site.com/api/visitor_counter.php`
2. Check database permissions
3. Verify PHP is working

### Issue 4: CSS/JS Not Loading

**Solution**: Check file paths are correct and files uploaded properly

---

## 🎨 Custom Domain Setup (Optional)

### With InfinityFree:

1. Buy domain from Namecheap/GoDaddy ($10-15/year)
2. In vPanel, go to "Addon Domains"
3. Add your custom domain
4. Update DNS records at your domain registrar

### DNS Records to Add:

```
Type: A Record
Name: @
Value: (IP provided by InfinityFree)

Type: CNAME
Name: www
Value: your-subdomain.epizy.com
```

---

## 📊 Analytics Dashboard Access

Once deployed, access your analytics at:
`https://your-domain.com/api/admin.html`

Features:

- Real-time visitor count
- Today's statistics
- Total page views
- Average views per visitor

---

## 🔒 Security Tips

1. **Change default passwords**
2. **Keep backups** of your database
3. **Use HTTPS** (free with InfinityFree)
4. **Monitor unusual traffic**
5. **Update PHP/MySQL** when possible

---

## 📞 Need Help?

### InfinityFree Support:

- Forum: https://forum.infinityfree.net
- Knowledge Base: Available in control panel

### Quick Fixes:

- Clear browser cache if changes don't appear
- Wait 24-48 hours for DNS propagation
- Check error logs in control panel

---

## 🎉 You're Done!

Your portfolio is now live with:
✅ Real-time visitor tracking
✅ Professional hosting
✅ Custom analytics dashboard
✅ Responsive design
✅ Free SSL certificate

**Your live site**: `https://your-domain.com`
**Admin panel**: `https://your-domain.com/api/admin.html`

---

_Last updated: October 2025_
_For support: glenard2308@gmail.com_
